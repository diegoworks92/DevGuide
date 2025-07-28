import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";
import OutputBlock from "../../ui/OutputBlock";
import ThemeSwitcher from "../../examples/ThemeSwitcher";

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
  --bg-light: #ffffff;
  --bg-dark: #1f2937;
  --text-light: #111827;
  --text-dark: #f9fafb;
}

.theme-light {
  background: var(--bg-light);
  color: var(--text-light);
}

.theme-dark {
  background: var(--bg-dark);
  color: var(--text-dark);
}`}
    />

    <CodeBlock
      id="wrap-app"
      heading="Envolver la App"
      description="Aplica `ThemeProvider` en el entry point."
      title="src/main.tsx"
      language="tsx"
      code={`import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeProvider';
import App from './App';
import "./index.css";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
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

  return (
    <>
      <h1>{dark ? "Modo Oscuro" : "Modo Claro"}</h1>
      <button onClick={toggle}>Cambiar modo {dark ? "claro" : "oscuro"}
      </button>
    </>
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

// Accedemos al estado 'dark' desde el hook useTheme para aplicar estilos globales o lógica visual
// al componente raíz de la aplicación. Esto permite controlar el tema desde la entrada principal.
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
      description="Componente funcional con lógica aplicada usando useReducer:"
    >
      <ThemeSwitcher />
    </OutputBlock>

    <NavPagination links={allDocsLinks} />
  </>
);

export default ThemeContextBasicGuide;
