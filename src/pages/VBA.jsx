export default function VBA() {
  return (
    <div>
      <h2>VBA Scripts</h2>
      <div className="formula-card">
        <h3>Remove Duplicates</h3>
        <p>A simple macro to remove duplicates in column A.</p>
        <pre className="formula-code">
{`Sub RemoveDuplicates()
    Range("A1:B100").RemoveDuplicates Columns:=1
End Sub`}
        </pre>
      </div>
    </div>
  );
}