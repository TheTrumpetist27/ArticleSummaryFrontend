import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetArticleById } from "../../services/ArticleService";
import AdminNavigation from "../../components/admin/AdminNavigation";

const ArticleDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [article, setArticle] = useState(location.state ?? null);
    const [loading, setLoading] = useState(!location.state);

    useEffect(() => {
        if (!article) {
            GetArticleById(id)
                .then(setArticle)
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }
    }, [id, article]);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (!article) return <div className="text-center p-4">Article not found</div>;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div className="p-6">
                <h1 className="text-2xl font-bold">{article.title}</h1>
                <h2 className="text-xl text-gray-700 mt-4 mb-2">Samenvatting</h2>
                <p>{article.summary}</p>
                <h2 className="text-xl text-gray-700 mt-4 mb-2">Volledig Artikel</h2>
                <p>{article.content}</p>
            </div>
        </div>
    );
};

export default ArticleDetailPage;