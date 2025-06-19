import CodeBlock from "./CodeBlock";

const Redux = () => {
  return (
    <>
      <h1>Redux Toolkit</h1>

      {/* Página Oficial */}
      <CodeBlock
        title="Official Page"
        code={`https://redux-toolkit.js.org/tutorials/quick-start`}
      />

      {/* Terminal */}
      <CodeBlock
        title="Terminal"
        code={`npm install react-redux
npm install @reduxjs/toolkit`}
      />
      {/* store.ts */}
      <CodeBlock
        title="store/store.ts"
        code={`import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch`}
      />
      {/* main.tsx */}
      <CodeBlock
        title="main.tsx"
        code={`import { Provider } from "react-redux";
import { store } from "./store/store.ts";

  <Provider store={store}>
    <App />
  </Provider>`}
      />
      {/* hooks.ts */}
      <CodeBlock
        title="store/hooks.ts"
        code={`import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();`}
      />
      {/* counterSlice.ts */}
      <CodeBlock
        title="features/counter/counterSlice.ts"
        code={`import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
`}
      />
      {/* Counter.tsx */}
      <CodeBlock
        title="features/counter/Counter.tsx"
        code={`import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

              return (
                <div>
                  <span className="count">{count}</span>
                  <div>
                    <button
                      aria-label="Increment value"
                      onClick={() => dispatch(increment())}
                    >
                      Increment
                    </button>
                    <button
                      aria-label="Decrement value"
                      onClick={() => dispatch(decrement())}
                    >
                      Decrement
                    </button>
                    <button 
                      aria-label="Reset counter" 
                      onClick={() => dispatch(reset())}
                    >
                      Reset
                    </button>
                    <button 
                      aria-label="Increase value by 2" 
                      onClick={() => dispatch(incrementByAmount(2))}
                    >
                      Increase +2
                    </button>
                  </div>
                </div>
              );
            }
`}
      />
    </>
  );
};

export default Redux;
