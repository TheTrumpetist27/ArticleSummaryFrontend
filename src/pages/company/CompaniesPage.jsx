import CompanyList from "../../components/company/CompanyList";
import AdminNavigation from "../../components/admin/AdminNavigation";
import CompanyAddButton from "../../components/company/CompanyAddButton";

const CompaniesPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div className="float-right px-4 py-6">
                <CompanyAddButton />
            </div>
            <div className="mt-25">
                <CompanyList />
            </div>
        </div>
    );
}

export default CompaniesPage;