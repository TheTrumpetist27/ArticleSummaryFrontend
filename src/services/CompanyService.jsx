import API from './API'

export const GetAllCompanies = async () => {
    try {
        const response = await API.get("/company");
        return response.data;
    } catch (error) {
        console.error('Error fetching companies: ', error);
        return [];
    }
};

export const GetCompanyById = async (companyId) => {
    try {
        const response = await API.get(`/company/${companyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching company: ', error);
        return null;
    }
}

export const CreateCompany = async (companyData) => {
    try {
        const response = await API.post("/company", companyData);
        return response.data;
    } catch (error) {
        console.error('Error creating company: ', error);
        return null;
    }
};

export const UpdateCompany = async (companyId, companyData) => {
    try {
        const response = await API.put(`/company/${companyId}`, companyData);
        return response.data;
    } catch (error) {
        console.error('Error updating company: ', error);
        return null;
    }
};

export const DeleteCompany = async (companyId) => {
    try {
        const response = await API.delete(`/company/${companyId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting company: ', error);
        return null;
    }
};