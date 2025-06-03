import { useEffect, useState } from 'react';
import { GetAllArticles } from '../../services/ArticleService';
import AdminNavigation from '../../components/admin/AdminNavigation';
import ArticleList from '../../components/article/ArticleList';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetAllArticles()
            .then(setArticles)
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (articles.length === 0) return <div className="text-center p-4">No articles found</div>;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Alle Artikelen</h1>
                <ArticleList articles={articles} />
            </div>
        </div>
    );
};

export default ArticlesPage;
