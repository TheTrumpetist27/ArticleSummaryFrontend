const CommentItem = ({ comment, onDelete }) => {
    return (
        <div className="relative border rounded p-2 my-2">
            <button
                onClick={() => onDelete(comment.id)}
                className="text-red-600 text-sm mt-2 top-2 right-2 absolute hover:underline cursor-pointer"
            >
                Verwijder
            </button>
            <p className="mb-1">{comment.content}</p>
            <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default CommentItem;