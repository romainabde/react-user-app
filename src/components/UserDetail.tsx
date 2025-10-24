import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { User } from "../model/User";
import { getUserById } from "../data/UserApi";

function UserDetail() {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
        getUserById(parseInt(id))
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                setError("Utilisateur non trouvé : " +err.message);
            })
            .finally(() => {
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if(error){
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Impossible de récupérer les informations de l'utilisateur.</p>;
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