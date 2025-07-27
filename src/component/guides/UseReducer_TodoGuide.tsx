import TodoApp from "../examples/TodoApp";
import { allGuideLinks } from "../sidebar/guideSidebarLinks";
import CodeBlock from "../ui/CodeBlock";
import InfoText from "../ui/InfoText";
import NavPagination from "../ui/NavPagination";
import OutputBlock from "../ui/OutputBlock";
import RelatedContent from "../ui/RelatedContent";

import Title from "../ui/Title";

const TodoAppGuide = () => {
  return (
    <>
      {/* 1. Título de la guía */}
      <Title name="Guía: TodoList con useReducer" />

      {/* 2. Introducción */}
      <InfoText
        heading="Introducción"
        description={`En esta guía construimos paso a paso un gestor de tareas (TodoApp) en React usando el hook useReducer.  
Aprenderás a:
1. Tipar tu estado y acciones.
2. Inicializar el estado perezosamente.
3. Persistir en localStorage.
4. Manejar acciones discriminadas (ADD, TOGGLE, REMOVE, CLEAR_COMPLETED).
5. Añadir estilos y mejoras UX.`}
      />

      {/* 3. Referencia oficial */}
      <CodeBlock
        id="docs"
        heading="Referencia oficial de useReducer"
        description="Consulta la documentación oficial de React para el hook useReducer."
        title="useReducer Hook"
        language="text"
        code={`https://react.dev/reference/react/useReducer`}
      />

      {/* 4. Definición de tipos */}
      <InfoText
        heading="1. Tipos y acciones"
        description="Definimos Task para representar cada tarea y Action para las posibles operaciones."
      />
      <CodeBlock
        id="types"
        heading="Tipos en TypeScript"
        description="Interfaz Task y unión de Action types."
        title="src/components/TodoApp.tsx (Tipos)"
        language="typescript"
        code={`// Cada tarea tiene id, texto y estado done
type Task = {
  id: number;
  text: string;
  done: boolean;
};

// Acciones permitidas en el reducer
type Action =
  | { type: "ADD";         payload: string }
  | { type: "TOGGLE";      payload: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "REMOVE";      payload: number };`}
      />

      {/* 5. Lazy initialization */}
      <InfoText
        heading="2. Inicialización perezosa"
        description="La función init carga las tareas desde localStorage o usa una predeterminada."
      />
      <CodeBlock
        id="init"
        heading="Función init()"
        description="Carga el estado inicial solo una vez al montar."
        title="src/components/TodoApp.tsx (init)"
        language="typescript"
        code={`function init(): Task[] {
  const stored = localStorage.getItem("tasks");
  const defaultTasks: Task[] = [
    { id: 0, text: "Comprar tomates 🍅", done: false }
  ];
  return stored ? JSON.parse(stored) : defaultTasks;
}`}
      />

      {/* 6. Reducer */}
      <InfoText
        heading="3. Implementación del reducer"
        description="El reducer actualiza el array de tareas en función de la acción recibida."
      />
      <CodeBlock
        id="reducer"
        heading="Función reducer()"
        description="Manejo de ADD, TOGGLE, CLEAR_COMPLETED y REMOVE."
        title="src/components/TodoApp.tsx (reducer)"
        language="typescript"
        code={`function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      // Añade una nueva tarea con id único
      return [
        ...state,
        { id: Date.now(), text: action.payload, done: false }
      ];

    case "TOGGLE":
      // Invierte el estado done de la tarea seleccionada
      return state.map(t =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );

    case "CLEAR_COMPLETED":
      // Elimina todas las tareas marcadas como done
      return state.filter(t => !t.done);

    case "REMOVE":
      // Elimina la tarea cuyo id coincide
      return state.filter(t => t.id !== action.payload);

    default:
      return state;
  }
}`}
      />

      {/* 7. Componente y sincronización */}
      <InfoText
        heading="4. useReducer + useEffect"
        description="Inicializamos useReducer con init y sincronizamos el estado con localStorage."
      />
      <CodeBlock
        id="component-init"
        heading="Setup del componente"
        description="useReducer con lazy init y efecto para persistir."
        title="src/components/TodoApp.tsx (Hook init & useEffect)"
        language="typescript"
        code={`export default function TodoApp() {
  // Estado de tareas y dispatch
  const [tasks, dispatch] = useReducer(reducer, [], init);

  // Guarda en localStorage cada vez que tasks cambie
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);`}
      />

      {/* 8. handleAdd */}
      <InfoText
        heading="5. Agregar tareas"
        description="Manejamos el submit del formulario para despachar la acción ADD."
      />
      <CodeBlock
        id="handle-add"
        heading="handleAdd"
        description="Previene reload, extrae texto, despacha y limpia el formulario."
        title="src/components/TodoApp.tsx (handleAdd)"
        language="typescript"
        code={`const handleAdd = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const input = e.currentTarget.elements.namedItem("task") as HTMLInputElement;
  const text = input.value.trim();

  if (text) {
    dispatch({ type: "ADD", payload: text });
  }

  // Resetea el formulario
  e.currentTarget.reset();
};`}
      />

      {/* 9. JSX y estilos */}
      <InfoText
        heading="6. Estructura JSX y estilos"
        description="Renderizamos el formulario, la lista de tareas y los controles con CSS inyectado."
      />
      <CodeBlock
        id="jsx"
        heading="JSX del componente"
        description="Incluye etiqueta <style> para estilos personalizados."
        title="src/components/TodoApp.tsx (JSX completo)"
        language="tsx"
        code={`return (
  <>
    <style>{\`
      .todo-app {
        max-width: 500px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: sans-serif;
        background-color: #1e1e1e;
        color: #f1f1f1;
        border: 1px solid #333;
        border-radius: 8px;
      }
      .todo-form { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
      .todo-input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid #555;
        border-radius: 4px;
        background-color: #2c2c2c;
        color: #f1f1f1;
      }
      .todo-button, .clear-button {
        padding: 0.5rem 1rem;
        background-color: #4ec9b0;
        color: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .todo-button:hover, .clear-button:hover {
        background-color: #6eead2;
      }
      .todo-list { list-style: none; padding: 0; margin: 0; }
      .todo-item {
        padding: 0.5rem;
        border: 1px solid #444;
        border-radius: 4px;
        margin-bottom: 0.5rem;
        background-color: #2a2a2a;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .todo-text { display: inline-block; }
      .todo-text.done { text-decoration: line-through; color: #888; }
      .todo-buttons { display: flex; gap: 0.5rem; }
      .action-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }
    \`}</style>

    <div className="todo-app">
      <form onSubmit={handleAdd} className="todo-form">
        <input name="task" className="todo-input" placeholder="Nueva tarea" />
        <button type="submit" className="todo-button">
          Agregar
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map((t) => (
          <li key={t.id} className="todo-item">
            <span className={\`todo-text \${t.done ? "done" : ""}\`}>
              {t.text}
            </span>
            <div className="todo-buttons">
              <button
                onClick={() => dispatch({ type: "TOGGLE", payload: t.id })}
                className="action-button"
              >
                {t.done ? "🔄" : "✅"}
              </button>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: t.id })}
                className="action-button"
                style={{ color: "#ff6b6b" }}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        className="clear-button"
      >
        Limpiar completadas
      </button>
    </div>
  </>
);`}
      />

      {/* 10. Integración en App */}
      <InfoText
        heading="7. Usar en la aplicación principal"
        description="Importa y renderiza TodoApp dentro de tu App.tsx."
      />
      <CodeBlock
        id="use-in-app"
        heading="src/App.tsx"
        description="Integración final en la aplicación."
        title="App.tsx"
        language="tsx"
        code={`import React from "react";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <main>
      <h1>Mi lista de tareas</h1>
      <TodoApp />
    </main>
  );
}

export default App;`}
      />

      {/* 11. Vista funcional */}
      <OutputBlock
        heading="Vista funcional"
        description="Interactúa con tu TodoApp con estado avanzado y persistencia."
      >
        <TodoApp />
      </OutputBlock>

      {/* 12. Contenido relacionado */}
      <RelatedContent
        links={[
          {
            label: "Documentación: useReducer: Contador Básico",
            href: "/docs/use-reducer-basic",
            type: "doc",
          },
          {
            label: "Documentación: useReducer: TodoList",
            href: "/docs/use-reducer-todolist",
            type: "doc",
          },
        ]}
      />

      {/* 13. Navegación */}
      <NavPagination links={allGuideLinks} />
    </>
  );
};

export default TodoAppGuide;
