import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const Test = () => {
  return (
    <>
      <Title name="Unit Tests and Integration Tests" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Documentación oficial de Testing Library para pruebas con user-event."
        title="URL"
        code={`https://testing-library.com/docs/user-event/install`}
        language="text"
      />

      <CodeBlock
        id="install-dependencies"
        heading="Instalar dependencias"
        description="Instala Vitest y Testing Library con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event"
        variants={[
          {
            label: "npm",
            code: "npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event",
          },
          {
            label: "yarn",
            code: "yarn add -D vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event",
          },
          {
            label: "pnpm",
            code: "pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event",
          },
          {
            label: "bun",
            code: "bun add -d vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event",
          },
        ]}
      />

      <CodeBlock
        id="add-test-script"
        heading="Agregar script de test"
        description="Añade el comando para ejecutar pruebas con Vitest en tu package.json."
        title="package.json"
        code={`"scripts": {
  "test": "vitest"
}`}
        language="json"
      />

      <CodeBlock
        id="setup-vitest-environment"
        heading="Configurar entorno de Vitest"
        description="Prepara el entorno de pruebas con jest-dom y cleanup automático."
        title="vitest.setup.js"
        code={`import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});`}
        language="ts"
      />

      <CodeBlock
        id="extend-ts-types"
        heading="Extender tipos de TypeScript"
        description="Incluye los tipos de jest-dom en tu configuración de TypeScript."
        title="tsconfig.json"
        code={`{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "types": ["@testing-library/jest-dom"]
  }
}`}
        language="json"
      />

      <CodeBlock
        id="configure-vite-with-vitest"
        heading="Configurar Vite con Vitest"
        description="Activa el entorno jsdom y define el archivo de setup para pruebas."
        title="vite.config.ts"
        code={`import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
  },
});`}
        language="ts"
      />

      <CodeBlock
        id="test-component-with-redux"
        heading="Probar componente con Redux"
        description="Ejemplo de test de integración para un componente conectado a Redux."
        title="src/test/Counter.test.tsx"
        code={`import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "../features/counter/Counter";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userEvent from "@testing-library/user-event";

let store;
const renderCounter = () => {
  store = configureStore({ reducer: { counter: counterReducer } });
  return render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

describe("<Counter />", () => {
  beforeEach(() => {
    renderCounter();
  });

  it("Debe mostrar el contador inicial en 0", () => {
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Debe incrementar el contador al hacer click en el botón Increment", async () => {
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    await userEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("Debe decrementar el contador al hacer click en el botón Decrement", async () => {
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Debe resetear el contador al hacer click en el botón Reset", async () => {
    const incrementButton = screen.getByRole("button", { name: /Increment/i });
    const resetButton = screen.getByRole("button", { name: /Reset counter/i });

    await userEvent.click(incrementButton);
    await userEvent.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Debe incrementar el contador en +2 al hacer click en el botón Increase +2", async () => {
    const increaseButton = screen.getByRole("button", {
      name: /Increase value by 2/i,
    });

    await userEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
}`}
        language="tsx"
      />
    </>
  );
};

export default Test;
