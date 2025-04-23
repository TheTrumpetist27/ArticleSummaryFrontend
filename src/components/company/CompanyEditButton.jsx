import { useNavigate } from "react-router-dom";

const CompanyEditButton = ({id}) => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-error text-white px-4 py-2 rounded-md shadow-md hover:bg-error-hover transition hover:cursor-pointer"
            onClick={() => navigate(`/company/edit/${id}`)}
        >
            Aanpassen
        </button>
    );
}

export default CompanyEditButton;