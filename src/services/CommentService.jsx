import axios from "axios";

const API_URL = "http://localhost:8090/api/Comments";

export const GetCommentsByArticleId = async (articleId) => {
    const response = await axios.get(`${API_URL}/${articleId}`);
    return response.data;
};

export const PostComment = async (comment) => {
    const response = await axios.post(API_URL, comment);
    return response.data;
};

export const DeleteComment = async (commentId) => {
    const response = await axios.delete(`${API_URL}/${commentId}`);
    return response.status === 204; // Return true if deletion was successful
};