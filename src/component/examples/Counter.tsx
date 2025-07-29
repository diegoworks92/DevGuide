import { useReducer } from "react";

// Usado en UseReducerBasicGuide

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
      <style>{`
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

        @media (max-width: 640px) {
          .counter-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            margin-bottom: 1rem;
          }

          .counter button {
            margin-right: 0;
            flex: 1 1 auto;
          }

          .counter-value {
            text-align: center;
          }
        }
      `}</style>

      <div className="counter">
        <span className="counter-value">Contador actual: {state.count}</span>

        <div className="counter-buttons">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Aumentar
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Disminuir
          </button>
          <button
            onClick={() => dispatch({ type: "PERSONALIZED", payload: 3 })}
          >
            Aumentar +3
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>
            Restablecer
          </button>
        </div>
      </div>
    </>
  );
}
