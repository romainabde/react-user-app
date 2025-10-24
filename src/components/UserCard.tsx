import { User } from "../model/User";

interface UserCardProps {
    user : User;
}

function UserCard({user} : UserCardProps){
    return (
        <div className="article-card">
            <img src={user.image} alt={user.username} width="200" />
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    )
}

export default UserCard;