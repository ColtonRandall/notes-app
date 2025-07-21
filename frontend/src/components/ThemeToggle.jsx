import { useTheme } from "./ThemeProvider";

function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className={className}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "5px",
        left: "0",
        fontSize: "30px",
        zIndex: 1000,
      }}
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
