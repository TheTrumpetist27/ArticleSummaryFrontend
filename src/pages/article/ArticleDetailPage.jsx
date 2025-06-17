import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetArticleById } from "../../services/ArticleService";
import AdminNavigation from "../../components/admin/AdminNavigation";
import { DeleteComment, GetCommentsByArticleId, PostComment } from "../../services/CommentService";
import CommentList from "../../components/comment/CommentList";
import CommentForm from "../../components/comment/CommentForm";
import * as signalR from "@microsoft/signalr";

const ArticleDetailPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const [article, setArticle] = useState(location.state ?? null);
    const [loading, setLoading] = useState(!location.state);
    const [comments, setComments] = useState([]);
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:8090/hubs/comments")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    console.log("SignalR connection established");

                    connection.on("ReceiveComment", (comment) => {
                        setComments((prevComments) => [...prevComments, comment]);
                    });

                    connection.on("DeleteComment", (commentId) => {
                        setComments((prevComments) => prevComments.filter(comment => comment.id !== commentId));
                    });
                })
                .catch((error) => console.error("SignalR connection error:", error));
        }

        return () => {
            if (connection) {
                connection.stop()
            }
        };
    }, [connection]);

    useEffect(() => {
        if (!article) {
            GetArticleById(id)
                .then(setArticle)
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }
    }, [id, article]);

    useEffect(() => {
        if (article) {
            GetCommentsByArticleId(article.id)
                .then(setComments)
                .catch((error) => console.error(error));
        }
    }, [article]);

    const handleCommentAdded = async (newComment) => {
        try {
            const savedComment = await PostComment(newComment);
            //setComments((prevComments) => [...prevComments, savedComment]);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        const success = await DeleteComment(commentId);
        //setComments((prevComments) => prevComments.filter(comment => comment.id !== commentId));
        if (!success) {
            console.error("Error deleting comment");
        }
    };

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

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Reacties</h2>
                    <CommentList comments={comments} onDelete={handleDeleteComment} />
                    <CommentForm articleId={article.id} onCommentAdded={handleCommentAdded} />
                </div>
            </div>
        </div>
    );
};

export default ArticleDetailPage;