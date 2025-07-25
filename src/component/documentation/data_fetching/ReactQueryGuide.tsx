import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import Title from "../../ui/Title";

const ReactQueryGuide = () => {
  return (
    <>
      <Title name="React Query" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Documentación oficial de React Query (TanStack Query)."
        title="URL"
        code={`https://react-query.tanstack.com/`}
        language="text"
      />

      <CodeBlock
        id="install-dependencies"
        heading="Instalar dependencias"
        description="Instala @tanstack/react-query con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install @tanstack/react-query"
        variants={[
          { label: "npm", code: "npm install @tanstack/react-query" },
          { label: "yarn", code: "yarn add @tanstack/react-query" },
          { label: "pnpm", code: "pnpm add @tanstack/react-query" },
          { label: "bun", code: "bun add @tanstack/react-query" },
        ]}
      />

      <CodeBlock
        id="setup-queryclient"
        heading="Configurar QueryClient"
        description="Envuelve tu aplicación con QueryClientProvider para habilitar React Query."
        title="src/main.jsx"
        code={`import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);`}
        language="tsx"
      />

      <CodeBlock
        id="configure-cache-staleTime"
        heading="Configurar cache y staleTime"
        description="Personaliza el comportamiento de caché y reintentos en QueryClient."
        title="src/queryClient.ts"
        code={`import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,    // 5 minutos
      cacheTime: 1000 * 60 * 30,   // 30 minutos
      retry: 2,                    // reintenta 2 veces en fallo
    },
  },
});`}
        language="ts"
      />

      <CodeBlock
        id="basic-data-fetching"
        heading="Obtener datos con useQuery"
        description="Ejemplo básico de cómo usar useQuery para obtener datos."
        title="src/components/TodoList.tsx"
        code={`import { useQuery } from '@tanstack/react-query';

function fetchTodos() {
  return fetch('/api/todos').then(res => res.json());
}

export default function TodoList() {
  const { data, error, isLoading } = useQuery(['todos'], fetchTodos);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      {data.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="mutations"
        heading="Mutaciones con useMutation"
        description="Envía datos al servidor y actualiza la caché con invalidateQueries."
        title="src/components/AddTodo.tsx"
        code={`import { useMutation, useQueryClient } from '@tanstack/react-query';

function addTodo(newTitle: string) {
  return fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle }),
  }).then(res => res.json());
}

export default function AddTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const title = (e.target as any).title.value;
        mutation.mutate(title);
      }}
    >
      <input name="title" placeholder="New todo" />
      <button type="submit">Add</button>
    </form>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="invalidation-refetch"
        heading="Invalidación y refetch"
        description="Fuerza la actualización de una query específica desde cualquier parte del código."
        title="anywhere in your code"
        code={`import { useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();
queryClient.invalidateQueries(['todos']);`}
        language="ts"
      />

      <CodeBlock
        id="dynamic-query-keys"
        heading="Claves dinámicas"
        description="Usa claves dinámicas para queries dependientes de parámetros como userId."
        title="src/components/UserTodos.tsx"
        code={`import { useQuery } from '@tanstack/react-query';

export default function UserTodos({ userId }: { userId: number }) {
  const { data } = useQuery(['todos', userId], () =>
    fetch(\`/api/users/\${userId}/todos\`).then(res => res.json())
  );

  return (
    <ul>
      {data?.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="optional-devtools"
        heading="Opcional: Devtools"
        description="Agrega React Query Devtools para depurar queries y mutaciones."
        title="src/main.jsx"
        code={`import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import { queryClient } from './queryClient';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
);`}
        language="tsx"
      />
      <NavPagination />
    </>
  );
};

export default ReactQueryGuide;
