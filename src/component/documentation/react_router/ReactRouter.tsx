import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const ReactRouter = () => {
  return (
    <>
      <Title name="React Router" />

      {/* Página oficial */}
      <CodeBlock
        id="official-page"
        heading="Official Page"
        title="Declarative Installation"
        code={`https://reactrouter.com/start/declarative/installation`}
        language="text"
      />

      {/* Instalación del paquete */}
      <CodeBlock
        id="install-package"
        heading="Install the package"
        title="Terminal"
        code={`npm install react-router-dom`}
        language="bash"
      />

      {/* Envolver la app con BrowserRouter */}
      <CodeBlock
        id="wrap-with-browserrouter"
        heading="Wrap with BrowserRouter"
        title="main.jsx"
        code={`import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>`}
      />

      {/* Definir rutas */}
      <CodeBlock
        id="define-routes"
        heading="Define Routes"
        title="App.jsx"
        code={`import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
`}
      />

      {/* Crear NavBar con enlaces */}
      <CodeBlock
        id="create-navbar"
        heading="Create navigation links"
        title="NavBar.tsx"
        code={`import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;


`}
      />

      {/* Ruta de fallback (404) */}
      <CodeBlock
        id="fallback-route"
        heading="Fallback route"
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />

      {/* Extra: Layout con Outlet */}
      <CodeBlock
        id="layout-with-outlet"
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

      {/* Extra: Definir rutas anidadas */}
      <CodeBlock
        id="define-nested-routes"
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
