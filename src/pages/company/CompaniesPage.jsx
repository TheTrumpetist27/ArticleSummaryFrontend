import CompanyList from "../../components/company/CompanyList";
import AdminNavigation from "../../components/admin/AdminNavigation";

const CompaniesPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div>
                <CompanyList />
            </div>
        </div>
    );
}

export default CompaniesPage;