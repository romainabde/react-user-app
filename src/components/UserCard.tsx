import { useNavigate } from "react-router-dom";
import { User } from "../model/User";
import "./styles/UserCard.css";

interface UserCardProps {
    user : User;
}

function UserCard({user} : UserCardProps){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${user.id}`);
    }

    return (
        <div className="article-card" onClick={handleClick}>
            <img src={user.image} alt={user.username} width="200" />
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Âge: {user.age}</p>
        </div>
    )
}

export default UserCard;