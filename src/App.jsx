import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Excel from "./pages/Excel";
import Sheets from "./pages/Sheets";
import VBA from "./pages/VBA";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excel" element={<Excel />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/vba" element={<VBA />} />
      </Routes>
    </Router>
  );
}

export default App;
