const UNITS = [
  {
    id: 1,
    title: "1. Atomic Structure & Periodicity",
    topics: [
      "Structure of the atom",
      "Subatomic particles",
      "Isotopes",
      "Quantum numbers",
      "Electron configuration",
      "Orbital shapes",
      "Effective nuclear charge",
      "Periodic trends (IE, EA, radius, electronegativity)",
      "Photoelectron spectroscopy (basic)"
    ]
  },
  {
    id: 2,
    title: "2. Bonding & Molecular Structure",
    topics: [
      "Ionic vs covalent bonding",
      "Polar vs nonpolar bonds",
      "Lewis structures",
      "Resonance & formal charge",
      "VSEPR shapes",
      "Hybridization (sp, sp², sp³, etc.)",
      "Bond order & bond energy",
      "Intermolecular forces (IMFs)",
      "Lattice energy (qualitative)"
    ]
  },
  {
    id: 3,
    title: "3. Stoichiometry & Chemical Reactions",
    topics: [
      "Balancing equations",
      "Limiting reagents",
      "Percent yield",
      "Empirical/molecular formulas",
      "Solution stoichiometry",
      "Redox reactions",
      "Acid–base reactions",
      "Precipitation reactions",
      "Combustion reactions",
      "Net ionic equations"
    ]
  },
  {
    id: 4,
    title: "4. Gases",
    topics: [
      "Ideal gas law",
      "Combined gas law",
      "Dalton's law",
      "Partial pressures",
      "Kinetic molecular theory",
      "Maxwell–Boltzmann distribution (qualitative)",
      "Real gases (van der Waals basics)"
    ]
  },
  {
    id: 5,
    title: "5. Thermochemistry",
    topics: [
      "Enthalpy (ΔH)",
      "Calorimetry (q = mcΔT)",
      "Coffee-cup vs bomb calorimetry",
      "Hess's law",
      "Standard enthalpies of formation",
      "Heating curves & phase changes"
    ]
  },
  {
    id: 6,
    title: "6. Solutions & Properties",
    topics: [
      "Solubility rules",
      "Concentration units (M, m, %, ppm, ppb)",
      "Dilutions",
      "Colligative properties",
      "Raoult's law (basic)",
      "Solubility vs temperature"
    ]
  },
  {
    id: 7,
    title: "7. Chemical Equilibrium",
    topics: [
      "Kc, Kp",
      "Reaction quotient Q",
      "ICE tables",
      "Le Châtelier's principle",
      "Solubility equilibria (Ksp)",
      "Common ion effect",
      "Coupled equilibria",
      "Complex ion equilibria (basic)"
    ]
  },
  {
    id: 8,
    title: "8. Acids & Bases",
    topics: [
      "Strong vs weak acids/bases",
      "Ka, Kb",
      "pH, pOH",
      "Polyprotic acids",
      "Buffer solutions",
      "Henderson–Hasselbalch equation",
      "Titration curves (strong/weak combinations)",
      "Indicators",
      "Acid–base stoichiometry"
    ]
  },
  {
    id: 9,
    title: "9. Thermodynamics",
    topics: [
      "Entropy (ΔS)",
      "Gibbs free energy (ΔG)",
      "ΔG = ΔH – TΔS",
      "Spontaneity",
      "Standard free energies",
      "Coupled reactions",
      "Relationship between ΔG° and K"
    ]
  },
  {
    id: 10,
    title: "10. Kinetics",
    topics: [
      "Rate laws",
      "Reaction order",
      "Method of initial rates",
      "Integrated rate laws (0th, 1st, 2nd order)",
      "Half-life",
      "Arrhenius equation",
      "Reaction mechanisms",
      "Rate-determining step",
      "Steady-state approximation"
    ]
  },
  {
    id: 11,
    title: "11. Electrochemistry",
    topics: [
      "Oxidation/reduction",
      "Galvanic cells",
      "Electrolytic cells",
      "Standard reduction potentials",
      "Cell notation",
      "Nernst equation",
      "Concentration cells",
      "Faraday's laws of electrolysis"
    ]
  },
  {
    id: 12,
    title: "12. Inorganic Chemistry",
    topics: [
      "Coordination compounds",
      "Ligands (mono-, bi-, polydentate)",
      "Coordination number",
      "Geometries (octahedral, tetrahedral, square planar)",
      "Crystal field theory",
      "High-spin vs low-spin",
      "Spectrochemical series",
      "Transition metal chemistry",
      "Oxidation states",
      "Descriptive chemistry of main groups",
      "Lewis acid–base theory",
      "HSAB (qualitative)"
    ]
  },
  {
    id: 13,
    title: "13. Organic Chemistry",
    topics: [
      "Hybridization & structure",
      "Functional groups",
      "Resonance",
      "Constitutional isomers",
      "Stereoisomers",
      "Chirality (R/S basics)",
      "SN1 reactions",
      "SN2 reactions",
      "E1 reactions",
      "E2 reactions",
      "Basic addition reactions",
      "Oxidation/reduction basics",
      "Polymerization basics"
    ]
  },
  {
    id: 14,
    title: "14. Analytical Chemistry",
    topics: [
      "Acid–base titrations",
      "Redox titrations",
      "Back titrations",
      "Gravimetric analysis",
      "Precipitation reactions",
      "Beer–Lambert law",
      "UV–Vis spectroscopy (basic)",
      "IR spectroscopy (very basic)"
    ]
  },
  {
    id: 15,
    title: "15. Laboratory Chemistry",
    topics: [
      "Reading burets",
      "Titration curves",
      "Significant figures",
      "Error analysis",
      "Percent error",
      "Experimental design",
      "Interpreting lab data",
      "Calorimetry",
      "Distillation (basic)",
      "Spectrophotometry"
    ]
  }
];
