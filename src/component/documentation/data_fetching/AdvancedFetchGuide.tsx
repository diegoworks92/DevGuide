import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const AdvancedFetchGuide = () => {
  return (
    <>
      <Title name="Advanced Fetch" />

      {/* Documentación oficial */}
      <CodeBlock
        id="official-docs"
        heading="Official Docs"
        title="Fetch & AbortController"
        code={`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/API/AbortController`}
        language="text"
      />

      {/* Hook fetch cancelable */}
      <CodeBlock
        id="cancelable-fetch-hook"
        heading="Cancelable fetch hook"
        title="hooks/useFetchWithCancel.ts"
        code={`import { useState, useEffect } from 'react';

export function useFetchWithCancel<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json() as Promise<T>;
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

      {/* Wrapper de API */}
      <CodeBlock
        id="custom-api-wrapper"
        heading="Custom API wrapper"
        title="utils/api.ts"
        code={`const API_URL = 'https://api.example.com';

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

      {/* Hook usando el wrapper */}
      <CodeBlock
        id="hook-using-wrapper"
        heading="Hook using the wrapper"
        title="hooks/useApi.ts"
        code={`import { useState, useEffect } from 'react';
import { apiFetch } from '../utils/api';

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<T>(endpoint)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
}`}
        language="ts"
      />

      {/* Ejemplo de lógica de reintento */}
      <CodeBlock
        id="retry-logic-example"
        heading="Retry logic example"
        title="utils/retryFetch.ts"
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
