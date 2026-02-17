import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.body.style.background = dark ? "#ffffff" : "#121212";
    document.body.style.color = dark ? "#000000" : "#ffffff";
  };

  return (
    <nav style={{padding: "15px", borderBottom: "1px solid #ccc"}}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/excel">Excel</Link> |{" "}
      <Link to="/sheets">Google Sheets</Link> |{" "}
      <Link to="/vba">VBA</Link>
      <button style={{float: "right"}} onClick={toggleDark}>
        Toggle Dark Mode
      </button>
    </nav>
  );
}
