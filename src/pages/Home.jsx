import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{textAlign: "center", padding: "50px 20px"}}>
      <h1 style={{fontSize: "2.5rem"}}>Welcome to Formula Vault Pro</h1>
      <p style={{fontSize: "1.2rem", color: "#666"}}>
        Your central repository for Excel, Google Sheets, and VBA solutions.
      </p>
      <div style={{marginTop: "30px"}}>
        <Link to="/excel" className="tag" style={{background: "#107c41", color: "white", padding: "10px 20px", textDecoration: "none", fontSize: "1rem"}}>Browse Library</Link>
      </div>
    </div>
  );
}