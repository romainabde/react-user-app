import { useNavigate } from "react-router-dom";
import "./styles/ErrorPage.css";

interface ErrorPageProps {
    message?: string; // message personnalisé
}

function ErrorPage({ message }: ErrorPageProps) {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <h1>Erreur</h1>
            <h2>Quelque chose s'est mal passé !</h2>
            <p>{message || "Veuillez réessayer plus tard."}</p>
            <button onClick={() => navigate("/")}>Retour à l'accueil</button>
        </div>
    );
}

export default ErrorPage;
