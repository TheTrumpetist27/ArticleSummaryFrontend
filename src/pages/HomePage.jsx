import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <p>
                Welcome to the home page. Click <Link to="/companies">here</Link> to view the companies.
            </p>
        </div>
    );
}

export default HomePage;