import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReactRouterOutletGuide = () => {
  return (
    <>
      <Title name="React Router: Layout & Outlet" />

      {/* Introducción */}
      <CodeBlock
        id="introduccion"
        heading="Introducción"
        title="Descripción"
        code={`Con <Outlet /> puedes renderizar rutas hijas dentro de un layout compartido.`}
        language="text"
      />

      {/* Página Oficial */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="URL"
        code={`https://reactrouter.com/en/main/hooks/use-outlet`}
        language="text"
      />

      {/* Crear Layout */}
      <CodeBlock
        id="create-layout"
        heading="Create a Layout component"
        title="components/Layout.tsx"
        code={`import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main className="p-4">
        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />
      </main>
    </div>
  );
}`}
        language="tsx"
      />

      {/* Actualizar App.jsx */}
      <CodeBlock
        id="wrap-with-layout"
        heading="Wrap your routes with Layout"
        title="App.jsx"
        code={`import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Rutas hijas se renderizan en <Outlet /> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;`}
        language="tsx"
      />
    </>
  );
};

export default ReactRouterOutletGuide;
