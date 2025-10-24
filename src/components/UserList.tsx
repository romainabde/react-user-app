import { useEffect, useState } from "react";
import { User } from "../model/User";
import { getUsers } from "../data/UserApi";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

function ListUsers(){

    const [users, setUsers] = useState<Array<User>>([]);
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                setError("Erreur lors de la récupération des utilisateurs : " +err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if(loading){ return <p>Chargement...</p>; }
    if(error){ return <p>{error}</p>; }

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>ListUsers</h1>

            <SearchBar search={search} setSearch={setSearch} />
            
            <div className="users">
                {
                    filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
}

export default ListUsers;