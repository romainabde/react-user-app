import { useEffect, useMemo, useState } from "react";
import { User } from "../model/User";
import { getUsers } from "../data/UserApi";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

function ListUsers(){

    const [users, setUsers] = useState<Array<User>>([]);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<"name" | "age">("name");

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

    const filteredUsers = useMemo(() => {
        let filtered = users.filter(user =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );

        if (sort === "name") {
            filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else if (sort === "age") {
            filtered.sort((a, b) => a.age - b.age);
        }

        return filtered;
    }, [users, search, sort]);

    if(loading){ return <p>Chargement...</p>; }
    if(error){ return <p>{error}</p>; }

    return (
        <div>
            <h1>ListUsers</h1>

            <SearchBar search={search} setSearch={setSearch} sort={sort} setSort={setSort}/>
            
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