import { logout } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="text-red-500 hover:text-red-700 cursor-pointer">
      Log uit
    </button>
  );
};

export default LogoutButton;