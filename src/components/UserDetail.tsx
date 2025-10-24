import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { User } from "../model/User";
import { getUserById } from "../data/UserApi";

function UserDetail() {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
        getUserById(parseInt(id))
            .then(data => {
                setUser(data);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if(!user){
        return <p>404 : Utilisateur non trouvé</p>;
    }

    return (
        <div>
            <h1>User Detail</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <img src={user.image} alt={user.username} width="200" />
        </div>
    )
}

export default UserDetail;