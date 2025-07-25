import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import Title from "../../ui/Title";

const TailwindPostCSSGuide = () => {
  return (
    <>
      <Title name="Tailwind CSS con PostCSS" />

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
        description="Instala Tailwind y dependencias necesarias para PostCSS."
        title="Terminal"
        language="bash"
        code="npm install -D tailwindcss postcss autoprefixer"
        variants={[
          {
            label: "npm",
            code: "npm install -D tailwindcss postcss autoprefixer",
          },
          {
            label: "yarn",
            code: "yarn add -D tailwindcss postcss autoprefixer",
          },
          {
            label: "pnpm",
            code: "pnpm add -D tailwindcss postcss autoprefixer",
          },
          { label: "bun", code: "bun add -d tailwindcss postcss autoprefixer" },
        ]}
      />

      <CodeBlock
        id="init-config"
        heading="Inicializar configuración"
        description="Genera los archivos de configuración de Tailwind y PostCSS."
        title="Terminal"
        language="bash"
        code="npx tailwindcss init -p"
      />

      <CodeBlock
        id="tailwind-directives"
        heading="Agregar directivas"
        description="Incluye las directivas base, components y utilities en tu CSS principal."
        title="src/index.css"
        language="css"
        code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
      />

      <CodeBlock
        id="postcss-config"
        heading="Configurar PostCSS"
        description="Asegúrate de que Tailwind y Autoprefixer estén habilitados en PostCSS."
        title="postcss.config.js"
        language="js"
        code={`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
};`}
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
      <NavPagination />
    </>
  );
};

export default TailwindPostCSSGuide;
