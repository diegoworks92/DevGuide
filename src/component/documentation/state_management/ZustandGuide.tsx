import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";

const ZustandGuide = () => {
  return (
    <>
      <Title name="Zustand" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Documentación oficial de Zustand para comenzar rápidamente."
        title="URL"
        code={`https://docs.pmnd.rs/zustand/getting-started/introduction`}
        language="text"
      />

      <CodeBlock
        id="install-dependency"
        heading="Instalar dependencia"
        description="Instala Zustand con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install zustand"
        variants={[
          { label: "npm", code: "npm install zustand" },
          { label: "yarn", code: "yarn add zustand" },
          { label: "pnpm", code: "pnpm add zustand" },
          { label: "bun", code: "bun add zustand" },
        ]}
      />

      <CodeBlock
        id="create-the-store"
        heading="Crear el store"
        description="Crea un store básico con Zustand y una acción para modificar el estado."
        title="src/store/useStore.ts"
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

      <CodeBlock
        id="use-the-store-in-component"
        heading="Usar el store en un componente"
        description="Lee y actualiza el estado global desde un componente React."
        title="src/components/BearCounter.tsx"
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

      <CodeBlock
        id="persist-state"
        heading="Persistencia del estado (opcional)"
        description="Usa el middleware persist para guardar el estado en localStorage."
        title="src/store/useStore.ts"
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
      <NavPagination links={allDocsLinks} />
    </>
  );
};

export default ZustandGuide;
