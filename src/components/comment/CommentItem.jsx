import { isAuthenticated } from "../../services/AuthService";

const CommentItem = ({ comment, onDelete }) => {
    return (
        <div className="relative border rounded p-2 my-2">
            {isAuthenticated() && (
                <button
                    onClick={() => onDelete(comment.id)}
                    className="text-red-500 text-sm mt-2 top-2 right-2 absolute hover:text-red-700 cursor-pointer rounded-md shadow-sm border border-red-500 hover:border-red-700 px-2 py-1"
                >
                    Verwijder
                </button>
            )}
            <p className="mb-1">{comment.content}</p>
            <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default CommentItem;