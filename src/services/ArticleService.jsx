import axios from 'axios';
const API_URL = 'http://localhost:8090/api/Article';

export const CreateArticle = async (title, content) => {
    const response = await  fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to create article: ${error}`);
    }

    return await response.json();
}

export const GetArticleById = async (articleId) => {
    const response = await fetch(`${API_URL}/${articleId}`);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to fetch article: ${error}`);
    }

    return await response.json();
}

export const GetAllArticles = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Failed to fetch articles: ${error}`);
    }

    return await response.json();
}