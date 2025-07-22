import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const AdvancedFetchGuide = () => {
  return (
    <>
      <Title name="Fetch Avanzado" />

      <CodeBlock
        id="jsonplaceholder-api"
        heading="API de ejemplo: JSON Placeholder"
        description="Usaremos la API pública de {JSON} Placeholder para obtener una lista de usuarios de ejemplo."
        title="URL"
        code={`https://jsonplaceholder.typicode.com`}
        language="text"
      />

      <CodeBlock
        id="official-docs"
        heading="Documentación oficial"
        description="Consulta la documentación de Fetch API y AbortController en MDN."
        title="Fetch & AbortController"
        code={`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/API/AbortController`}
        language="text"
      />

      <CodeBlock
        id="cancelable-fetch-hook"
        heading="Hook con cancelación"
        description="Crea un hook personalizado que cancela la petición fetch si el componente se desmonta."
        title="src/hooks/useFetchWithCancel.ts"
        code={`import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
};

export function useFetchWithCancel(url: string) {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
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
        language="ts"
      />

      <CodeBlock
        id="custom-api-wrapper"
        heading="Wrapper de API"
        description="Crea una función reutilizable para manejar peticiones y errores de forma centralizada."
        title="src/utils/api.ts"
        code={`const API_URL = 'https://jsonplaceholder.typicode.com';

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(\`\${API_URL}\${endpoint}\`, options);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'API error');
  }
  return res.json();
}`}
        language="ts"
      />

      <CodeBlock
        id="hook-using-wrapper"
        heading="Hook usando el wrapper"
        description="Hook que utiliza el wrapper de API para obtener datos desde un endpoint."
        title="src/hooks/useApi.ts"
        code={`import { useState, useEffect } from 'react';
import { apiFetch } from '../utils/api';

type User = {
  id: number;
  name: string;
};

export function useApi(endpoint: string) {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<User[]>(endpoint)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
}`}
        language="ts"
      />

      <CodeBlock
        id="retry-logic-example"
        heading="Ejemplo de lógica de reintento"
        description="Implementa una función fetch con reintentos automáticos y backoff exponencial."
        title="src/utils/retryFetch.ts"
        code={`export async function retryFetch(
  url: string,
  options: RequestInit = {},
  retries = 3,
  backoff = 500
): Promise<Response> {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (retries > 0) {
      await new Promise(res => setTimeout(res, backoff));
      return retryFetch(url, options, retries - 1, backoff * 2);
    }
    throw err;
  }
}`}
        language="ts"
      />
    </>
  );
};

export default AdvancedFetchGuide;
