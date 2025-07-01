import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const AxiosGuide = () => {
  return (
    <>
      <Title name="Axios" />

      <CodeBlock
        id="jsonplaceholder-api"
        heading="API de ejemplo: JSON Placeholder"
        description="Usaremos la API pública de {JSON} Placeholder para obtener una lista de usuarios de ejemplo."
        title="URL"
        code={`https://jsonplaceholder.typicode.com`}
        language="text"
      />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Documentación oficial de Axios para realizar peticiones HTTP."
        title="axios-http.com"
        code={`https://axios-http.com/`}
        language="text"
      />

      <CodeBlock
        id="install-dependency"
        heading="Instalar dependencia"
        description="Instala Axios con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install axios"
        variants={[
          { label: "npm", code: "npm install axios" },
          { label: "yarn", code: "yarn add axios" },
          { label: "pnpm", code: "pnpm add axios" },
          { label: "bun", code: "bun add axios" },
        ]}
      />

      <CodeBlock
        id="basic-get-request"
        heading="Petición GET básica"
        description="Ejemplo simple de cómo hacer una petición GET con Axios."
        title="basicRequest.js"
        code={`import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });`}
        language="js"
      />

      <CodeBlock
        id="create-axios-instance"
        heading="Crear instancia de Axios"
        description="Crea una instancia personalizada de Axios con configuración base."
        title="src/utils/api.ts"
        code={`import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});`}
        language="ts"
      />

      <CodeBlock
        id="request-response-interceptors"
        heading="Agregar interceptores"
        description="Intercepta solicitudes y respuestas para agregar lógica personalizada."
        title="src/utils/api.ts"
        code={`// Request interceptor
api.interceptors.request.use(
  config => {
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
    if (error.response?.status === 401) {
      // redirigir a login, por ejemplo
    }
    return Promise.reject(error);
  }
);`}
        language="ts"
      />

      <CodeBlock
        id="async-await-in-react"
        heading="Pedir datos con async/await"
        description="Usa async/await dentro de useEffect para obtener datos con Axios."
        title="src/components/UserList.tsx"
        code={`import { useState, useEffect } from 'react';
import { api } from '../utils/api';

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await api.get<User[]>('/users');
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

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="custom-fetch-hook"
        heading="Hook personalizado"
        description="Crea un hook reutilizable para obtener datos desde un endpoint."
        title="src/hooks/useApi.ts"
        code={`import { useState, useEffect } from 'react';
import { api } from '../utils/api';

type User = {
  id: number;
  name: string;
};

export function useApi(endpoint: string) {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<User[]>(endpoint)
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, error, loading };
}`}
        language="ts"
      />

      <CodeBlock
        id="upload-multipart-form-data"
        heading="Subir archivo (multipart/form-data)"
        description="Ejemplo de cómo subir archivos usando FormData y Axios."
        title="src/utils/upload.ts"
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

      <CodeBlock
        id="cancel-request-with-canceltoken"
        heading="Cancelar petición con CancelToken"
        description="Cancela una petición activa usando CancelToken de Axios."
        title="src/utils/api.ts"
        code={`import axios from 'axios';

const source = axios.CancelToken.source();

api.get('/users', { cancelToken: source.token })
  .then(res => console.log(res.data))
  .catch(err => {
    if (axios.isCancel(err)) {
      console.log('Request canceled', err.message);
    } else {
      console.error(err);
    }
  });

// Para cancelar:
source.cancel('Operación cancelada por el usuario.');`}
        language="ts"
      />
    </>
  );
};

export default AxiosGuide;
