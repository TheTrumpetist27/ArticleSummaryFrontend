const API_URL = 'https://localhost:7263/api/Company';

export const GetAllCompanies = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch companies');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching companies: ', error);
        return [];
    }
};

export const GetCompanyById = async (companyId) => {
    try {
        const response = await fetch(`${API_URL}/${companyId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch company');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching company: ', error);
        return null;
    }
}

export const CreateCompany = async (companyData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(companyData),
        });
        if (!response.ok) {
            throw new Error('Failed to create company');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating company: ', error);
        return null;
    }
}

export const UpdateCompany = async (companyId, companyData) => {
    try {
        const response = await fetch(`${API_URL}/${companyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(companyData),
        });
        if (!response.ok) {
            throw new Error('Failed to update company');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating company: ', error);
        return null;
    }
}

export const DeleteCompany = async (companyId) => {
    try {
        const response = await fetch(`${API_URL}/${companyId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete company');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting company: ', error);
        return null;
    }
}