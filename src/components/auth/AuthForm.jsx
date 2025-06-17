import { useState } from "react";

const AuthForm = ({ onSubmit, buttonText }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username, password);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Gebruikersnaam"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded px-3 py-2"
                required
            />
            <input
                type="password"
                placeholder="Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded px-3 py-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer">
                {buttonText}
            </button>
        </form>
    );
};

export default AuthForm;