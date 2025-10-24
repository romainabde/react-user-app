import { useNavigate } from "react-router-dom";
import { User } from "../model/User";
import "./styles/UserCard.css";

interface UserCardProps {
    user : User;
    isFavorite: boolean;
    toggleFavorite: (userId: number) => void;
}

function UserCard({ user, isFavorite, toggleFavorite }: UserCardProps) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${user.id}`);
    }

    return (
        <div className="article-card">
            <div onClick={handleClick}>
                <div className="img-div">
                    <img src={user.image} alt={user.username} width="200" />
                </div>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <p>Âge: {user.age}</p>
            </div>
            <div className="favorite-star" onClick={() => toggleFavorite(user.id)}>
                {isFavorite ? "★" : "☆"}
            </div>
        </div>
    )
}

export default UserCard;