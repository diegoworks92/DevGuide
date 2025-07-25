import React, { useReducer, useEffect } from "react";
import type { FormEvent } from "react";

type Task = { id: number; text: string; done: boolean };
type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "REMOVE"; payload: number };

function init(): Task[] {
  const stored = localStorage.getItem("tasks");
  const defaultTasks = [{ id: 0, text: "Comprar tomates 🍅", done: false }];
  return stored ? JSON.parse(stored) : defaultTasks;
}

function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.done);
    case "REMOVE":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [tasks, dispatch] = useReducer(reducer, [], init);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "task"
    ) as HTMLInputElement;
    const text = input.value.trim();
    if (text) dispatch({ type: "ADD", payload: text });
    e.currentTarget.reset();
  };

  return (
    <>
      <style>{`
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
        .todo-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .todo-input {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #555;
          border-radius: 4px;
          background-color: #2c2c2c;
          color: #f1f1f1;
        }
        .todo-button {
          padding: 0.5rem 1rem;
          background-color: #4ec9b0;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .todo-button:hover {
          background-color: #6eead2;
        }
        .todo-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
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
        .todo-buttons {
          display: flex;
          gap: 0.5rem;
        }
        .todo-text {
          display: inline-block;
        }
        .todo-text.done {
          text-decoration: line-through;
          color: #888;
        }
        .action-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }
    .clear-button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background-color: #4ec9b0;
      color: black;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .clear-button:hover {
      background-color: #6eead2; 
    }
      `}</style>

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
              <span className={`todo-text ${t.done ? "done" : ""}`}>
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
  );
}
