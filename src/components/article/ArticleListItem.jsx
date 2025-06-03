import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
    return (
        <Link 
            to={`/article/${article.id}`}
            className="border p-4 rounded hover:bg-gray-100 transition"
        >
            <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
            <p className="text-sm text-gray-700">{article.summary}</p>
        </Link>
    );
};

export default ArticleListItem;