import { useNavigate } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h2>Page introuvable</h2>
            <p>Oups ! La page que vous recherchez n'existe pas.</p>
            <button onClick={() => navigate("/")}>Retour à l'accueil</button>
        </div>
    );
}

export default NotFound;
