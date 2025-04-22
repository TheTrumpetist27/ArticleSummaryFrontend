const CompanyDeleteButton = ({onClick}) => {
    return (
        <button
            className="bg-error text-white px-4 py-2 rounded-md shadow-md hover:bg-error-hover transition hover:cursor-pointer"
            onClick={onClick}
        >
            Verwijder Bedrijf
        </button>
    );
}

export default CompanyDeleteButton;