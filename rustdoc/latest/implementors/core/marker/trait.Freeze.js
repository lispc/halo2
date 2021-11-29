(function() {var implementors = {};
implementors["halo2"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.SimpleFloorPlanner.html\" title=\"struct halo2::circuit::SimpleFloorPlanner\">SimpleFloorPlanner</a>","synthetic":true,"types":["halo2::circuit::floor_planner::single_pass::SimpleFloorPlanner"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/floor_planner/struct.V1.html\" title=\"struct halo2::circuit::floor_planner::V1\">V1</a>","synthetic":true,"types":["halo2::circuit::floor_planner::v1::V1"]},{"text":"impl&lt;'p, 'a, F, CS&gt; Freeze for <a class=\"struct\" href=\"halo2/circuit/floor_planner/struct.V1Pass.html\" title=\"struct halo2::circuit::floor_planner::V1Pass\">V1Pass</a>&lt;'p, 'a, F, CS&gt;","synthetic":true,"types":["halo2::circuit::floor_planner::v1::V1Pass"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/layouter/struct.RegionShape.html\" title=\"struct halo2::circuit::layouter::RegionShape\">RegionShape</a>","synthetic":true,"types":["halo2::circuit::layouter::RegionShape"]},{"text":"impl Freeze for <a class=\"enum\" href=\"halo2/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2::circuit::layouter::RegionColumn\">RegionColumn</a>","synthetic":true,"types":["halo2::circuit::layouter::RegionColumn"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.RegionIndex.html\" title=\"struct halo2::circuit::RegionIndex\">RegionIndex</a>","synthetic":true,"types":["halo2::circuit::RegionIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.RegionStart.html\" title=\"struct halo2::circuit::RegionStart\">RegionStart</a>","synthetic":true,"types":["halo2::circuit::RegionStart"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.Cell.html\" title=\"struct halo2::circuit::Cell\">Cell</a>","synthetic":true,"types":["halo2::circuit::Cell"]},{"text":"impl&lt;'r, F&gt; Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.Region.html\" title=\"struct halo2::circuit::Region\">Region</a>&lt;'r, F&gt;","synthetic":true,"types":["halo2::circuit::Region"]},{"text":"impl&lt;'r, F&gt; Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.Table.html\" title=\"struct halo2::circuit::Table\">Table</a>&lt;'r, F&gt;","synthetic":true,"types":["halo2::circuit::Table"]},{"text":"impl&lt;'a, F, L&gt; Freeze for <a class=\"struct\" href=\"halo2/circuit/struct.NamespacedLayouter.html\" title=\"struct halo2::circuit::NamespacedLayouter\">NamespacedLayouter</a>&lt;'a, F, L&gt;","synthetic":true,"types":["halo2::circuit::NamespacedLayouter"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Column.html\" title=\"struct halo2::plonk::Column\">Column</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::circuit::Column"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Advice.html\" title=\"struct halo2::plonk::Advice\">Advice</a>","synthetic":true,"types":["halo2::plonk::circuit::Advice"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Fixed.html\" title=\"struct halo2::plonk::Fixed\">Fixed</a>","synthetic":true,"types":["halo2::plonk::circuit::Fixed"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Instance.html\" title=\"struct halo2::plonk::Instance\">Instance</a>","synthetic":true,"types":["halo2::plonk::circuit::Instance"]},{"text":"impl Freeze for <a class=\"enum\" href=\"halo2/plonk/enum.Any.html\" title=\"enum halo2::plonk::Any\">Any</a>","synthetic":true,"types":["halo2::plonk::circuit::Any"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Selector.html\" title=\"struct halo2::plonk::Selector\">Selector</a>","synthetic":true,"types":["halo2::plonk::circuit::Selector"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.TableColumn.html\" title=\"struct halo2::plonk::TableColumn\">TableColumn</a>","synthetic":true,"types":["halo2::plonk::circuit::TableColumn"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"enum\" href=\"halo2/plonk/enum.Assigned.html\" title=\"enum halo2::plonk::Assigned\">Assigned</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::circuit::Assigned"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"enum\" href=\"halo2/plonk/enum.Expression.html\" title=\"enum halo2::plonk::Expression\">Expression</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::circuit::Expression"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.Constraint.html\" title=\"struct halo2::plonk::Constraint\">Constraint</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::circuit::Constraint"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.ConstraintSystem.html\" title=\"struct halo2::plonk::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;","synthetic":true,"types":["halo2::plonk::circuit::ConstraintSystem"]},{"text":"impl&lt;'a, F&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.PinnedConstraintSystem.html\" title=\"struct halo2::plonk::PinnedConstraintSystem\">PinnedConstraintSystem</a>&lt;'a, F&gt;","synthetic":true,"types":["halo2::plonk::circuit::PinnedConstraintSystem"]},{"text":"impl&lt;'a, F&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.VirtualCells.html\" title=\"struct halo2::plonk::VirtualCells\">VirtualCells</a>&lt;'a, F&gt;","synthetic":true,"types":["halo2::plonk::circuit::VirtualCells"]},{"text":"impl Freeze for <a class=\"enum\" href=\"halo2/plonk/enum.Error.html\" title=\"enum halo2::plonk::Error\">Error</a>","synthetic":true,"types":["halo2::plonk::error::Error"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.VerifyingKey.html\" title=\"struct halo2::plonk::VerifyingKey\">VerifyingKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"halo2/arithmetic/trait.CurveAffine.html\" title=\"trait halo2::arithmetic::CurveAffine\">CurveAffine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.CurveAffine.html#associatedtype.ScalarExt\" title=\"type halo2::arithmetic::CurveAffine::ScalarExt\">ScalarExt</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::VerifyingKey"]},{"text":"impl&lt;'a, C&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.PinnedVerificationKey.html\" title=\"struct halo2::plonk::PinnedVerificationKey\">PinnedVerificationKey</a>&lt;'a, C&gt;","synthetic":true,"types":["halo2::plonk::PinnedVerificationKey"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"halo2/plonk/struct.ProvingKey.html\" title=\"struct halo2::plonk::ProvingKey\">ProvingKey</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"halo2/arithmetic/trait.CurveAffine.html\" title=\"trait halo2::arithmetic::CurveAffine\">CurveAffine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.CurveAffine.html#associatedtype.ScalarExt\" title=\"type halo2::arithmetic::CurveAffine::ScalarExt\">ScalarExt</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::plonk::ProvingKey"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/commitment/struct.Params.html\" title=\"struct halo2::poly::commitment::Params\">Params</a>&lt;C&gt;","synthetic":true,"types":["halo2::poly::commitment::Params"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/commitment/struct.ParamsVerifier.html\" title=\"struct halo2::poly::commitment::ParamsVerifier\">ParamsVerifier</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as <a class=\"trait\" href=\"halo2/arithmetic/trait.Engine.html\" title=\"trait halo2::arithmetic::Engine\">Engine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.Engine.html#associatedtype.G1Affine\" title=\"type halo2::arithmetic::Engine::G1Affine\">G1Affine</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as <a class=\"trait\" href=\"halo2/arithmetic/trait.Engine.html\" title=\"trait halo2::arithmetic::Engine\">Engine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.Engine.html#associatedtype.G2Affine\" title=\"type halo2::arithmetic::Engine::G2Affine\">G2Affine</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::poly::commitment::ParamsVerifier"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/commitment/struct.Setup.html\" title=\"struct halo2::poly::commitment::Setup\">Setup</a>&lt;E&gt;","synthetic":true,"types":["halo2::poly::commitment::Setup"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/commitment/struct.Blind.html\" title=\"struct halo2::poly::commitment::Blind\">Blind</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::poly::commitment::Blind"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/struct.EvaluationDomain.html\" title=\"struct halo2::poly::EvaluationDomain\">EvaluationDomain</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as <a class=\"trait\" href=\"halo2/arithmetic/trait.Group.html\" title=\"trait halo2::arithmetic::Group\">Group</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.Group.html#associatedtype.Scalar\" title=\"type halo2::arithmetic::Group::Scalar\">Scalar</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::poly::domain::EvaluationDomain"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/struct.PinnedEvaluationDomain.html\" title=\"struct halo2::poly::PinnedEvaluationDomain\">PinnedEvaluationDomain</a>&lt;'a, G&gt;","synthetic":true,"types":["halo2::poly::domain::PinnedEvaluationDomain"]},{"text":"impl&lt;'a, C&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/multiopen/struct.ProverQuery.html\" title=\"struct halo2::poly::multiopen::ProverQuery\">ProverQuery</a>&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"halo2/arithmetic/trait.CurveAffine.html\" title=\"trait halo2::arithmetic::CurveAffine\">CurveAffine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.CurveAffine.html#associatedtype.ScalarExt\" title=\"type halo2::arithmetic::CurveAffine::ScalarExt\">ScalarExt</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::poly::multiopen::ProverQuery"]},{"text":"impl&lt;'r, C&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/multiopen/struct.VerifierQuery.html\" title=\"struct halo2::poly::multiopen::VerifierQuery\">VerifierQuery</a>&lt;'r, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"halo2/arithmetic/trait.CurveAffine.html\" title=\"trait halo2::arithmetic::CurveAffine\">CurveAffine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.CurveAffine.html#associatedtype.ScalarExt\" title=\"type halo2::arithmetic::CurveAffine::ScalarExt\">ScalarExt</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::poly::multiopen::VerifierQuery"]},{"text":"impl Freeze for <a class=\"enum\" href=\"halo2/poly/enum.Error.html\" title=\"enum halo2::poly::Error\">Error</a>","synthetic":true,"types":["halo2::poly::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/poly/struct.Coeff.html\" title=\"struct halo2::poly::Coeff\">Coeff</a>","synthetic":true,"types":["halo2::poly::Coeff"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/poly/struct.LagrangeCoeff.html\" title=\"struct halo2::poly::LagrangeCoeff\">LagrangeCoeff</a>","synthetic":true,"types":["halo2::poly::LagrangeCoeff"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/poly/struct.ExtendedLagrangeCoeff.html\" title=\"struct halo2::poly::ExtendedLagrangeCoeff\">ExtendedLagrangeCoeff</a>","synthetic":true,"types":["halo2::poly::ExtendedLagrangeCoeff"]},{"text":"impl&lt;F, B&gt; Freeze for <a class=\"struct\" href=\"halo2/poly/struct.Polynomial.html\" title=\"struct halo2::poly::Polynomial\">Polynomial</a>&lt;F, B&gt;","synthetic":true,"types":["halo2::poly::Polynomial"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/poly/struct.Rotation.html\" title=\"struct halo2::poly::Rotation\">Rotation</a>","synthetic":true,"types":["halo2::poly::Rotation"]},{"text":"impl&lt;R, C, E&gt; Freeze for <a class=\"struct\" href=\"halo2/transcript/struct.Blake2bRead.html\" title=\"struct halo2::transcript::Blake2bRead\">Blake2bRead</a>&lt;R, C, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::transcript::Blake2bRead"]},{"text":"impl&lt;W, C, E&gt; Freeze for <a class=\"struct\" href=\"halo2/transcript/struct.Blake2bWrite.html\" title=\"struct halo2::transcript::Blake2bWrite\">Blake2bWrite</a>&lt;W, C, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::transcript::Blake2bWrite"]},{"text":"impl&lt;C, T&gt; Freeze for <a class=\"struct\" href=\"halo2/transcript/struct.ChallengeScalar.html\" title=\"struct halo2::transcript::ChallengeScalar\">ChallengeScalar</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"halo2/arithmetic/trait.CurveAffine.html\" title=\"trait halo2::arithmetic::CurveAffine\">CurveAffine</a>&gt;::<a class=\"type\" href=\"halo2/arithmetic/trait.CurveAffine.html#associatedtype.ScalarExt\" title=\"type halo2::arithmetic::CurveAffine::ScalarExt\">ScalarExt</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["halo2::transcript::ChallengeScalar"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"halo2/transcript/struct.Challenge255.html\" title=\"struct halo2::transcript::Challenge255\">Challenge255</a>&lt;C&gt;","synthetic":true,"types":["halo2::transcript::Challenge255"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/metadata/struct.Column.html\" title=\"struct halo2::dev::metadata::Column\">Column</a>","synthetic":true,"types":["halo2::dev::metadata::Column"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/metadata/struct.VirtualCell.html\" title=\"struct halo2::dev::metadata::VirtualCell\">VirtualCell</a>","synthetic":true,"types":["halo2::dev::metadata::VirtualCell"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/metadata/struct.Gate.html\" title=\"struct halo2::dev::metadata::Gate\">Gate</a>","synthetic":true,"types":["halo2::dev::metadata::Gate"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/metadata/struct.Constraint.html\" title=\"struct halo2::dev::metadata::Constraint\">Constraint</a>","synthetic":true,"types":["halo2::dev::metadata::Constraint"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/metadata/struct.Region.html\" title=\"struct halo2::dev::metadata::Region\">Region</a>","synthetic":true,"types":["halo2::dev::metadata::Region"]},{"text":"impl&lt;G, ConcreteCircuit&gt; Freeze for <a class=\"struct\" href=\"halo2/dev/cost/struct.CircuitCost.html\" title=\"struct halo2::dev::cost::CircuitCost\">CircuitCost</a>&lt;G, ConcreteCircuit&gt;","synthetic":true,"types":["halo2::dev::cost::CircuitCost"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"halo2/dev/cost/struct.MarginalProofSize.html\" title=\"struct halo2::dev::cost::MarginalProofSize\">MarginalProofSize</a>&lt;G&gt;","synthetic":true,"types":["halo2::dev::cost::MarginalProofSize"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"halo2/dev/cost/struct.ProofSize.html\" title=\"struct halo2::dev::cost::ProofSize\">ProofSize</a>&lt;G&gt;","synthetic":true,"types":["halo2::dev::cost::ProofSize"]},{"text":"impl Freeze for <a class=\"struct\" href=\"halo2/dev/struct.CircuitGates.html\" title=\"struct halo2::dev::CircuitGates\">CircuitGates</a>","synthetic":true,"types":["halo2::dev::gates::CircuitGates"]},{"text":"impl Freeze for <a class=\"enum\" href=\"halo2/dev/enum.VerifyFailure.html\" title=\"enum halo2::dev::VerifyFailure\">VerifyFailure</a>","synthetic":true,"types":["halo2::dev::VerifyFailure"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"halo2/dev/struct.MockProver.html\" title=\"struct halo2::dev::MockProver\">MockProver</a>&lt;F&gt;","synthetic":true,"types":["halo2::dev::MockProver"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()