import { useNavigate } from "react-router-dom";
import { DeleteArticle } from "../../services/ArticleService";

const DeleteArticleButton = ({ articleId, onDeleted }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Weet je zeker dat je dit artikel wilt verwijderen?")) {
            const success = await DeleteArticle(articleId);
            if (success) {
                if (onDeleted) {
                    onDeleted();
                } else {
                    navigate("/articles");
                }
            } else {
                alert("Er is een fout opgetreden bij het verwijderen van het artikel. Probeer het opnieuw.");
            }
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 font-semibold text-sm ml-4 cursor-pointer"
        >
            Verwijder artikel
        </button>
    );
};

export default DeleteArticleButton;