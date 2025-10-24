import './styles/SearchBar.css';

interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    sort: "name" | "age";
    setSort: (value: "name" | "age") => void;
    showFavorites: boolean;
    setShowFavorites: (value: boolean) => void;
}

function SearchBar({ search, setSearch, sort, setSort, showFavorites, setShowFavorites }: SearchBarProps) {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Rechercher par nom, prénom ou email"
                value={search}
                onChange={e => setSearch(e.target.value)} />

            <select value={sort} onChange={e => setSort(e.target.value as "name" | "age")} >
                <option value="name">Trier par prénom</option>
                <option value="age">Trier par âge</option>
            </select>

            <div className="favorites-filter">
                <input
                    type="checkbox"
                    checked={showFavorites}
                    onChange={e => setShowFavorites(e.target.checked)} />
                <p>Afficher seulement les favoris</p>
            </div>
        </div>
    );
}

export default SearchBar;