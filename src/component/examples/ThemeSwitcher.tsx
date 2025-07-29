import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <style>
        {`
          :root {
            --light: #ffffff;
            --dark: #1E1E1E;
            --text-light: #111827;
            --text-dark: #f3f4f6;
            --btn-light-bg: #1E1E1E;
            --btn-light-text: #f3f4f6;
            --btn-dark-bg: #ffffff;
            --btn-dark-text: #111827;
          }

          .theme-light {
            background-color: var(--light);
            color: var(--text-light);
            padding: 2rem;
            border-radius: 1rem;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .theme-dark {
            background-color: var(--dark);
            color: var(--text-dark);
            padding: 2rem;
            border-radius: 1rem;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .theme-indicator {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            font-family: system-ui, sans-serif;
          }

          .theme-toggle-btn {
            padding: 0.7rem 1.2rem;
            border: none;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .theme-light .theme-toggle-btn {
            background-color: var(--btn-light-bg);
            color: var(--btn-light-text);
          }

          .theme-dark .theme-toggle-btn {
            background-color: var(--btn-dark-bg);
            color: var(--btn-dark-text);
          }

          .theme-toggle-btn:hover {
            opacity: 0.85;
          }
        `}
      </style>

      <div className="theme-indicator">Tema actual: {theme.toUpperCase()}</div>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
