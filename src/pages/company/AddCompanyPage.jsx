import AdminNavigation from "../../components/admin/AdminNavigation";
import CompanyForm from "../../components/company/CompanyForm";
import { CreateCompany } from "../../services/CompanyService";

const AddCompanyPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div>
                <h1 className="text-2xl font-bold text-center mt-6">Add New Company</h1>
                <div className="flex justify-center mt-4">
                    <CompanyForm onSubmit={(data) => CreateCompany(data)} />
                </div>
            </div>
        </div>
    );
}

export default AddCompanyPage;