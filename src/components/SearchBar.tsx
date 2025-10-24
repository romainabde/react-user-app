interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    sort: "name" | "age";
    setSort: (value: "name" | "age") => void;
}

function SearchBar({ search, setSearch, sort, setSort }: SearchBarProps) {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Rechercher par nom, prénom ou email"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <select value={sort}
                    onChange={e => setSort(e.target.value as "name" | "age")} >
                <option value="name">Trier par prénom</option>
                <option value="age">Trier par âge</option>
            </select>
        </div>
    );
}

export default SearchBar;