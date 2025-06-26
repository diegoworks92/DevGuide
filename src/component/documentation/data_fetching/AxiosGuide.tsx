import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const AxiosGuide = () => {
  return (
    <>
      <Title name="Axios" />

      {/* Official Page */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://axios-http.com/`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="install-dependency"
        heading="Install dependency"
        title="Terminal"
        code={`npm install axios`}
        language="bash"
      />

      {/* Uso básico con Promises */}
      <CodeBlock
        id="basic-get-request"
        heading="Basic GET request"
        title="basicRequest.js"
        code={`import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });`}
        language="js"
      />

      {/* Crear instancia de Axios */}
      <CodeBlock
        id="create-axios-instance"
        heading="Create an Axios instance"
        title="utils/api.ts"
        code={`import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});`}
        language="ts"
      />

      {/* Interceptores */}
      <CodeBlock
        id="request-response-interceptors"
        heading="Add request & response interceptors"
        title="utils/api.ts"
        code={`// Request interceptor
api.interceptors.request.use(
  config => {
    // p.ej. agregar token
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = \`Bearer \${token}\`;
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    // manejar errores globales
    if (error.response?.status === 401) {
      // redirigir a login, por ejemplo
    }
    return Promise.reject(error);
  }
);`}
        language="ts"
      />

      {/* Async/Await en React */}
      <CodeBlock
        id="async-await-in-react"
        heading="Fetch data with async/await"
        title="components/FetchData.tsx"
        code={`import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

export default function FetchData() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await api.get('/data');
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}
        language="tsx"
      />

      {/* Hook personalizado */}
      <CodeBlock
        id="custom-fetch-hook"
        heading="Custom fetch hook"
        title="hooks/useApi.ts"
        code={`import { useState, useEffect } from 'react';
import { api } from '../utils/api';

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<T>(endpoint)
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
}`}
        language="ts"
      />

      {/* Carga de multipart/form-data */}
      <CodeBlock
        id="upload-multipart-form-data"
        heading="Upload file (multipart/form-data)"
        title="utils/upload.ts"
        code={`import { api } from './api';

export async function uploadFile(file: File) {
  const form = new FormData();
  form.append('file', file);

  const response = await api.post('/upload', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}`}
        language="ts"
      />

      {/* Manejo de cancelación */}
      <CodeBlock
        id="cancel-request-with-canceltoken"
        heading="Cancel request with CancelToken"
        title="utils/api.ts"
        code={`import axios from 'axios';

const source = axios.CancelToken.source();

api.get('/long-task', { cancelToken: source.token })
  .then(res => console.log(res.data))
  .catch(err => {
    if (axios.isCancel(err)) {
      console.log('Request canceled', err.message);
    } else {
      console.error(err);
    }
  });

// Para cancelar:
source.cancel('Operation canceled by the user.');`}
        language="ts"
      />
    </>
  );
};

export default AxiosGuide;
