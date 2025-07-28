import Title from "../../ui/Title";
import InfoText from "../../ui/InfoText";
import CodeBlock from "../../ui/CodeBlock";
import OutputBlock from "../../ui/OutputBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Counter from "../../examples/Counter";
import RelatedContent from "../../ui/RelatedContent";

const UseReducerBasicGuide = () => {
  return (
    <>
      <Title name="useReducer: Contador Básico" />

      <InfoText
        heading="¿Qué es useReducer?"
        description={`El hook \`useReducer\` permite manejar estado complejo con múltiples acciones.\n\nEs ideal cuando el uso de \`useState\` se vuelve difícil de mantener o escalar.\n\nEste patrón es muy útil para aplicaciones con lógica de flujo bien definida, como formularios dinámicos o componentes que reaccionan a múltiples eventos.`}
      />

      <CodeBlock
        id="docs"
        heading="Documentación oficial"
        description="Consulta la referencia oficial del hook useReducer en React."
        title="useReducer Hook"
        language="text"
        code={`https://react.dev/reference/react/useReducer`}
      />

      <CodeBlock
        id="basic-counter"
        heading="Ejemplo: contador básico"
        description="Implementa un contador sencillo usando useReducer."
        title="src/examples/Counter.tsx"
        language="tsx"
        code={`import React, { useReducer } from "react";

type State = { count: number };
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "PERSONALIZED"; payload: number };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    case "PERSONALIZED":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <style>{\`
       .counter {
        padding: 1rem;
        font-family: sans-serif;
        color: white;
      }
      .counter-value {
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 1rem;
        display: block;
      }
      .counter button {
        margin-right: 0.5rem;
        padding: 0.4rem 0.8rem;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 0.25rem;
        border: none;
        background-color: #333;
        color: white;
        transition: background-color 0.2s ease;
      }
      .counter button:hover {
        background-color: #555;
      }
      \`}</style>

      <div className="counter">
        <span className="counter-value">Contador actual: {state.count}</span>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Aumentar
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Disminuir
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          Restablecer
        </button>
        <button onClick={() => dispatch({ type: "PERSONALIZED", payload: 3 })}>
          Aumentar +3
        </button>
      </div>
    </>
  );
}`}
      />

      <CodeBlock
        id="use-in-app"
        heading="Usar en App"
        description="Integra el componente Counter en la aplicación principal."
        title="src/App.tsx"
        language="tsx"
        code={`import React from "react";
import Counter from "./examples/Counter";
          
function App() {
  return (
    <main>
      <h1>Ejemplo con useReducer</h1>
      <Counter />
    </main>
  );
}
    
export default App;
`}
      />
      <OutputBlock
        heading="Contador"
        description="Componente funcional con lógica aplicada usando useReducer:"
      >
        <Counter />
      </OutputBlock>

      <RelatedContent
        links={[
          {
            label: "Documentación: useReducer: TodoList",
            href: "/docs/use-reducer-todolist",
            type: "doc",
          },
          {
            label: "Guía: TodoList con useReducer",
            href: "/guide/todoapp",
            type: "guide",
          },
        ]}
      />

      <NavPagination links={allDocsLinks} />
    </>
  );
};

export default UseReducerBasicGuide;
