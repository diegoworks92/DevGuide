import CodeBlock from "./CodeBlock";

const Test = () => {
  return (
    <>
      <h1>Unit Tests and Integration Tests</h1>

      {/* Página Oficial */}
      <CodeBlock
        title="Official Page"
        code={`https://testing-library.com/docs/user-event/install`}
      />

      {/* Terminal */}
      <CodeBlock
        title="Terminal"
        code={`npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event`}
      />

      {/* package.json */}
      <CodeBlock
        title="package.json"
        code={`"scripts": {
  "test": "vitest"
}`}
      />

      {/* vitest.setup.js */}
      <CodeBlock
        title="vitest.setup.js"
        code={`import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});`}
      />

      {/* tsconfig.json */}
      <CodeBlock
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
}
`}
      />

      {/* vite.config.ts */}
      <CodeBlock
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
});
`}
      />

      {/* Counter.test.tsx */}
      <CodeBlock
        title="src/test/Counter.test.tsx"
        code={`      import { describe, it, expect, beforeEach } from "vitest";
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

          await userEvent.click(incrementButton); // Contador en 1
          await userEvent.click(decrementButton); // Contador en 0
          expect(screen.getByText("0")).toBeInTheDocument();
        });

        it("Debe resetear el contador al hacer click en el botón Reset", async () => {
          const incrementButton = screen.getByRole("button", { name: /Increment/i });
          const resetButton = screen.getByRole("button", { name: /Reset counter/i });

          await userEvent.click(incrementButton); // Contador en 1
          await userEvent.click(resetButton); // Contador en 0
          expect(screen.getByText("0")).toBeInTheDocument();
        });

        it("Debe incrementar el contador en +2 al hacer click en el botón Increase +2", async () => {
          const increaseButton = screen.getByRole("button", {
            name: /Increase value by 2/i,
          });

          await userEvent.click(increaseButton);
          expect(screen.getByText("2")).toBeInTheDocument();
        });
      });`}
      />
    </>
  );
};

export default Test;
