import { Link } from "react-router-dom";
import AdminNavigation from "../components/admin/AdminNavigation";

function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
            <AdminNavigation />
            <main className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                    Welkom, Admin!
                </h2>
                <p className="text-base mb-8 text-slate-700">
                    Dit is je centrale dashboard om bedrijven en gebruikers te beheren.<br />
                    Begin door een bedrijf te bekijken of toe te voegen.
                </p>

                <a
                    href="/companies"
                    className="inline-block bg-sky-500 hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-lg transition">
                    Bekijk Bedrijven
                </a>
            </main>
        </div>
    );
}

export default HomePage;