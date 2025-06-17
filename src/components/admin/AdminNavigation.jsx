import { useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../services/AuthService";
import LogoutButton from "../auth/LogoutButton";

const AdminNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-slate-50 text-slate-700 px-6 py-4 flex justify-between items-center shadow-md">
            <h1
                className="text-xl font-bold cursor-pointer"
                onClick={() => navigate("/")}
            >
                AI Samenvatter Admin
            </h1>

            <nav className="flex gap-4 items-center text-sm">
                <div
                    className={`cursor-pointer ${isActive("/companies") ? "font-bold text-slate-900" : "opacity-75"}`}
                    onClick={() => navigate("/companies")}
                >
                    Companies
                </div>

                <div
                    className={`cursor-pointer ${isActive("/articles") ? "font-bold text-slate-900" : "opacity-75"}`}
                    onClick={() => navigate("/articles")}
                >
                    Articles
                </div>

                {isAuthenticated() && (
                    <div
                        className={`cursor-pointer ${isActive("/article/add") ? "font-bold text-slate-900" : "opacity-75"}`}
                        onClick={() => navigate("/article/add")}
                    >
                        Add Article
                    </div>
                )}

                {!isAuthenticated() ? (
                    <>
                        <div
                            className={`cursor-pointer ${isActive("/login") ? "font-bold text-slate-900" : "opacity-75"}`}
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </div>

                        <div
                            className={`cursor-pointer ${isActive("/register") ? "font-bold text-slate-900" : "opacity-75"}`}
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </div>
                    </>
                ) : (
                    <LogoutButton />
                )}
            </nav>
        </header>
    );
}

export default AdminNavigation;