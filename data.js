const formulas = [
    {
        category: "Lookup",
        name: "XLOOKUP",
        platform: "Excel",
        description: "Find a value in a range and return matching result.",
        use: "Used when you want to replace VLOOKUP with a more powerful lookup.",
        formula: "=XLOOKUP(A2, A:A, B:B)",
        keywords: ["lookup", "find", "match", "search"]
    },
    {
        category: "Logic",
        name: "IF with YEAR",
        platform: "Excel",
        description: "Check if date is from current year.",
        use: "Used to determine if record is from a specific year.",
        formula: "=IF(YEAR(A2)=2026, \"YES\", \"NO\")",
        keywords: ["year", "date check", "logic", "status"]
    },
    {
        category: "Text",
        name: "TEXTJOIN",
        platform: "Excel & Sheets",
        description: "Combine text with delimiter.",
        use: "Used to combine multiple cells with comma or semicolon.",
        formula: "=TEXTJOIN(\", \", TRUE, A1:A5)",
        keywords: ["combine", "merge text", "concatenate"]
    }
];
