interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Rechercher par nom, prénom ou email"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;