import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";
import OutputBlock from "../../ui/OutputBlock";
import ThemeSwitcher from "../../examples/ThemeSwitcher";
import RelatedContent from "../../ui/RelatedContent";

const ThemeContextAdvancedGuide = () => (
  <>
    <Title name="ThemeContext con useReducer y Persistencia" />

    <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
      Si ya usas <strong>ThemeContext con useState</strong> pero quieres
      añadirle más flexibilidad, esta documentación te muestra cómo escalarlo
      con <code>useReducer</code>, separación de contextos y persistencia en{" "}
      <code>localStorage</code>.
    </p>

    <CodeBlock
      id="reducer-types"
      heading="Definir State y Action"
      description="Usa discriminated unions para tus acciones."
      title="src/context/themeTypes.ts"
      language="ts"
      code={`export type Theme = "light" | "dark";

export type State = { theme: Theme };

export type Action =
  | { type: "TOGGLE" }
  | { type: "SET"; payload: Theme };
`}
    />

    <CodeBlock
      id="create-reducer"
      heading="Implementar themeReducer"
      description="Gestiona toggle y set manual."
      title="src/context/themeReducer.ts"
      language="ts"
      code={`import { State, Action } from "./themeTypes";

export function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET":
      return { theme: action.payload };
    default:
      return state;
  }
}
`}
    />

    <CodeBlock
      id="create-context"
      heading="Crear ThemeContext"
      description="Separa los contextos para estado y dispatch."
      title="src/context/ThemeContext.tsx"
      language="tsx"
      code={`import { createContext } from "react";
import type { State, Action } from "./themeTypes";

export const ThemeStateContext = createContext<State | undefined>(undefined);
export const ThemeDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);
`}
    />

    <CodeBlock
      id="provider-advanced"
      heading="ThemeProvider avanzado"
      description="useReducer con lazy init y persistencia en localStorage."
      title="src/context/ThemeProvider.tsx"
      language="tsx"
      code={`import { useReducer, useEffect } from "react";
import type { ReactNode } from 'react';
import { themeReducer } from "./themeReducer";
import { ThemeStateContext, ThemeDispatchContext } from "./ThemeContext";
import type { State } from "./themeTypes";

const initialState: State = { theme: "light" };

function init(_: State): State {
  const stored = localStorage.getItem("theme");
  return stored === "dark" ? { theme: "dark" } : initialState;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    document.documentElement.className = state.theme;
  }, [state.theme]);

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};
`}
    />

    <CodeBlock
      id="use-hooks"
      heading="Hooks de consumo"
      description="Mantén tus hooks en un archivo separado para Fast Refresh."
      title="src/context/useTheme.ts"
      language="ts"
      code={`import { useContext } from "react";
import { ThemeStateContext, ThemeDispatchContext } from "./ThemeContext";

export function useThemeState() {
  const context = useContext(ThemeStateContext);
  if (!context) throw new Error("useThemeState debe usarse dentro de ThemeProvider");
  return context;
}

export function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);
  if (!context) throw new Error("useThemeDispatch debe usarse dentro de ThemeProvider");
  return context;
}
`}
    />

    <CodeBlock
      id="wrap-advanced"
      heading="Envolver la App con ThemeProvider"
      description="Asegúrate de envolver tu aplicación desde el entry point con el ThemeProvider avanzado."
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
      id="consume-advanced"
      heading="Componente ThemeSwitcher"
      description="Alterna tema con dispatch y muestra estado."
      title="src/components/ThemeSwitcher.tsx"
      language="tsx"
      code={`import React from 'react';
import { useThemeState, useThemeDispatch } from '../context/useTheme';

export default function ThemeSwitcher() {
  const { theme } = useThemeState();
  const dispatch = useThemeDispatch();

  return (
    <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <div className="theme-indicator">
        Tema actual: {theme.toUpperCase()}
      </div>
      <button className="theme-toggle-btn" onClick={() => dispatch({ type: 'TOGGLE' })}>
        Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
}
`}
    />

    <CodeBlock
      id="use-theme-in-app"
      heading="Acceder al tema en App"
      description="Consulta el tema actual desde el contexto."
      title="src/App.tsx"
      language="tsx"
      code={`import React from 'react';
import { useThemeState } from './context/useTheme';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { theme } = useThemeState();

  return (
    <main>
      <ThemeSwitcher />
    </main>
  );
}

export default App;
`}
    />

    <OutputBlock
      heading="ThemeContext"
      description="Componente funcional con lógica aplicada usando useReducer y Context API para gestionar el tema con estilos integrados."
    >
      <ThemeSwitcher />
    </OutputBlock>

    <RelatedContent
      links={[
        {
          label: "Context API: ThemeContext",
          href: "/docs/context-api-themecontext",
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

export default ThemeContextAdvancedGuide;
