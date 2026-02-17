import formulas from "../data/formulas";
import FormulaCard from "../components/FormulaCard";

export default function Sheets() {
  const sheetFormulas = formulas.filter(f => f.platforms.includes("Sheets"));

  return (
    <div>
      <h2>Google Sheets Formulas</h2>
      <div className="card-grid">
        {sheetFormulas.map(f => (
          <FormulaCard key={f.id} formula={f} />
        ))}
      </div>
    </div>
  );
}