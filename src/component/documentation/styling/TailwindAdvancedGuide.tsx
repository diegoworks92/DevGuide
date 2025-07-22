import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const TailwindAdvancedGuide = () => {
  return (
    <>
      <Title name="Tailwind CSS Avanzado" />

      <CodeBlock
        id="extend-theme"
        heading="Extender el tema"
        description="Añade colores, spacing, fuentes y breakpoints personalizados."
        title="tailwind.config.js"
        language="js"
        code={`import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: \`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        \`,
      },
    },
  },
});

export const theme = {
  extend: {
    colors: {
      primary: '#1FB6FF',
      secondary: '#7E5BEF',
    },
    spacing: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    screens: {
      '3xl': '1600px',
    },
  },
};`}
      />

      <CodeBlock
        id="custom-utilities"
        heading="Utilidades personalizadas"
        description="Define nuevas clases en la capa utilities usando @layer."
        title="src/index.css"
        language="css"
        code={`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px #ff0000;
  }
  .filter-sepia {
    filter: sepia(100%);
  }
}`}
      />

      <CodeBlock
        id="custom-components"
        heading="Componentes personalizados"
        description="Crea tus propios componentes preconfigurados con @layer components."
        title="src/components/Button.css"
        language="css"
        code={`@layer components {
  .btn-custom {
    @apply px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary;
  }
}`}
      />

      <CodeBlock
        id="dark-mode"
        heading="Modo oscuro"
        description="Activa y configura dark mode con la clase 'dark'."
        title="tailwind.config.js"
        language="js"
        code={`module.exports = {
  darkMode: 'class', // o 'media'
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};`}
      />

      <CodeBlock
        id="using-dark-mode"
        heading="Uso del modo oscuro"
        description="Ejemplo de toggle entre light y dark en React."
        title="src/App.tsx"
        language="tsx"
        code={`import React, { useState } from 'react';

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <button
          className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
          onClick={() => setDark(!dark)}
        >
          Toggle Dark
        </button>
      </div>
    </div>
  );
}`}
      />

      <CodeBlock
        id="content-config"
        heading="Configurar content"
        description="Especifica las rutas para eliminar CSS no usado en producción."
        title="tailwind.config.js"
        language="js"
        code={`module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};`}
      />

      <CodeBlock
        id="plugins-example"
        heading="Plugins oficiales"
        description="Añade el plugin Typography de Tailwind."
        title="tailwind.config.js"
        language="js"
        code={`module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')],
};`}
      />

      <CodeBlock
        id="apply-in-css"
        heading="Usar @apply"
        description="Reutiliza clases de Tailwind dentro de tu CSS."
        title="src/index.css"
        language="css"
        code={`.card {
  @apply max-w-sm mx-auto bg-white shadow-md rounded-lg p-6;
}

.card-title {
  @apply text-xl font-bold mb-2;
}`}
      />

      <CodeBlock
        id="using-components"
        heading="Consumir tu componente"
        description="Importa y usa la clase .btn-custom en React."
        title="src/components/Button.tsx"
        language="tsx"
        code={`import React from 'react';
import '../index.css';

export default function Button() {
  return <button className="btn-custom">Click me</button>;
}`}
      />
    </>
  );
};

export default TailwindAdvancedGuide;
