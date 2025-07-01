import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

type Theme = "light" | "dark";

type State = { theme: Theme };

type Action = { type: "TOGGLE" } | { type: "SET"; payload: Theme };

function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET":
      return { theme: action.payload };
    default:
      return state;
  }
}

const initialState: State = { theme: "light" };

const ThemeStateContext = createContext<State | undefined>(undefined);
const ThemeDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState, () => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? { theme: "dark" } : initialState;
  });

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
}

export function useThemeState() {
  const ctx = useContext(ThemeStateContext);
  if (!ctx)
    throw new Error("useThemeState debe usarse dentro de ThemeProvider");
  return ctx;
}

export function useThemeDispatch() {
  const ctx = useContext(ThemeDispatchContext);
  if (!ctx)
    throw new Error("useThemeDispatch debe usarse dentro de ThemeProvider");
  return ctx;
}

const ThemeContextAdvancedGuide = () => (
  <>
    <Title name="Context API Avanzado" />

    <CodeBlock
      id="reducer-types"
      heading="Definir State y Action"
      description="Usa discriminated unions para tus acciones."
      title="src/guides/advanced/ThemeContextAdvancedGuide.tsx"
      code={`type Theme = "light" | "dark";

type State = { theme: Theme };

type Action = 
  | { type: "TOGGLE" } 
  | { type: "SET"; payload: Theme };`}
      language="ts"
    />

    <CodeBlock
      id="create-reducer"
      heading="Implementar themeReducer"
      description="Gestiona toggle y set manual."
      title="src/guides/advanced/ThemeContextAdvancedGuide.tsx"
      code={`function themeReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET":
      return { theme: action.payload };
    default:
      return state;
  }
}`}
      language="ts"
    />

    <CodeBlock
      id="tailwind-config"
      heading="Configurar Tailwind para dark mode"
      description="Activa el modo `class` en Tailwind."
      title="tailwind.config.js"
      code={`module.exports = {
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
};`}
      language="js"
    />

    <CodeBlock
      id="provider-advanced"
      heading="ThemeProvider avanzado"
      description="Usa useReducer, lazy init y persiste en localStorage."
      title="src/guides/advanced/ThemeContextAdvancedGuide.tsx"
      code={`export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState, () => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? { theme: "dark" } : initialState;
  });

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
}`}
      language="tsx"
    />

    <CodeBlock
      id="use-hooks"
      heading="Hooks de consumo"
      description="Separar lectura y dispatch para mayor seguridad."
      title="src/guides/advanced/ThemeContextAdvancedGuide.tsx"
      code={`export function useThemeState() {
  const ctx = useContext(ThemeStateContext);
  if (!ctx) throw new Error("useThemeState dentro de ThemeProvider");
  return ctx;
}

export function useThemeDispatch() {
  const ctx = useContext(ThemeDispatchContext);
  if (!ctx) throw new Error("useThemeDispatch dentro de ThemeProvider");
  return ctx;
}`}
      language="tsx"
    />

    <CodeBlock
      id="consume-advanced"
      heading="Componente ThemeSwitcher"
      description="Alterna tema con dispatch y muestra estado."
      title="src/components/ThemeSwitcher.tsx"
      code={`import React from 'react';
import { useThemeState, useThemeDispatch } from '../guides/advanced/ThemeContextAdvancedGuide';

export default function ThemeSwitcher() {
  const { theme } = useThemeState();
  const dispatch = useThemeDispatch();
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE' })}>
      Tema: {theme === 'light' ? 'Claro' : 'Oscuro'}
    </button>
  );
}`}
      language="tsx"
    />
  </>
);

export default ThemeContextAdvancedGuide;
