import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCompanyById } from "../../services/CompanyService";
import AdminNavigation from "../../components/admin/AdminNavigation";
import CompanyEditButton from "../../components/company/CompanyEditButton";

const CompanyPage = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompany = async () => {
            const data = await GetCompanyById(id);
            setCompany(data);
            setLoading(false);
        };
        fetchCompany();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div className="float-right px-4 py-6">
                <CompanyEditButton id={company.id} />
            </div>
            <h1>{company.name}</h1>
            <p>Welcome to the company page!</p>
        </div>
    );
}

export default CompanyPage;