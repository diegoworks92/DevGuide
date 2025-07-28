import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <style>
        {`
          :root {
            --light: #ffffff;
            --dark: #1E1E1E;


          }

          .theme-light {
            background-color: var(--light);
            color: var(--dark);
          }

          .theme-dark {
            background-color: var(--dark);
            color: var(--light);
          }

          .theme-indicator {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 1rem;

          }

          .theme-toggle-btn {
            border: 1px solid;
            background-color: var(--dark);
            color: var(--light);
            border-color: var(--light);
            padding: 0.6rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .theme-dark .theme-toggle-btn {
            background-color: var(--light);
            color: var(--dark);
            border-color: var(--dark);
          }

       
          }
        `}
      </style>

      <div className={`${theme === "light" ? "theme-light" : "theme-dark"}`}>
        <h1 className="theme-indicator">Tema actual: {theme}</h1>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
        </button>
      </div>
    </>
  );
};

export default ThemeSwitcher;
