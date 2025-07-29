// src/pages/ThemeContextGuide.tsx
import { allGuideLinks } from "../sidebar/guideSidebarLinks";
import Title from "../ui/Title";
import InfoText from "../ui/InfoText";
import CodeBlock from "../ui/CodeBlock";
import OutputBlock from "../ui/OutputBlock";
import RelatedContent from "../ui/RelatedContent";
import NavPagination from "../ui/NavPagination";
import ThemeSwitcher from "../examples/ThemeSwitcher";

const ThemeContextGuide = () => (
  <>
    <Title name="Context API para tema claro/oscuro" />

    <InfoText
      heading="Cómo utilizar la API React Context en tus proyectos"
      description={`La gestión del estado es una parte esencial del desarrollo de aplicaciones en React.  
Una forma común de gestionar el estado es pasando props. Pasar props significa enviar datos de un componente a otro.  
Es una buena manera de asegurarse de que los datos lleguen al lugar correcto en una aplicación React.`}
    />

    <InfoText
      heading="¿Por qué evitar el prop drilling?"
      description={`Puede resultar molesto pasar props cuando tienes que enviar los mismos datos a muchos componentes  
o cuando los componentes están muy lejos unos de otros en el árbol.  
Esto hace que el código sea más difícil de leer, mantener y refactorizar.  
A esto se le conoce como "prop drilling".`}
    />

    <InfoText
      heading="¿Qué es Context API?"
      description={`Context API es una funcionalidad nativa de React que permite compartir datos globales directamente con los componentes que los necesitan, sin tener que pasar props manualmente en cada nivel del árbol de componentes.

    Este enfoque evita el prop drilling y mejora la legibilidad del código. Se compone de tres elementos principales:

    • Un objeto de contexto creado con createContext, que define el tipo de datos y su valor por defecto.  
    • Un Provider, que envuelve el árbol de componentes y suministra el valor real mediante la prop value.  
    • Un hook useContext (o un componente Consumer), que permite a los componentes acceder directamente al valor del contexto más cercano.`}
    />

    <InfoText
      heading="Ejemplo práctico: alternar tema claro/oscuro"
      description={`En este ejemplo veremos cómo usar Context API para controlar el tema de tu aplicación (modo claro/oscuro).  
Estos son los pasos que seguiremos:`}
    />

    <CodeBlock
      id="create-context"
      heading="1. Crear un objeto de contexto"
      title="src/context/ThemeContext.tsx"
      language="tsx"
      code={`import { createContext } from 'react';

type ThemeContextType = {
  dark: boolean;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);`}
    />

    <CodeBlock
      id="create-provider"
      heading="2. Crear Provider"
      title="src/context/ThemeProvider.tsx"
      language="tsx"
      code={`import { useState, ReactNode } from 'react';
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
};`}
    />

    <CodeBlock
      id="use-theme"
      heading="3. Crear hook personalizado (opcional)"
      title="src/context/useTheme.tsx"
      language="tsx"
      code={`import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return context;
};`}
    />

    <CodeBlock
      id="use-toggle"
      heading="4. Consumir el contexto desde un componente"
      description={`Consume "useTheme" para alternar tema.`}
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
      id="wrap-app"
      heading="5. Envolver tu aplicación con el Provider"
      description={`Aplica "ThemeProvider" en el entry point.`}
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
      id="index-css"
      heading="6. Estilos globales"
      title="src/index.css"
      language="css"
      code={`body {
  margin: 0;
  font-family: sans-serif;
}

.theme-light {
  background-color: #ffffff;
  color: #1a1a1a;
}

.theme-dark {
  background-color: #1a1a1a;
  color: #ffffff;
}

.switch-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
}`}
    />

    <CodeBlock
      id="use-theme-in-app"
      heading="Acceder al tema en App"
      description={`Usa "useTheme" directamente dentro del componente "App".`}
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
      heading="Resultado final"
      description="Tu aplicación cambia el tema automáticamente con un simple clic."
    >
      <ThemeSwitcher />
    </OutputBlock>

    <InfoText
      heading="Casos de uso de Context API"
      description={`• Temas: compartir el modo claro/oscuro en toda la app.  
• Autenticación: estado de login disponible globalmente.  
• Internacionalización: cambiar idioma sin pasar props.  
• Datos externos: compartir respuestas de API entre componentes.`}
    />

    <InfoText
      heading="En resumen"
      description={`Context API te permite compartir datos globales sin prop drilling, mejorando la legibilidad y escalabilidad de tu aplicación.`}
    />

    <RelatedContent
      links={[
        {
          label: "Context API: ThemeContext",
          href: "/docs/context-api-themecontext",
          type: "doc",
        },
        {
          label: "ThemeContext con useReducer y Persistencia",
          href: "/docs/themecontext-advanced",
          type: "doc",
        },
      ]}
    />

    <NavPagination links={allGuideLinks} />
  </>
);

export default ThemeContextGuide;
