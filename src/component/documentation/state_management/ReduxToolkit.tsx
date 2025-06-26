import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReduxToolkit = () => {
  return (
    <>
      <Title name="Redux Toolkit" />

      {/* Página Oficial */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://redux-toolkit.js.org/tutorials/quick-start`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="install-dependencies"
        heading="Install dependencies"
        title="Terminal"
        code={`npm install react-redux
npm install @reduxjs/toolkit`}
        language="bash"
      />

      {/* Configurar el store */}
      <CodeBlock
        id="configure-the-store"
        heading="Configure the store"
        title="store/store.ts"
        code={`import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
      />

      {/* Proveer el store */}
      <CodeBlock
        id="wrap-app-with-provider"
        heading="Wrap App with Provider"
        title="main.tsx"
        code={`import { Provider } from 'react-redux';
import { store } from './store/store.ts';

<Provider store={store}>
  <App />
</Provider>`}
      />

      {/* Hooks tipados */}
      <CodeBlock
        id="create-typed-hooks"
        heading="Create typed hooks"
        title="store/hooks.ts"
        code={`import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);`}
      />

      {/* Crear el slice */}
      <CodeBlock
        id="create-the-slice"
        heading="Create the slice"
        title="features/counter/counterSlice.ts"
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
      />

      {/* Componente Counter */}
      <CodeBlock
        id="implement-the-counter"
        heading="Implement the Counter"
        title="features/counter/Counter.tsx"
        code={`import {
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
      />
    </>
  );
};

export default ReduxToolkit;
