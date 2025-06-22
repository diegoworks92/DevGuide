import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReactRouter = () => {
  return (
    <>
      <Title name="React Router" />

      {/* Página Oficial */}
      <CodeBlock
        heading="Official Page"
        title="Declarative Installation"
        code={`https://reactrouter.com/start/declarative/installation`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        heading="Install the package"
        title="Terminal"
        code={`npm install react-router-dom`}
        language="bash"
      />

      {/* Envolver la App */}
      <CodeBlock
        heading="Wrap with BrowserRouter"
        title="main.jsx"
        code={`import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>`}
      />

      {/* Definir rutas */}
      <CodeBlock
        heading="Define Routes"
        title="App.jsx"
        code={`import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}
      />

      {/* Crear NavBar */}
      <CodeBlock
        heading="Create navigation links"
        title="NavBar.tsx"
        code={`import { Link } from "react-router-dom";

<nav>
  <Link to="/">Inicio</Link>
  <Link to="/servicios">Servicios</Link>
  <Link to="/contacto">Contacto</Link>
</nav>`}
      />

      {/* Ruta 404 */}
      <CodeBlock
        heading="Fallback route"
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />

      {/* Extra: Enrutamiento anidado con Outlet */}
      <CodeBlock
        heading="Extra: Layout with Outlet"
        title="components/Layout.tsx"
        code={`import { Outlet } from "react-router-dom";
      import NavBar from "./NavBar";

      export default function Layout() {
        return (
          <div>
            <NavBar />
            <main className="p-4">
              <Outlet />
            </main>
          </div>
        );
      }`}
        language="tsx"
      />

      <CodeBlock
        heading="Extra: Define nested routes"
        title="App.jsx"
        code={`<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>`}
      />
    </>
  );
};

export default ReactRouter;
