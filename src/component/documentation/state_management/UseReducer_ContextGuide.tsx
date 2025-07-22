import InfoText from "../../ui/InfoText";
import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const UseReducerContextGuide = () => (
  <>
    <Title name="useReducer con Context API" />

    <InfoText
      heading="¿Por qué combinar useReducer con Context?"
      description="Cuando la lógica de estado se vuelve más compleja, como ocurre con múltiples acciones, validaciones o condiciones, useReducer ofrece una forma más estructurada que useState. Al combinarlo con Context API, puedes compartir ese estado global sin necesidad de instalar Redux ni otras librerías externas."
    />

    <CodeBlock
      id="docs"
      heading="Documentación oficial"
      description="Referencia de useReducer en React."
      title="useReducer Hook"
      code={`https://react.dev/reference/react/useReducer`}
      language="text"
    />

    <CodeBlock
      id="reducer-context"
      heading="Definir State, Action y Reducer"
      description="Crea las definiciones de estado y el reducer."
      title="src/context/counterReducer.ts"
      language="ts"
      code={`export type State = { count: number };

export type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}`}
    />

    <CodeBlock
      id="context-provider"
      heading="Crear Context y Provider"
      description="Inicializa useReducer dentro del ContextProvider."
      title="src/context/CounterContext.tsx"
      language="tsx"
      code={`import { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import { reducer, State, Action } from './counterReducer';

const initialState: State = { count: 0 };

export const CounterStateContext = createContext<State | undefined>(undefined);
export const CounterDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};`}
    />

    <CodeBlock
      id="use-hooks"
      heading="Hooks de consumo"
      description="Crea hooks para acceder al estado y al dispatch."
      title="src/context/useCounter.ts"
      language="ts"
      code={`import { useContext } from 'react';
import { CounterStateContext, CounterDispatchContext } from './CounterContext';
import type { State, Action } from './counterReducer';

export function useCounterState() {
  const context = useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error('useCounterState debe usarse dentro de CounterProvider');
  }
  return context;
}

export function useCounterDispatch() {
  const context = useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error('useCounterDispatch debe usarse dentro de CounterProvider');
  }
  return context;
}`}
    />

    <CodeBlock
      id="counter-component"
      heading="Componente Counter"
      description="Consume los hooks para leer y actualizar el contador."
      title="src/components/Counter.tsx"
      language="tsx"
      code={`import React from 'react';
import { useCounterState, useCounterDispatch } from '../context/useCounter';

export default function Counter() {
  const { count } = useCounterState();
  const dispatch = useCounterDispatch();

  return (
    <div>
      <span>Contador: {count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}`}
    />

    <CodeBlock
      id="wrap-app"
      heading="Envolver la App"
      description="Aplica CounterProvider en el punto de entrada."
      title="src/main.tsx"
      language="tsx"
      code={`import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider } from './context/CounterContext';
import App from './App';

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);`}
    />
  </>
);

export default UseReducerContextGuide;
