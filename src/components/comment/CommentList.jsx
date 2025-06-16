import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments, onDelete }) => {
    if (comments.length === 0) return <p>Geen reacties gevonden.</p>;

    return (
        <ul className="space-y-2">
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} onDelete={onDelete} />
                // <li key={comment.id} className="border p-2 rounded shadow-sm">
                //     <p>{comment.content}</p>
                //     <small className="text-gray-500">{new Date(comment.createdAt).toLocaleString()}</small>
                // </li>
            ))}
        </ul>
    );
};

export default CommentList;