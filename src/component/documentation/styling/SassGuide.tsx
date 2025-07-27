import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";

const SassGuide = () => {
  return (
    <>
      <Title name="Sass" />

      <CodeBlock
        id="official-docs"
        heading="Documentación oficial"
        description="Consulta la documentación oficial de Sass."
        title="sass-lang.com/docs"
        code={`https://sass-lang.com/documentation`}
        language="text"
      />

      <CodeBlock
        id="install-sass"
        heading="Instalar Sass"
        description="Agrega Sass como dependencia de desarrollo con tu gestor favorito."
        title="Terminal"
        language="bash"
        code="npm install -D sass"
        variants={[
          { label: "npm", code: "npm install -D sass" },
          { label: "yarn", code: "yarn add -D sass" },
          { label: "pnpm", code: "pnpm add -D sass" },
          { label: "bun", code: "bun add -d sass" },
        ]}
      />

      <CodeBlock
        id="variables"
        heading="Variables y mixins"
        description="Define variables compartidas y mixins reutilizables."
        title="src/styles/_variables.scss"
        code={`$primary-color: #3490dc;
$spacing-unit: 1rem;
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px
);

@mixin respond-to($bp) {
  @media (min-width: map-get($breakpoints, $bp)) {
    @content;
  }
}`}
        language="scss"
      />

      <CodeBlock
        id="global-scss"
        heading="Estilos globales"
        description="Crea tu archivo global SCSS reemplazando index.css."
        title="src/index.scss"
        code={`@import './styles/variables';

body {
  font-family: Helvetica, sans-serif;
  background: #f8fafc;
  color: #334155;
}

a {
  color: $primary-color;
  &:hover {
    color: darken($primary-color, 10%);
  }
}

.container {
  margin: $spacing-unit;
  @include respond-to(md) {
    margin: $spacing-unit * 2;
  }
}`}
        language="scss"
      />

      <CodeBlock
        id="import-scss"
        heading="Importar SCSS"
        description="Importa los estilos globales en el punto de entrada."
        title="src/main.tsx"
        code={`import './index.scss';`}
        language="tsx"
      />

      <CodeBlock
        id="scss-module"
        heading="Módulo SCSS por componente"
        description="Coloca módulos SCSS de interfaz en la carpeta ui."
        title="src/ui/Button.module.scss"
        code={`@import "../styles/variables";
          
.button {
  background: $primary-color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background: darken($primary-color, 5%);
  }
}`}
        language="scss"
      />

      <CodeBlock
        id="use-scss-module"
        heading="Usar módulo SCSS"
        description="Importa el módulo y aplica su clase en el componente."
        title="src/ui/Button.tsx"
        code={`import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="postcss-autoprefixer"
        heading="PostCSS y Autoprefixer"
        description="Configura PostCSS con Autoprefixer para añadir prefijos CSS según navegador."
        title="vite.config.ts"
        code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// instala primero: npm install -D autoprefixer postcss
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});`}
        language="ts"
      />

      <CodeBlock
        id="use-button"
        heading="Usar el componente Button"
        description="Importa y renderiza tu nuevo Button en App.tsx."
        title="src/App.tsx"
        code={`import React from 'react';
import Button from './ui/Button';

function App() {
  return (
    <div className="p-4">
      <Button onClick={() => alert('¡Hola!')}>Haz click</Button>
    </div>
  );
}

export default App;`}
        language="tsx"
      />
      <NavPagination links={allDocsLinks} />
    </>
  );
};

export default SassGuide;
