import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/company/CompaniesPage";
import AddCompanyPage from "./pages/company/AddCompanyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/company/add" element={<AddCompanyPage />} />
      </Routes>
    </Router>
  );
}

export default App;