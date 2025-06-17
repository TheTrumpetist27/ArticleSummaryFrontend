import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";
import AuthForm from "../components/auth/AuthForm";
import AdminNavigation from "../components/admin/AdminNavigation";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = async (username, password) => {
        try {
            await register(username, password);
            alert("Registratie gelukt! Je kunt nu inloggen.");
            navigate("/login");
        } catch (error) {
            console.error("Registratie mislukt:", error);
            alert("Registratie mislukt. Probeer het opnieuw.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <AdminNavigation />
            <div className="flex items-center justify-center h-[calc(100vh-80px)]">
                <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Registreren</h2>
                    <AuthForm onSubmit={handleRegister} buttonText="Registreren" />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;