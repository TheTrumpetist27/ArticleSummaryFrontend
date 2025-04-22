import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyForm = ({ initialData = {}, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        ceoId: initialData.ceoId || '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            try {
                await onSubmit(formData);
                navigate('/companies'); // Redirect to the companies list after submission
            }
            catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Company Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl p-1 bg-slate-50 border border-sky-500 shadow-sm focus:border-sky-800 focus:ring-2 focus:ring-sky-800 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="ceoId" className="block text-sm font-medium text-slate-700">CEO ID:</label>
                <input
                    type="number"
                    id="ceoId"
                    name="ceoId"
                    value={formData.ceoId}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl p-1 bg-slate-50 border border-sky-500 shadow-sm focus:border-sky-800 focus:ring-2 focus:ring-sky-800 focus:outline-none"
                />
            </div>
            <div className="text-center">
                <button type="submit" className="inline-block w-full bg-sky-500 text-white py-2 px-4 rounded-xl hover:bg-sky-800 transition-colors hover:cursor-pointer">Submit</button>
            </div>
        </form>
    );
}

export default CompanyForm;