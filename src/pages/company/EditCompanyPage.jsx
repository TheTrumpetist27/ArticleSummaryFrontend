import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetCompanyById } from '../../services/CompanyService';
import AdminNavigation from '../../components/admin/AdminNavigation';
import CompanyForm from '../../components/company/CompanyForm';
import { UpdateCompany } from '../../services/CompanyService';

const EditCompanyPage = () => {
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
        <div>
            <AdminNavigation />
            <h1>Edit {company.name}</h1>
            <CompanyForm 
                initialData={company} 
                onSubmit={(data) => {
                    const updatedCompany = {id: company.id, ...data};
                    UpdateCompany(company.id, updatedCompany);
                }}
            />
        </div>
    );
}

export default EditCompanyPage;