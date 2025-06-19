import { Link } from "react-router-dom";
import DeleteArticleButton from "./DeleteArticleButton";
import { isAuthenticated } from "../../services/AuthService";

const ArticleListItem = ({ article, onDeleted }) => {
    return (
        <div className="flex justify-between items-start border p-4 rounded hover:bg-gray-100 transition">
            <div className="flex-1">
                <Link to={`/article/${article.id}`}>
                    <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
                    <p className="text-sm text-gray-700">{article.summary}</p>
                </Link>
            </div>
            { isAuthenticated() && (<DeleteArticleButton articleId={article.id} onDeleted={onDeleted} />)}
        </div>
    );
};

export default ArticleListItem;