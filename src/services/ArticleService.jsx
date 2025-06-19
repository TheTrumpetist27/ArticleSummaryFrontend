import API from "./API";

export const CreateArticle = async (title, content) => {
    try {
        const response = await API.post("/article", { title, content });
        return response.data;
    } catch (error) {
        console.error('Error creating article: ', error);
        throw new Error('Failed to create article');
    }
};

export const GetArticleById = async (articleId) => {
    try {
        const response = await API.get(`/article/${articleId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching article: ', error);
        throw new Error('Failed to fetch article');
    }
};

export const GetAllArticles = async () => {
    try {
        const response = await API.get("/article");
        return response.data;
    } catch (error) {
        console.error('Error fetching articles: ', error);
        throw new Error('Failed to fetch articles');
    }
};

export const UpdateArticle = async (article) => {
    const response = await API.put(`/article/${article.id}`, article);
    return response.data;
};

export const DeleteArticle = async (articleId) => {
    try {
        const response = await API.delete(`/article/${articleId}`);
        return response.status === 204; // Return true if deletion was successful
    } catch (error) {
        console.error('Error deleting article: ', error);
        throw new Error('Failed to delete article');
    }
};