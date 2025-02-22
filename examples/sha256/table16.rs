use std::marker::PhantomData;

use super::Sha256Instructions;
use halo2::{
    arithmetic::FieldExt,
    circuit::{Cell, Chip, Layouter, Region},
    plonk::{Advice, Column, ConstraintSystem, Error, Permutation},
};

mod compression;
mod gates;
mod message_schedule;
mod spread_table;
mod util;

use compression::*;
use gates::*;
use message_schedule::*;
use spread_table::*;

const ROUNDS: usize = 64;
const STATE: usize = 8;

#[allow(clippy::unreadable_literal)]
pub(crate) const ROUND_CONSTANTS: [u32; ROUNDS] = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

const IV: [u32; STATE] = [
    0x6a09_e667,
    0xbb67_ae85,
    0x3c6e_f372,
    0xa54f_f53a,
    0x510e_527f,
    0x9b05_688c,
    0x1f83_d9ab,
    0x5be0_cd19,
];

#[derive(Clone, Copy, Debug)]
/// A word in a `Table16` message block.
pub struct BlockWord {
    var: (),
    value: Option<u32>,
}

impl BlockWord {
    /// Create a new `BlockWord`.
    pub fn new(value: u32) -> Self {
        BlockWord {
            var: (),
            value: Some(value),
        }
    }
}

#[derive(Clone, Copy, Debug)]
pub struct CellValue16 {
    var: Cell,
    value: Option<u16>,
}

impl CellValue16 {
    pub fn new(var: Cell, value: u16) -> Self {
        CellValue16 {
            var,
            value: Some(value),
        }
    }
}

#[derive(Clone, Copy, Debug)]
pub struct CellValue32 {
    var: Cell,
    value: Option<u32>,
}

impl CellValue32 {
    pub fn new(var: Cell, value: u32) -> Self {
        CellValue32 {
            var,
            value: Some(value),
        }
    }
}

impl Into<CellValue32> for CellValue16 {
    fn into(self) -> CellValue32 {
        CellValue32::new(self.var, self.value.unwrap() as u32)
    }
}

/// Configuration for a [`Table16Chip`].
#[derive(Clone, Debug)]
pub struct Table16Config {
    lookup: SpreadTableConfig,
    message_schedule: MessageScheduleConfig,
    compression: CompressionConfig,
}

/// A chip that implements SHA-256 with a maximum lookup table size of $2^16$.
#[derive(Clone, Debug)]
pub struct Table16Chip<F: FieldExt> {
    config: Table16Config,
    _marker: PhantomData<F>,
}

impl<F: FieldExt> Chip<F> for Table16Chip<F> {
    type Config = Table16Config;
    type Loaded = ();

    fn config(&self) -> &Self::Config {
        &self.config
    }

    fn loaded(&self) -> &Self::Loaded {
        &()
    }
}

impl<F: FieldExt> Table16Chip<F> {
    pub fn construct(config: <Self as Chip<F>>::Config) -> Self {
        Self {
            config,
            _marker: PhantomData,
        }
    }

    pub fn configure(meta: &mut ConstraintSystem<F>) -> <Self as Chip<F>>::Config {
        // Columns required by this chip:
        let message_schedule = meta.advice_column();
        let extras = [
            meta.advice_column(),
            meta.advice_column(),
            meta.advice_column(),
            meta.advice_column(),
            meta.advice_column(),
            meta.advice_column(),
        ];

        // - Three advice columns to interact with the lookup table.
        let input_tag = meta.advice_column();
        let input_dense = meta.advice_column();
        let input_spread = meta.advice_column();

        let lookup = SpreadTableChip::configure(meta, input_tag, input_dense, input_spread);
        let lookup_inputs = lookup.input.clone();

        // Rename these here for ease of matching the gates to the specification.
        let _a_0 = lookup_inputs.tag;
        let a_1 = lookup_inputs.dense;
        let a_2 = lookup_inputs.spread;
        let a_3 = extras[0];
        let a_4 = extras[1];
        let a_5 = message_schedule;
        let a_6 = extras[2];
        let a_7 = extras[3];
        let a_8 = extras[4];
        let _a_9 = extras[5];

        let perm = Permutation::new(
            meta,
            &[
                a_1.into(),
                a_2.into(),
                a_3.into(),
                a_4.into(),
                a_5.into(),
                a_6.into(),
                a_7.into(),
                a_8.into(),
            ],
        );

        let compression = CompressionConfig::configure(
            meta,
            lookup_inputs.clone(),
            message_schedule,
            extras,
            perm.clone(),
        );

        let message_schedule =
            MessageScheduleConfig::configure(meta, lookup_inputs, message_schedule, extras, perm);

        Table16Config {
            lookup,
            message_schedule,
            compression,
        }
    }

    pub fn load(config: Table16Config, layouter: &mut impl Layouter<F>) -> Result<(), Error> {
        SpreadTableChip::load(config.lookup, layouter)
    }
}

impl<F: FieldExt> Sha256Instructions<F> for Table16Chip<F> {
    type State = State;
    type BlockWord = BlockWord;

    fn zero() -> Self::BlockWord {
        BlockWord::new(0)
    }

    fn initialization_vector(&self, layouter: &mut impl Layouter<F>) -> Result<State, Error> {
        self.config().compression.initialize_with_iv(layouter, IV)
    }

    fn initialization(
        &self,
        layouter: &mut impl Layouter<F>,
        init_state: &Self::State,
    ) -> Result<Self::State, Error> {
        self.config()
            .compression
            .initialize_with_state(layouter, init_state.clone())
    }

    // Given an initialized state and an input message block, compress the
    // message block and return the final state.
    fn compress(
        &self,
        layouter: &mut impl Layouter<F>,
        initialized_state: &Self::State,
        input: [Self::BlockWord; super::BLOCK_SIZE],
    ) -> Result<Self::State, Error> {
        let config = self.config();
        let (_, w_halves) = config.message_schedule.process(layouter, input)?;
        config
            .compression
            .compress(layouter, initialized_state.clone(), w_halves)
    }

    fn digest(
        &self,
        layouter: &mut impl Layouter<F>,
        state: &Self::State,
    ) -> Result<[Self::BlockWord; super::DIGEST_SIZE], Error> {
        // Copy the dense forms of the state variable chunks down to this gate.
        // Reconstruct the 32-bit dense words.
        self.config().compression.digest(layouter, state.clone())
    }
}

/// Common assignment patterns used by Table16 regions.
trait Table16Assignment<F: FieldExt> {
    // Assign cells for general spread computation used in sigma, ch, ch_neg, maj gates
    #[allow(clippy::too_many_arguments)]
    #[allow(clippy::type_complexity)]
    fn assign_spread_outputs(
        &self,
        region: &mut Region<'_, F>,
        lookup: &SpreadInputs,
        a_3: Column<Advice>,
        perm: &Permutation,
        row: usize,
        r_0_even: u16,
        r_0_odd: u16,
        r_1_even: u16,
        r_1_odd: u16,
    ) -> Result<((CellValue16, CellValue16), (CellValue16, CellValue16)), Error> {
        // Lookup R_0^{even}, R_0^{odd}, R_1^{even}, R_1^{odd}
        let r_0_even = SpreadVar::with_lookup(region, lookup, row - 1, SpreadWord::new(r_0_even))?;
        let r_0_odd = SpreadVar::with_lookup(region, lookup, row, SpreadWord::new(r_0_odd))?;
        let r_1_even = SpreadVar::with_lookup(region, lookup, row + 1, SpreadWord::new(r_1_even))?;
        let r_1_odd = SpreadVar::with_lookup(region, lookup, row + 2, SpreadWord::new(r_1_odd))?;

        // Assign and copy R_1^{odd}
        let r_1_odd_spread = region.assign_advice(
            || "Assign and copy R_1^{odd}",
            a_3,
            row,
            || Ok(F::from_u64(r_1_odd.spread.value.unwrap().into())),
        )?;
        region.constrain_equal(perm, r_1_odd.spread.var, r_1_odd_spread)?;

        Ok((
            (
                CellValue16::new(r_0_even.dense.var, r_0_even.dense.value.unwrap()),
                CellValue16::new(r_1_even.dense.var, r_1_even.dense.value.unwrap()),
            ),
            (
                CellValue16::new(r_0_odd.dense.var, r_0_odd.dense.value.unwrap()),
                CellValue16::new(r_1_odd.dense.var, r_1_odd.dense.value.unwrap()),
            ),
        ))
    }

    // Assign outputs of sigma gates
    #[allow(clippy::too_many_arguments)]
    fn assign_sigma_outputs(
        &self,
        region: &mut Region<'_, F>,
        lookup: &SpreadInputs,
        a_3: Column<Advice>,
        perm: &Permutation,
        row: usize,
        r_0_even: u16,
        r_0_odd: u16,
        r_1_even: u16,
        r_1_odd: u16,
    ) -> Result<(CellValue16, CellValue16), Error> {
        let (even, _odd) = self.assign_spread_outputs(
            region, lookup, a_3, perm, row, r_0_even, r_0_odd, r_1_even, r_1_odd,
        )?;

        Ok(even)
    }

    // Assign a cell the same value as another cell and set up a copy constraint between them
    fn assign_and_constrain<A, AR>(
        &self,
        region: &mut Region<'_, F>,
        annotation: A,
        column: Column<Advice>,
        row: usize,
        copy: &CellValue32,
        perm: &Permutation,
    ) -> Result<Cell, Error>
    where
        A: Fn() -> AR,
        AR: Into<String>,
    {
        let cell = region.assign_advice(annotation, column, row, || {
            Ok(F::from_u64(copy.value.unwrap() as u64))
        })?;
        region.constrain_equal(perm, cell, copy.var)?;
        Ok(cell)
    }
}

#[cfg(test)]
mod tests {
    use super::super::{BlockWord, Sha256, BLOCK_SIZE};
    use super::{Table16Chip, Table16Config};
    use halo2::{
        arithmetic::FieldExt,
        circuit::{layouter::SingleChipLayouter, Layouter},
        plonk::{Assignment, Circuit, ConstraintSystem, Error},
    };
    use pairing::bn256::Fr as Fp;

    #[cfg(feature = "dev-graph")]
    #[test]
    fn print_sha256_circuit() {
        struct MyCircuit {}

        impl<F: FieldExt> Circuit<F> for MyCircuit {
            type Config = Table16Config;

            fn configure(meta: &mut ConstraintSystem<F>) -> Self::Config {
                Table16Chip::configure(meta)
            }

            fn synthesize(
                &self,
                cs: &mut impl Assignment<F>,
                config: Self::Config,
            ) -> Result<(), Error> {
                let mut layouter = SingleChipLayouter::new(cs)?;
                let table16_chip = Table16Chip::<F>::construct(config.clone());
                Table16Chip::<F>::load(config, &mut layouter)?;

                // Test vector: "abc"
                let test_input = [
                    BlockWord::new(0b01100001011000100110001110000000),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                ];

                // Create a message of length 31 blocks
                let mut input = Vec::with_capacity(31 * BLOCK_SIZE);
                for _ in 0..31 {
                    input.extend_from_slice(&test_input);
                }

                Sha256::digest(table16_chip, layouter.namespace(|| "'abc' * 31"), &input)?;

                Ok(())
            }
        }

        let circuit: MyCircuit = MyCircuit {};
        eprintln!("{}", halo2::dev::circuit_dot_graph::<Fq, _>(&circuit));
    }

    #[cfg(feature = "dev-graph")]
    #[test]
    fn print_table16_chip() {
        use plotters::prelude::*;
        struct MyCircuit {}

        impl<F: FieldExt> Circuit<F> for MyCircuit {
            type Config = Table16Config;

            fn configure(meta: &mut ConstraintSystem<F>) -> Self::Config {
                Table16Chip::configure(meta)
            }

            fn synthesize(
                &self,
                cs: &mut impl Assignment<F>,
                config: Self::Config,
            ) -> Result<(), Error> {
                let mut layouter = SingleChipLayouter::new(cs)?;
                let table16_chip = Table16Chip::<F>::construct(config.clone());
                Table16Chip::<F>::load(config, &mut layouter)?;

                // Test vector: "abc"
                let test_input = [
                    BlockWord::new(0b01100001011000100110001110000000),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                    BlockWord::new(0),
                ];

                // Create a message of length 2 blocks
                let mut input = Vec::with_capacity(2 * BLOCK_SIZE);
                for _ in 0..2 {
                    input.extend_from_slice(&test_input);
                }

                Sha256::digest(table16_chip, layouter.namespace(|| "'abc' * 2"), &input)?;

                Ok(())
            }
        }

        let root =
            SVGBackend::new("sha-256-table16-chip-layout.svg", (1024, 20480)).into_drawing_area();
        root.fill(&WHITE).unwrap();
        let root = root
            .titled("16-bit Table SHA-256 Chip", ("sans-serif", 60))
            .unwrap();

        let circuit = MyCircuit {};
        halo2::dev::circuit_layout::<Fq, _, _>(&circuit, &root).unwrap();
    }
}
