import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import Title from "../../ui/Title";

const ReduxThunk = () => {
  return (
    <>
      <Title name="Redux Thunk" />

      <CodeBlock
        id="thunk-official-page"
        heading="Página oficial"
        description="Enlace a la documentación oficial de Redux Thunk."
        title="URL"
        code={`https://redux.js.org/usage/writing-logic-thunks`}
        language="text"
      />

      <CodeBlock
        id="thunk-install-dependencies"
        heading="Instalar dependencias"
        description="Instala @reduxjs/toolkit y react-redux con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install @reduxjs/toolkit react-redux"
        variants={[
          { label: "npm", code: "npm install @reduxjs/toolkit react-redux" },
          { label: "yarn", code: "yarn add @reduxjs/toolkit react-redux" },
          { label: "pnpm", code: "pnpm add @reduxjs/toolkit react-redux" },
          { label: "bun", code: "bun add @reduxjs/toolkit react-redux" },
        ]}
      />

      <CodeBlock
        id="create-async-thunk"
        heading="Crear thunk asíncrono"
        description="Define un thunk asíncrono con createAsyncThunk para recuperar datos."
        title="src/features/users/usersThunks.ts"
        code={`import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (userId: number) => {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    if (!response.ok) throw new Error("Error al obtener usuario");
    return await response.json();
  }
);`}
        language="ts"
      />

      <CodeBlock
        id="create-slice-for-thunk"
        heading="Crear slice para thunk"
        description="Gestiona estados pending, fulfilled y rejected en extraReducers."
        title="src/features/users/usersSlice.ts"
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
        state.error = action.error.message || "Error desconocido";
        state.loading = false;
      });
  }
});

export default usersSlice.reducer;`}
        language="ts"
      />

      <CodeBlock
        id="thunk-configure-store"
        heading="Configurar el store"
        description="Agrega el reducer de users al store principal."
        title="src/store/store.ts"
        code={`import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});`}
        language="ts"
      />

      <CodeBlock
        id="use-thunk-in-component"
        heading="Usar thunk en componente"
        description="Despacha fetchUserById en useEffect y renderiza estados loading, error y datos."
        title="src/components/UserProfile.tsx"
        code={`import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../features/users/usersThunks";
import { RootState } from "../store/store";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(1));
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Empresa: {user.company.name}</p>
    </div>
  );
};

export default UserProfile;`}
        language="tsx"
      />
      <NavPagination />
    </>
  );
};

export default ReduxThunk;
