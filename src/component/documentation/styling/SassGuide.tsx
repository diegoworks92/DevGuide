import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const SassGuide = () => {
  return (
    <>
      <Title name="Sass" />

      {/* Official Docs */}
      <CodeBlock
        id="official-docs"
        heading="Official Docs"
        title="Sass Documentation"
        code={`https://sass-lang.com/documentation`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="install-sass"
        heading="Install Sass"
        title="Terminal"
        code={`npm install -D sass`}
        language="bash"
      />

      {/* Archivo global SCSS */}
      <CodeBlock
        id="global-scss-file"
        heading="Create a global SCSS file"
        title="src/index.scss"
        code={`$primary-color: #3490dc;
$font-stack: Helvetica, sans-serif;

body {
  font-family: $font-stack;
  background: #f8fafc;
  color: #334155;
}

a {
  color: $primary-color;
  &:hover {
    color: darken($primary-color, 10%);
  }
}`}
        language="scss"
      />

      {/* Importar el SCSS */}
      <CodeBlock
        id="import-scss"
        heading="Import your SCSS"
        title="src/main.tsx"
        code={`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';`}
        language="tsx"
      />

      {/* CSS Modules con SCSS */}
      <CodeBlock
        id="scss-module"
        heading="Create a component-level SCSS module"
        title="src/components/Button.module.scss"
        code={`.button {
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
        heading="Use the SCSS module in your component"
        title="src/components/Button.tsx"
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

      {/* Variables y Mixins */}
      <CodeBlock
        id="define-variables-mixins"
        heading="Define variables & mixins"
        title="src/styles/_variables.scss"
        code={`$spacing-unit: 1rem;
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px
);

@mixin respond-to($breakpoint) {
  @media (min-width: map-get($breakpoints, $breakpoint)) {
    @content;
  }
}`}
        language="scss"
      />
      <CodeBlock
        id="consume-variables-mixins"
        heading="Consume variables & mixins"
        title="src/index.scss"
        code={`@import './styles/variables';

.container {
  margin: $spacing-unit;

  @include respond-to(md) {
    margin: $spacing-unit * 2;
  }
}`}
        language="scss"
      />

      {/* Opcional: PostCSS y Autoprefixer */}
      <CodeBlock
        id="postcss-autoprefixer"
        heading="Optional: Add PostCSS & Autoprefixer"
        title="vite.config.ts"
        code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
    </>
  );
};

export default SassGuide;
