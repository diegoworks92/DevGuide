import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ZustandGuide = () => {
  return (
    <>
      <Title name="Zustand" />

      {/* Página Oficial */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://docs.pmnd.rs/zustand/getting-started/introduction`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="install-dependency"
        heading="Install dependency"
        title="Terminal"
        code={`npm install zustand`}
        language="bash"
      />

      {/* Crear el store */}
      <CodeBlock
        id="create-the-store"
        heading="Create the store"
        title="store/useStore.ts"
        code={`import create from "zustand";

type BearState = {
  bears: number;
  increase: () => void;
};

export const useStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));`}
        language="ts"
      />

      {/* Usar el store en un componente */}
      <CodeBlock
        id="use-the-store-in-component"
        heading="Use the store in a component"
        title="components/BearCounter.tsx"
        code={`import React from "react";
import { useStore } from "../store/useStore";

export function BearCounter() {
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increase);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Bears: {bears}</h2>
      <button
        onClick={increase}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Bear
      </button>
    </div>
  );
}`}
        language="tsx"
      />

      {/* Persistencia (opcional) */}
      <CodeBlock
        id="persist-state"
        heading="Persist state"
        title="store/useStore.ts"
        code={`import create from "zustand";
import { persist } from "zustand/middleware";

type BearState = {
  bears: number;
  increase: () => void;
};

export const useStore = create<BearState>(
  persist(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    {
      name: "bear-storage",
    }
  )
);`}
        language="ts"
      />
    </>
  );
};

export default ZustandGuide;
