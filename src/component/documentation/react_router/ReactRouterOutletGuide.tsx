import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReactRouterOutletGuide = () => {
  return (
    <>
      <Title name="React Router: Layout & Outlet" />

      {/* Introducción */}
      <div className="bg-gray-800 text-white p-6 my-4 w-full max-w-full sm:max-w-3xl rounded-lg">
        <p className="text-gray-300 leading-relaxed">
          Con <code>&lt;Outlet /&gt;</code> puedes renderizar rutas hijas dentro
          de un layout compartido. Sigue estos pasos para integrarlo en tu app
          sin alterar el flujo básico.
        </p>
      </div>

      {/* Página Oficial */}
      <CodeBlock
        heading="Official Page"
        title="URL"
        code={`https://reactrouter.com/en/main/hooks/use-outlet`}
        language="text"
      />

      {/* Crear Layout */}
      <CodeBlock
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
        heading="Wrap your routes with Layout"
        title="App.jsx"
        code={`import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Rutas hijas se renderizan en <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
        language="tsx"
      />

      {/* Nota final */}
      <div className="bg-gray-800 text-white p-6 my-4 w-full max-w-full sm:max-w-3xl rounded-lg">
        <p className="text-gray-300">
          Asegúrate de eliminar el <code>&lt;NavBar /&gt;</code> directo de{" "}
          <code>App.jsx</code>. Ahora tu navegador y cualquier footer o sidebar
          pueden vivir en <code>Layout</code>, y las páginas hijas aparecerán
          dentro de <code>&lt;Outlet /&gt;</code>.
        </p>
      </div>
    </>
  );
};

export default ReactRouterOutletGuide;
