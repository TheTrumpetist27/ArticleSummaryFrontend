import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/company/CompaniesPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/companies">Bedrijven</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </Router>
  );
}

export default App;