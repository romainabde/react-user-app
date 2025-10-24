import { useTheme } from "../context/ThemeContext";

function ChangeTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
        </button>
    );
}

export default ChangeTheme;