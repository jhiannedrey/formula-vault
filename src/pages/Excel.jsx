import formulas from "../data/formulas";
import FormulaCard from "../components/FormulaCard";

export default function Excel() {
  const excelFormulas = formulas.filter(f => f.platforms.includes("Excel"));

  return (
    <div style={{padding: "20px"}}>
      <h2>Excel Formulas</h2>
      {excelFormulas.map(f => (
        <FormulaCard key={f.id} formula={f} />
      ))}
    </div>
  );
}
