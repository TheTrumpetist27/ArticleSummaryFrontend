import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";
import AuthForm from "../components/auth/AuthForm";
import AdminNavigation from "../components/admin/AdminNavigation";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        try {
            await login(username, password);
            navigate("/articles");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login mislukt. Controleer uw gebruikersnaam en wachtwoord.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <AdminNavigation />
            <div className="flex items-center justify-center h-[calc(100vh-80px)]">
                <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Login</h2>
                    <AuthForm onSubmit={handleLogin} buttonText="Inloggen" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;