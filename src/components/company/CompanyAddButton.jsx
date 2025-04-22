import { useNavigate } from "react-router-dom";

const CompanyAddButton = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-sky-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-sky-600 transition hover:cursor-pointer"
            onClick={() => navigate("/company/add")}
        >
            Voeg Bedrijf Toe
        </button>
    );
}

export default CompanyAddButton;