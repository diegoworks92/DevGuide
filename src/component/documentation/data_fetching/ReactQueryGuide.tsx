import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReactQueryGuide = () => {
  return (
    <>
      <Title name="React Query" />

      {/* Official Page */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://react-query.tanstack.com/`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="install-dependencies"
        heading="Install dependencies"
        title="Terminal"
        code={`npm install @tanstack/react-query`}
        language="bash"
      />

      {/* Setup básico de QueryClient */}
      <CodeBlock
        id="setup-queryclient"
        heading="Setup QueryClient"
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

      {/* Configuración de caché y staleTime */}
      <CodeBlock
        id="configure-cache-staleTime"
        heading="Configure cache & staleTime"
        title="QueryClient options"
        code={`import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,    // 5 minutes
      cacheTime: 1000 * 60 * 30,   // 30 minutes
      retry: 2,                    // reintenta 2 veces en fallo
    },
  },
});`}
        language="ts"
      />

      {/* Búsqueda básica con useQuery */}
      <CodeBlock
        id="basic-data-fetching"
        heading="Basic Data Fetching"
        title="components/TodoList.tsx"
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

      {/* Mutaciones con useMutation */}
      <CodeBlock
        id="mutations"
        heading="Mutations"
        title="components/AddTodo.tsx"
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
      // Invalida y refetch de 'todos'
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

      {/* Invalidación & refetch */}
      <CodeBlock
        id="invalidation-refetch"
        heading="Invalidation & Refetch"
        title="anywhere in your code"
        code={`import { useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();
// Fuerza refetch de la query 'todos'
queryClient.invalidateQueries(['todos']);`}
        language="ts"
      />

      {/* Claves dinámicas */}
      <CodeBlock
        id="dynamic-query-keys"
        heading="Dynamic Query Keys"
        title="components/UserTodos.tsx"
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

      {/* Opcional: Devtools */}
      <CodeBlock
        id="optional-devtools"
        heading="Optional: Devtools"
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
    </>
  );
};

export default ReactQueryGuide;
