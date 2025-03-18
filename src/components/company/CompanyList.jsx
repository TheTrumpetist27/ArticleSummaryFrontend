import { useEffect, useState } from "react";
import { getCompanies } from "../../services/CompanyService";

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            const data = await getCompanies();
            setCompanies(data);
            setLoading(false);
        }
        fetchCompanies();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            {companies.map((company) => (
                <li key={company.id}>{company.name}</li>
            ))}
        </ul>
    );
}

export default CompanyList;