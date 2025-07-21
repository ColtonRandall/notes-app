import { useTheme } from "./ThemeProvider";
import { Sun, MoonStar } from "lucide-react";

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
        top: "15px",
        left: "15px",
        zIndex: 1000,
      }}
    >
      {isLight ? (
        <MoonStar size="32" color="lightblue" fill="lightblue" />
      ) : (
        <Sun size="32" color="yellow" fill="yellow" />
      )}
    </button>
  );
}

export default ThemeToggle;
