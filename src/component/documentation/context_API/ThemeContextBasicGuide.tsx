import React, { createContext, useContext, useState } from "react";
import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ThemeContext = createContext<{
  dark: boolean;
  toggle: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? "theme-dark" : "theme-light"}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}

const ThemeContextBasicGuide = () => (
  <>
    <Title name="Context API Básico" />

    <CodeBlock
      id="create-context"
      heading="Crear provider de tema"
      description="Define ThemeContext con `dark` y `toggle`."
      title="src/guides/basic/ThemeContextBasicGuide.tsx"
      code={`const ThemeContext = createContext<{ dark: boolean; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(prev => !prev);
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? "theme-dark" : "theme-light"}>{children}</div>
    </ThemeContext.Provider>
  );
}`}
      language="tsx"
    />

    <CodeBlock
      id="global-styles"
      heading="Estilos globales con SCSS"
      description="Define variables y clases para light y dark."
      title="src/styles/theme.scss"
      code={`$bg-light: #ffffff;
$bg-dark: #1f2937;
$text-light: #111827;
$text-dark: #f9fafb;

.theme-light {
  background: $bg-light;
  color: $text-light;
}

.theme-dark {
  background: $bg-dark;
  color: $text-dark;
}`}
      language="scss"
    />

    <CodeBlock
      id="wrap-app"
      heading="Envolver la App"
      description="Aplica ThemeProvider en el entry point."
      title="src/main.tsx"
      code={`import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './guides/basic/ThemeContextBasicGuide';
import App from './App';
import './styles/theme.scss';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);`}
      language="tsx"
    />

    <CodeBlock
      id="use-toggle"
      heading="Usar en un componente"
      description="Consume `useTheme` para alternar tema."
      title="src/components/ThemeSwitcher.tsx"
      code={`import React from 'react';
import { useTheme } from '../guides/basic/ThemeContextBasicGuide';

export default function ThemeSwitcher() {
  const { dark, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      Cambiar a modo {dark ? 'claro' : 'oscuro'}
    </button>
  );
}`}
      language="tsx"
    />
  </>
);

export default ThemeContextBasicGuide;
