const API_URL = 'https://localhost:7263/api/Company';

export const getCompanies = async () => {
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