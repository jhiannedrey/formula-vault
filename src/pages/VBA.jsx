export default function VBA() {
  return (
    <div style={{padding: "20px"}}>
      <h2>VBA Scripts</h2>
      <pre>
{`Sub RemoveDuplicates()
    Range("A1:B100").RemoveDuplicates Columns:=1
End Sub`}
      </pre>
    </div>
  );
}
