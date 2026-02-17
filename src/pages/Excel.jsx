import formulas from "../data/formulas";
import FormulaCard from "../components/FormulaCard";

export default function Excel() {
  const excelFormulas = formulas.filter(f => f.platforms.includes("Excel"));

  return (
    <div>
      <h2>Excel Formulas</h2>
      <div className="card-grid">
        {excelFormulas.map(f => (
          <FormulaCard key={f.id} formula={f} />
        ))}
      </div>
    </div>
  );
}