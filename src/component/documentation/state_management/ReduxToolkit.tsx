import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";

const ReduxToolkit = () => {
  return (
    <>
      <Title name="Redux Toolkit" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Enlace a la documentación oficial y tutorial rápido de Redux Toolkit."
        title="URL"
        code={`https://redux-toolkit.js.org/tutorials/quick-start`}
        language="text"
      />

      <CodeBlock
        id="install-dependencies"
        heading="Instalar dependencias"
        description="Instala react-redux y @reduxjs/toolkit con tu gestor de paquetes favorito."
        title="Terminal"
        code="npm install react-redux @reduxjs/toolkit"
        language="bash"
        variants={[
          {
            label: "npm",
            code: "npm install react-redux @reduxjs/toolkit",
          },
          {
            label: "yarn",
            code: "yarn add react-redux @reduxjs/toolkit",
          },
          {
            label: "pnpm",
            code: "pnpm add react-redux @reduxjs/toolkit",
          },
          {
            label: "bun",
            code: "bun add react-redux @reduxjs/toolkit",
          },
        ]}
      />

      <CodeBlock
        id="configure-the-store"
        heading="Configurar el store"
        description="Define el store principal y tipos inferidos para RootState y AppDispatch."
        title="src/store/store.ts"
        code={`import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
        language="ts"
      />

      <CodeBlock
        id="wrap-app-with-provider"
        heading="Proveer el store"
        description="Envuelve tu App con el Provider de React-Redux."
        title="src/main.tsx"
        code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
        language="tsx"
      />

      <CodeBlock
        id="create-typed-hooks"
        heading="Hooks tipados"
        description="Crea hooks personalizados con los tipos de tu store."
        title="src/store/hooks.ts"
        code={`import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);`}
        language="ts"
      />

      <CodeBlock
        id="create-the-slice"
        heading="Crear el slice"
        description="Define un slice con estado inicial, reducers y acciones."
        title="src/features/counter/counterSlice.ts"
        code={`import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value = Math.max(0, state.value - 1) },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => { state.value = 0 },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;`}
        language="ts"
      />

      <CodeBlock
        id="implement-the-counter"
        heading="Implementar Counter"
        description="Componente para leer el estado y despachar acciones del slice."
        title="src/features/counter/Counter.tsx"
        code={`import React from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from './counterSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span className="count">{count}</span>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increase +2
        </button>
      </div>
    </div>
  );
}`}
        language="tsx"
      />

      <NavPagination links={allDocsLinks} />
    </>
  );
};

export default ReduxToolkit;
