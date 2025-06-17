import axios from "axios";

const API_URL = "http://localhost:8090/api/auth";

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    return token;
};

export const register = async (username, password) => {
    await axios.post(`${API_URL}/register`, {
        username,
        password
    });
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};