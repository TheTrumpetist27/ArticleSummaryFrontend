import { useState } from "react";
import { CreateArticle } from "../../services/ArticleService";
import AdminNavigation from "../../components/admin/AdminNavigation";
import { useNavigate } from "react-router-dom";

const AddArticlePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    
    const maxLength = 4600; // Maximum length for the content

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        

        const cleanedContent = content
            .replace(/\r?\n|\r/g, " ") // Remove line breaks
            .replace(/\s+/g, " ") // Replace multiple spaces with a single space
            .trim(); // Trim leading and trailing spaces

        try {
            const article = await CreateArticle(title, cleanedContent);
            navigate(`/article/${article.id}`, { state: article });
        } catch (error) {
            console.error(error);
            setMessage("Error creating article");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Nieuw Artikel</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Titel"
                        className="border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Moet worden samengevat."
                        className="border p-2 rounded h-60 resize-y"
                        value={content}
                        onChange={(e) => {
                            if (e.target.value.length <= maxLength) {
                                setContent(e.target.value);
                            }
                        }}
                        required
                    ></textarea>

                    <div className="text-sm text-gray-600">
                        {content.length} / {maxLength} tekens
                    </div>

                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? "Bezig met samenvatten..." : "Artikel aanmaken"}
                    </button>

                    {message && <p className="text-center text-sm mt-2">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default AddArticlePage;