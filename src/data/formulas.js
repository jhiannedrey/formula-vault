const formulas = [
  {
    id: 1,
    name: "XLOOKUP",
    platforms: ["Excel"],
    description: "Find value in range and return matching result.",
    formula: "=XLOOKUP(A2, A:A, B:B)"
  },
  {
    id: 2,
    name: "FILTER",
    platforms: ["Excel", "Sheets"],
    description: "Filter data based on criteria.",
    formula: "=FILTER(A2:B10, A2:A10=\"Yes\")"
  }
];

export default formulas;
