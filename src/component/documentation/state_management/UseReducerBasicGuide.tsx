import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const UseReducerBasicGuide = () => {
  return (
    <>
      <Title name="useReducer Básico" />

      <CodeBlock
        id="docs"
        heading="Documentación oficial"
        description="Consulta la referencia oficial del hook useReducer en React."
        title="useReducer Hook"
        code={`https://react.dev/reference/react/useReducer`}
        language="text"
      />

      <CodeBlock
        id="basic-counter"
        heading="Ejemplo: contador básico"
        description="Implementa un contador sencillo usando useReducer."
        title="src/components/Counter.tsx"
        language="tsx"
        code={`import React, { useReducer } from 'react';

type State = { count: number };
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'PERSONALIZED'; payload: number };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    case 'PERSONALIZED':
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
        }
        .counter span {
          margin-right: 1rem;
          font-weight: bold;
        }
        .counter button {
          margin-right: 0.5rem;
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          cursor: pointer;
        }
      \`}</style>

      <div className="counter">
        <span>Contador: {state.count}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'PERSONALIZED', payload: 3 })}>
          +3
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
        code={`import React from 'react';
import Counter from './components/Counter';

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
    </>
  );
};

export default UseReducerBasicGuide;
