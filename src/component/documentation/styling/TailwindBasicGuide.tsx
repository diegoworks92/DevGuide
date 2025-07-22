import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const TailwindBasicGuide = () => {
  return (
    <>
      <Title name="Tailwind CSS Básico" />

      <CodeBlock
        id="official-docs"
        heading="Documentación oficial"
        description="Consulta la documentación oficial de Tailwind CSS."
        title="tailwindcss.com/docs"
        code={`https://tailwindcss.com/docs`}
        language="text"
      />

      <CodeBlock
        id="install-tailwind"
        heading="Instalar Tailwind CSS"
        description="Instala Tailwind y el plugin oficial para Vite."
        title="Terminal"
        language="bash"
        code="npm install -D tailwindcss @tailwindcss/vite"
        variants={[
          {
            label: "npm",
            code: "npm install -D tailwindcss @tailwindcss/vite",
          },
          {
            label: "yarn",
            code: "yarn add -D tailwindcss @tailwindcss/vite",
          },
          {
            label: "pnpm",
            code: "pnpm add -D tailwindcss @tailwindcss/vite",
          },
          { label: "bun", code: "bun add -d tailwindcss @tailwindcss/vite" },
        ]}
      />

      <CodeBlock
        id="vite-config"
        heading="Configurar plugin de Vite"
        description="Agrega el plugin de Tailwind a tu configuración de Vite."
        title="vite.config.ts"
        language="ts"
        code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}
      />

      <CodeBlock
        id="tailwind-import"
        heading="Importar Tailwind en tu CSS"
        description="Importa Tailwind CSS en tu archivo de estilos principal."
        title="src/index.css"
        language="css"
        code={`@import "tailwindcss";`}
      />

      <CodeBlock
        id="basic-usage"
        heading="Uso básico en React"
        description="Ejemplo de un componente que usa clases de Tailwind."
        title="src/App.tsx"
        language="tsx"
        code={`import React from 'react';

export default function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">Bienvenido</div>
        <p className="text-gray-500">¡Tailwind CSS integrado!</p>
      </div>
    </div>
  );
}`}
      />
    </>
  );
};

export default TailwindBasicGuide;
