import InfoText from "../../ui/InfoText";
import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const ReactRouterOutletGuide = () => {
  return (
    <>
      <Title name="React Router: Layout & Outlet" />

      <InfoText
        heading="Introducción"
        description="Con <Outlet /> puedes renderizar rutas hijas dentro de un layout compartido."
      />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Referencia oficial del hook useOutlet y su uso en layouts."
        title="URL"
        code={`https://reactrouter.com/en/main/hooks/use-outlet`}
        language="text"
      />

      <CodeBlock
        id="create-layout"
        heading="Crear componente Layout"
        description="Crea un layout común que incluya navegación y un área para rutas hijas."
        title="src/components/Layout.tsx"
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

      <CodeBlock
        id="wrap-with-layout"
        heading="Envolver rutas con Layout"
        description="Agrupa tus rutas dentro de un layout para compartir estructura."
        title="src/App.jsx"
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
