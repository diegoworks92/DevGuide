import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import OutputBlock from "../../ui/OutputBlock";
import RelatedContent from "../../ui/RelatedContent";
import Title from "../../ui/Title";

const BasicFetchGuide = () => {
  return (
    <>
      <Title name="Data Fetching" />

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
        title="basicFetch-example.js"
        language="js"
        exampleVariant={{
          label: "Promesas (then)",
          code: `fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching:', error))
        .finally(() => console.log('Fetch completed'));`,
        }}
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

const url = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
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
    <>
      <h1>Lista de usuarios</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;`}
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
      <UserList />
    </div>
  );
}

export default App;`}
        language="tsx"
      />

      <OutputBlock
        heading="Lista de usuarios"
        description="Este es el resultado que deberías ver en pantalla después de implementar el componente UserList correctamente con fetch."
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

      <CodeBlock
        id="userlist-async-version"
        heading="Alternativa con async/await"
        description="Una versión del componente UserList utilizando async/await en lugar de promesas encadenadas."
        title="src/components/UserList.tsx"
        language="tsx"
        alternativeVariant={{
          label: "Async/Await",
          code: `import { useState, useEffect } from "react";

      type User = {
        id: number;
        name: string;
      };

      const url = "https://jsonplaceholder.typicode.com/users";

      const UserList = () => {
        const [users, setUsers] = useState<User[]>([]);
        const [error, setError] = useState<Error | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          const fetchUsers = async () => {
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error("Network response was not ok");
              const data: User[] = await response.json();
              setUsers(data);
            } catch (err) {
              if (err instanceof Error) {
                setError(err);
              } else {
                setError(new Error("Unknown error"));
              }
            } finally {
              setLoading(false);
            }
          };

          fetchUsers();
        }, []);

        if (loading) return <p>Cargando usuarios...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <>
            <h1>Lista de usuarios</h1>
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </>
        );
      };

      export default UserList;`,
        }}
      />

      <CodeBlock
        id="userlist-reducer"
        heading="Alternativa con useReducer"
        description="Una versión del componente UserList que utiliza el hook useReducer para manejar el estado del fetch."
        title="src/components/UserListWithReducer.tsx"
        language="tsx"
        alternativeVariant={{
          label: "useReducer",
          code: `import { useEffect, useReducer } from "react";

      type User = {
        id: number;
        name: string;
      };

      type State = {
        users: User[];
        loading: boolean;
        error: string | null;
      };

      type Action =
        | { type: "FETCH_START" }
        | { type: "FETCH_SUCCESS"; payload: User[] }
        | { type: "FETCH_ERROR"; payload: string };

      const initialState: State = {
        users: [],
        loading: false,
        error: null,
      };

      const reducer = (state: State, action: Action): State => {
        switch (action.type) {
          case "FETCH_START":
            return { ...state, loading: true, error: null };
          case "FETCH_SUCCESS":
            return { ...state, users: action.payload, loading: false };
          case "FETCH_ERROR":
            return { ...state, error: action.payload, loading: false };
          default:
            return state;
        }
      };

      const url = "https://jsonplaceholder.typicode.com/users";

      const UserListWithReducer = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        useEffect(() => {
          const fetchUsers = async () => {
            dispatch({ type: "FETCH_START" });

            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error("Network error");

              const data: User[] = await response.json();
              dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (err) {
              dispatch({
                type: "FETCH_ERROR",
                payload: err instanceof Error ? err.message : "Unknown error",
              });
            }
          };

          fetchUsers();
        }, []);

        const { users, loading, error } = state;

        if (loading) return <p>Cargando...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
          <>
            <h1>Lista de usuarios</h1>
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </>
        );
      };

      export default UserListWithReducer;`,
        }}
      />

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
        ]}
      />

      <NavPagination />
    </>
  );
};

export default BasicFetchGuide;
