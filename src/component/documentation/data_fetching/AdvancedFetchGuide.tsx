import Title from "../../ui/Title";
import InfoText from "../../ui/InfoText";
import CodeBlock from "../../ui/CodeBlock";
import OutputBlock from "../../ui/OutputBlock";
import RelatedContent from "../../ui/RelatedContent";
import NavPagination from "../../ui/NavPagination";

const AdvancedFetchGuide = () => {
  return (
    <>
      <Title name="Fetch avanzado con cancelación y reintentos" />

      <RelatedContent
        links={[
          {
            label: "Documentación: Advanced Fetch",
            href: "/docs/advanced-fetch",
            type: "doc",
          },
          {
            label: "Guía sobre API Methods",
            href: "/guide/api-methods",
            type: "guide",
          },
          { label: "Test sobre Hooks", href: "/docs/test", type: "test" },
          {
            label: "React Query Docs",
            href: "https://tanstack.com/query/v4",
            external: true,
          },
        ]}
      />

      <InfoText
        heading="¿Qué implementa esta guía?"
        description={`Este flujo maneja peticiones HTTP con cancelación automática y reintentos progresivos usando backoff exponencial.\n\nSe organiza en un hook reutilizable, un componente visual y la entrada principal de la app.`}
      />

      <CodeBlock
        id="api-url"
        heading="API pública de prueba"
        description="Usamos JSONPlaceholder como fuente de datos ficticios."
        title="URL de usuarios"
        language="text"
        code={`https://jsonplaceholder.typicode.com/users`}
      />

      <CodeBlock
        id="fetch-hook"
        heading="Hook avanzado con reintento y cancelación"
        description="Hook reutilizable que incluye lógica de reintento automático y cancelación con AbortController."
        title="src/hooks/useFetchWithCancel.ts"
        language="ts"
        code={`import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
};

function retryFetch(
  url: string,
  options: RequestInit = {},
  retries = 3,
  backoff = 500,
  signal?: AbortSignal
): Promise<Response> {
  return new Promise((resolve, reject) => {
    const attempt = (n: number, delay: number) => {
      fetch(url, { ...options, signal })
        .then(res => resolve(res))
        .catch(err => {
          if (signal?.aborted) return reject(err);
          if (n > 0) {
            setTimeout(() => attempt(n - 1, delay * 2), delay);
          } else {
            reject(err);
          }
        });
    };
    attempt(retries, backoff);
  });
}

export function useFetchWithCancel(url: string) {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    retryFetch(url, {}, 3, 500, controller.signal)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json() as Promise<User[]>;
      })
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}`}
      />

      <CodeBlock
        id="userlist"
        heading="Componente visual con el hook"
        description="Muestra los datos obtenidos desde la API usando el hook avanzado."
        title="src/components/UserList.tsx"
        language="tsx"
        code={`import React from 'react';
import { useFetchWithCancel } from '../hooks/useFetchWithCancel';

export default function UserList() {
  const { data, error, loading } = useFetchWithCancel('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}`}
      />

      <CodeBlock
        id="app-entry"
        heading="Punto de entrada de la app"
        description="Renderiza el componente principal con los datos desde la API."
        title="src/App.tsx"
        language="tsx"
        code={`import React from 'react';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;`}
      />

      <OutputBlock
        heading="Lista de usuarios"
        description="Este es el resultado esperado al usar el hook avanzado para fetch con cancelación y reintento automático."
      >
        <h1 className="text-xl">Lista de usuarios</h1>
        <ul className="list-disc list-inside">
          <li>Leanne Graham</li>
          <li>Ervin Howell</li>
          <li>Clementine Bauch</li>
          <li>Patricia Lebsack</li>
          <li>Chelsey Dietrich</li>
          <li>Mrs. Dennis Schulist</li>
          <li>Kurtis Weissnat</li>
          <li>Nicholas Runolfsdottir V</li>
          <li>Glenna Reichert</li>
          <li>Clementina DuBuque</li>
        </ul>
      </OutputBlock>

      <InfoText
        heading="Resumen técnico"
        description={`Esta guía protege contra errores por desmontes de componentes.\n\nMejora la experiencia en conexiones inestables gracias al reintento automático, y mantiene el código modular y limpio.`}
      />

      <NavPagination />
    </>
  );
};

export default AdvancedFetchGuide;

/* import Title from "../../ui/Title";
import InfoText from "../../ui/InfoText";
import CodeBlock from "../../ui/CodeBlock";

const AdvancedFetchGuide = () => {
  return (
    <>
      <Title name="Fetch avanzado con cancelación y reintentos" />

      <InfoText
        heading="¿Qué implementa esta guía?"
        description="Este flujo maneja peticiones HTTP con cancelación automática y reintentos progresivos usando backoff exponencial. Se organiza en un hook reutilizable, un componente visual y la entrada principal de la app."
      />

      <CodeBlock
        id="api-url"
        heading="API pública de prueba"
        description="Usamos JSONPlaceholder como fuente de datos ficticios."
        title="URL de usuarios"
        language="text"
        code={`https://jsonplaceholder.typicode.com/users`}
      />

      <CodeBlock
        id="fetch-hook"
        heading="Hook avanzado con reintento y cancelación"
        description="Hook reutilizable que incluye lógica de reintento automático y cancelación con AbortController."
        title="src/hooks/useFetchWithCancel.ts"
        language="ts"
        code={`import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
};

function retryFetch(
  url: string,
  options: RequestInit = {},
  retries = 3,
  backoff = 500,
  signal?: AbortSignal
): Promise<Response> {
  return new Promise((resolve, reject) => {
    const attempt = (n: number, delay: number) => {
      fetch(url, { ...options, signal })
        .then(res => resolve(res))
        .catch(err => {
          if (signal?.aborted) return reject(err);
          if (n > 0) {
            setTimeout(() => attempt(n - 1, delay * 2), delay);
          } else {
            reject(err);
          }
        });
    };
    attempt(retries, backoff);
  });
}

export function useFetchWithCancel(url: string) {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    retryFetch(url, {}, 3, 500, controller.signal)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json() as Promise<User[]>;
      })
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}`}
      />

      <CodeBlock
        id="userlist"
        heading="Componente visual con el hook"
        description="Muestra los datos obtenidos desde la API usando el hook avanzado."
        title="src/components/UserList.tsx"
        language="tsx"
        code={`import React from 'react';
import { useFetchWithCancel } from '../hooks/useFetchWithCancel';

export default function UserList() {
  const { data, error, loading } = useFetchWithCancel('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}`}
      />

      <CodeBlock
        id="app-entry"
        heading="Punto de entrada de la app"
        description="Renderiza el componente principal con los datos desde la API."
        title="src/App.tsx"
        language="tsx"
        code={`import React from 'react';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default App;`}
      />

      <InfoText
        heading="Resumen técnico"
        description="Esta guía protege contra errores por desmontes de componentes, mejora la experiencia en conexiones inestables gracias al reintento automático, y mantiene el código modular y limpio."
      />
    </>
  );
};

export default AdvancedFetchGuide;
 */
