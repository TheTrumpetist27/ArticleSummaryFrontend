import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./pages/HomePage";
import CompaniesPage from "./pages/company/CompaniesPage";
import AddCompanyPage from "./pages/company/AddCompanyPage";
import CompanyPage from "./pages/company/CompanyPage";
import EditCompanyPage from "./pages/company/EditCompanyPage";
import AddArticlePage from "./pages/article/AddArticlePage";
import ArticlesPage from "./pages/article/ArticlesPage";
import ArticleDetailPage from "./pages/article/ArticleDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/company/add" element={<ProtectedRoute><AddCompanyPage /></ProtectedRoute>} />
        <Route path="/company/:id" element={<CompanyPage />} />
        <Route path="/company/edit/:id" element={<ProtectedRoute><EditCompanyPage /></ProtectedRoute>} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/add" element={<ProtectedRoute><AddArticlePage /></ProtectedRoute>} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;