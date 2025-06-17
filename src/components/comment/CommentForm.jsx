import React, { useState } from 'react';

const CommentForm = ({ articleId, onCommentAdded }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) {
            alert('Comment cannot be empty');
            return;
        }

        const newComment = {
            content: content,
            articleId: articleId
        };

        await onCommentAdded(newComment);
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Schrijf een reactie..."
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
                Verstuur
            </button>
        </form>
    );
};

export default CommentForm;