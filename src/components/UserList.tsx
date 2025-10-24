import { useEffect, useState } from "react";
import { User } from "../model/User";
import { getUsers } from "../data/UserApi";
import UserCard from "./UserCard";

function ListUsers(){

    const [users, setUsers] = useState<Array<User>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data);
            })
            .catch(() => {
                setUsers([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if(!users || users.length === 0){
        return <p>Impossible de récupérer les utilisateurs</p>;
    }

    return (
        <div>
            <h1>ListUsers</h1>
            <div className="users">
                {
                    users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
}

export default ListUsers;