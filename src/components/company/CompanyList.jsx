import { useEffect, useState } from "react";
import { getAllCompanies } from "../../services/CompanyService";
import CompanyDeleteButton from "./CompanyDeleteButton";
import { DeleteCompany } from "../../services/CompanyService";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            const data = await getAllCompanies();
            setCompanies(data);
            setLoading(false);
        }
        fetchCompanies();
    }, []);

    const handleDelete = async (id) => {
        try {
            await DeleteCompany(id);

            setCompanies((prevCompanies) => prevCompanies.filter(company => company.id !== id));
        } catch (error) {
            console.error("Error deleting company:", error);
        }
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm bg-white border border-slate-200 rounded-lg shadow">
                <thead className="bg-slate-50 text-slate-800">
                    <tr>
                        <th className="px-6 py-3 border-b border-slate-200">Bedrijfsnaam</th>
                        <th className="px-6 py-3 border-b border-slate-200">Acties</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id} className="hover:bg-sky-200 transition">
                            <td className="px-6 py-4 border-b border-slate-200">{company.name}</td>
                            <td className="px-6 py-4 border-b border-[--color-slate-200]">
                                <CompanyDeleteButton onClick={() => handleDelete(company.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyList;