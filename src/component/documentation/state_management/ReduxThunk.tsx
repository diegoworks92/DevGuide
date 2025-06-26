import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReduxThunk = () => {
  return (
    <>
      <Title name="Redux Thunk" />

      {/* Página Oficial */}
      <CodeBlock
        id="thunk-official-page"
        heading="Official Page"
        title="URL"
        code={`https://redux.js.org/usage/writing-logic-thunks`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        id="thunk-install-dependencies"
        heading="Install Redux Toolkit and React-Redux"
        title="Terminal"
        code={`npm install @reduxjs/toolkit react-redux`}
      />

      {/* Crear el thunk asíncrono */}
      <CodeBlock
        id="create-async-thunk"
        heading="Create the async thunk"
        title="features/users/usersThunks.ts"
        code={`import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (userId: number) => {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    if (!response.ok) throw new Error("Error fetching user");
    return await response.json();
  }
);`}
      />

      {/* Crear el slice */}
      <CodeBlock
        id="create-slice-for-thunk"
        heading="Create the slice"
        title="features/users/usersSlice.ts"
        code={`import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "./usersThunks";

interface UserState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.error.message || "Unknown error";
        state.loading = false;
      });
  }
});

export default usersSlice.reducer;`}
      />

      {/* Configurar la store */}
      <CodeBlock
        id="thunk-configure-store"
        heading="Configure the store"
        title="store.ts"
        code={`import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});`}
      />

      {/* Usar en un componente */}
      <CodeBlock
        id="use-thunk-in-component"
        heading="Use it inside a component"
        title="components/UserProfile.tsx"
        code={`import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../features/users/usersThunks";
import { RootState } from "../app/store";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(1)); // Cargar usuario con ID 1
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserProfile;`}
      />
    </>
  );
};

export default ReduxThunk;
