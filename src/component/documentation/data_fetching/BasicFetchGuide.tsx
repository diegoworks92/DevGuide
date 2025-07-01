import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const BasicFetchGuide = () => {
  return (
    <>
      <Title name="Fetch Básico" />

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
        description="Consulta la documentación oficial de la API Fetch en MDN."
        title="MDN Fetch API"
        code={`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`}
        language="text"
      />

      <CodeBlock
        id="simple-fetch-call"
        heading="Llamada fetch sencilla"
        description="Ejemplo básico de cómo hacer una petición fetch y manejar errores."
        title="basicFetch.js"
        code={`fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching:', error));`}
        language="js"
      />

      <CodeBlock
        id="fetch-in-react"
        heading="Fetch en React con useEffect"
        description="Realiza una petición fetch dentro de un componente React y muestra los usuarios."
        title="src/components/UserList.tsx"
        code={`import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
};

export default function UserList() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}
        language="tsx"
      />

      <CodeBlock
        id="use-in-app"
        heading="Usar el componente en App"
        description="Importa y renderiza el componente UserList en tu App principal."
        title="src/App.tsx"
        code={`import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <UserList />
    </div>
  );
}

export default App;`}
        language="tsx"
      />
    </>
  );
};

export default BasicFetchGuide;
