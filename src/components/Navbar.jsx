import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Formula Vault Pro</Link></li>
        <li style={{marginLeft: "auto"}}><Link to="/excel">Excel</Link></li>
        <li><Link to="/sheets">Sheets</Link></li>
        <li><Link to="/vba">VBA</Link></li>
      </ul>
    </nav>
  );
}