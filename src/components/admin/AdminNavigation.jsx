//import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavigation = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-slate-50 text-slate-700 px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>AI Samenvatter Admin</h1>
            <div className="text-sm opacity-75 cursor-pointer" onClick={() => navigate("/companies")}>Companies</div>
        </header>
    )
}

export default AdminNavigation;