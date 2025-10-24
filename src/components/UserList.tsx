import { useEffect, useMemo, useState } from "react";
import { User } from "../model/User";
import { getUsers } from "../data/UserApi";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import "./styles/UserList.css";
import LoadingSpinner from "./LoadingSpinner";

function ListUsers(){

    // Données des utilisateurs
    const [users, setUsers] = useState<Array<User>>([]);

    // Recherche et tri
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<"name" | "age">("name");
    
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    // Gestion du chargement et des erreurs
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Gérer les favoris
    const [favorites, setFavorites] = useState<number[]>(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleFavorite = (userId: number) => {
        setFavorites(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        );
    };

    // Récupérer les utilisateurs au chargement du composant
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

    // Réinitialiser la page courante lors d'une nouvelle recherche
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    // Filtrer et trier les utilisateurs
    const filteredUsers = useMemo(() => {
        let filtered = users.filter(user =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );

        if (showFavorites) {
            filtered = filtered.filter(user => favorites.includes(user.id));
        }

        if (sort === "name") {
            filtered.sort((a, b) => a.firstName.localeCompare(b.firstName));
        } else if (sort === "age") {
            filtered.sort((a, b) => a.age - b.age);
        }

        return filtered;
    }, [users, search, sort, showFavorites, favorites]);

    // Gérer les états de chargement et d'erreur
    if(loading){ return <LoadingSpinner/>; }
    if(error){ return <p>{error}</p>; }

    // Pagination des utilisateurs
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="user-list">
            <h1>Liste des utilisateurs</h1>

            <SearchBar
                search={search}
                setSearch={setSearch}
                sort={sort}
                setSort={setSort}
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites} // <-- ici c'était faux avant
            />
            
            <div className="users">
                {
                    currentUsers.map(user => (
                        <UserCard   key={user.id} user={user}
                                    isFavorite={favorites.includes(user.id)}
                                    toggleFavorite={toggleFavorite}/>
                    ))
                }
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button key={page}
                            onClick={() => setCurrentPage(page)}
                            disabled={page === currentPage} >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ListUsers;