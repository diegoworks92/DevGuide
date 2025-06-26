import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const Test = () => {
  return (
    <>
      <Title name="Unit Tests and Integration Tests" />

      {/* Página oficial */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://testing-library.com/docs/user-event/install`}
        language="text"
      />

      {/* Instalación de dependencias */}
      <CodeBlock
        id="install-dependencies"
        heading="Install dependencies"
        title="Terminal"
        code={`npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event`}
        language="bash"
      />

      {/* Script de test en package.json */}
      <CodeBlock
        id="add-test-script"
        heading="Add test script"
        title="package.json"
        code={`"scripts": {
  "test": "vitest"
}`}
        language="json"
      />

      {/* Configuración del entorno de Vitest */}
      <CodeBlock
        id="setup-vitest-environment"
        heading="Setup Vitest environment"
        title="vitest.setup.js"
        code={`import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});`}
      />

      {/* Tipado de TS para testing */}
      <CodeBlock
        id="extend-ts-types"
        heading="Extend TS types for testing"
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

      {/* Configuración de Vite con Vitest */}
      <CodeBlock
        id="configure-vite-with-vitest"
        heading="Configure Vite with Vitest"
        title="vite.config.ts"
        code={`import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
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

      {/* Test de integración del componente Counter con Redux */}
      <CodeBlock
        id="test-component-with-redux"
        heading="Test component with Redux"
        title="src/test/Counter.test.tsx"
        code={`import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "../features/counter/Counter";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userEvent from "@testing-library/user-event";

// Configuración del store antes de cada test
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
      />
    </>
  );
};

export default Test;
