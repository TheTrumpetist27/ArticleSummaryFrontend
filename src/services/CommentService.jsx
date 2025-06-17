import API from "./API";

export const GetCommentsByArticleId = async (articleId) => {
    const response = await API.get(`/comments/${articleId}`);
    return response.data;
};

export const PostComment = async (comment) => {
    const response = await API.post("/comments", comment);
    return response.data;
};

export const DeleteComment = async (commentId) => {
    const response = await API.delete(`/comments/${commentId}`);
    return response.status === 204; // Return true if deletion was successful
};