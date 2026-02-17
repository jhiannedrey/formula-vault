const formulas = [
  {
    id: 1,
    name: "XLOOKUP",
    platforms: ["Excel"],
    description: "Modern replacement for VLOOKUP. Finds values in a range or array.",
    formula: "=XLOOKUP(lookup_value, lookup_array, return_array)"
  },
  {
    id: 2,
    name: "FILTER",
    platforms: ["Excel", "Sheets"],
    description: "Filter a range of data based on criteria.",
    formula: "=FILTER(A2:B10, A2:A10=\"Yes\")"
  },
  {
    id: 3,
    name: "IMPORTRANGE",
    platforms: ["Sheets"],
    description: "Import data from another spreadsheet.",
    formula: "=IMPORTRANGE(\"spreadsheet_url\", \"Sheet1!A1:B10\")"
  }
];

export default formulas;