import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/company/CompaniesPage";
import AddCompanyPage from "./pages/company/AddCompanyPage";
import CompanyPage from "./pages/company/CompanyPage";
import EditCompanyPage from "./pages/company/EditCompanyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/company/add" element={<AddCompanyPage />} />
        <Route path="/company/:id" element={<CompanyPage />} />
        <Route path="/company/edit/:id" element={<EditCompanyPage />} />
      </Routes>
    </Router>
  );
}

export default App;