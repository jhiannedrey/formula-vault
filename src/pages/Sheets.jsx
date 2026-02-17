import formulas from "../data/formulas";
import FormulaCard from "../components/FormulaCard";

export default function Sheets() {
  const sheetFormulas = formulas.filter(f => f.platforms.includes("Sheets"));

  return (
    <div style={{padding: "20px"}}>
      <h2>Google Sheets Formulas</h2>
      {sheetFormulas.map(f => (
        <FormulaCard key={f.id} formula={f} />
      ))}
    </div>
  );
}
