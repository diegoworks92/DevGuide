import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";
import OutputBlock from "../../ui/OutputBlock";
import ThemeSwitcher from "../../examples/ThemeSwitcher";
import RelatedContent from "../../ui/RelatedContent";

const ThemeContextBasicGuide = () => (
  <>
    <Title name="Context API: ThemeContext" />

    <CodeBlock
      id="create-context"
      heading="Crear ThemeContext"
      description="Define un contexto para el estado `dark`."
      title="src/context/ThemeContext.tsx"
      language="tsx"
      code={`import { createContext } from 'react';

type ThemeContextType = {
  dark: boolean;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
`}
    />

    <CodeBlock
      id="provider-component"
      heading="Crear ThemeProvider"
      description="Define el componente proveedor del contexto."
      title="src/context/ThemeProvider.tsx"
      language="tsx"
      code={`import { useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? 'theme-dark' : 'theme-light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
`}
    />

    <CodeBlock
      id="use-context-hook"
      heading="Hook personalizado"
      description="Crea `useTheme` para consumir el contexto."
      title="src/context/useTheme.ts"
      language="tsx"
      code={`import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return context;
};
`}
    />

    <CodeBlock
      id="global-styles"
      heading="Estilos globales"
      description="Define variables y clases para light y dark."
      title="src/index.css"
      language="css"
      code={`:root {
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
}

.theme-dark {
  background-color: var(--dark);
  color: var(--text-dark);
}`}
    />

    <CodeBlock
      id="wrap-app"
      heading="Envolver la App"
      description="Aplica `ThemeProvider` en el entry point."
      title="src/main.tsx"
      language="tsx"
      code={`import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeProvider";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);`}
    />

    <CodeBlock
      id="use-toggle"
      heading="Usar en un componente"
      description="Consume `useTheme` para alternar tema."
      title="src/components/ThemeSwitcher.tsx"
      language="tsx"
      code={`import React from 'react';
import { useTheme } from '../context/useTheme';

const ThemeSwitcher = () => {
  const { dark, toggle } = useTheme();
  const theme = dark ? "dark" : "light";

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <div className="theme-indicator">
        Tema actual: {theme.toUpperCase()}
      </div>
      <button className="theme-toggle-btn" onClick={toggle}>
        Cambiar a tema {theme === "light" ? "oscuro" : "claro"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
`}
    />

    <CodeBlock
      id="use-theme-in-app"
      heading="Acceder al tema en App"
      description="Usa `useTheme` directamente dentro del componente `App`."
      title="src/App.tsx"
      language="tsx"
      code={`import React from 'react';
import { useTheme } from './context/useTheme';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const { dark } = useTheme();

  return (
    <main>
      <ThemeSwitcher />
    </main>
  );
};

export default App;
`}
    />

    <OutputBlock
      heading="ThemeContext"
      description="Componente funcional con lógica aplicada usando useState y Context API para alternar el tema."
    >
      <ThemeSwitcher />
    </OutputBlock>

    <RelatedContent
      links={[
        {
          label: "Context API Avanzado",
          href: "/docs/themecontext-advanced",
          type: "doc",
        },
        {
          label: "Context API para tema claro/oscuro",
          href: "/guide/themecontext-guide",
          type: "guide",
        },
      ]}
    />

    <NavPagination links={allDocsLinks} />
  </>
);

export default ThemeContextBasicGuide;
