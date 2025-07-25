import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import Title from "../../ui/Title";

const ReactRouter = () => {
  return (
    <>
      <Title name="React Router" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Documentación oficial de React Router con instalación declarativa."
        title="Declarative Installation"
        code={`https://reactrouter.com/start/declarative/installation`}
        language="text"
      />

      <CodeBlock
        id="install-package"
        heading="Instalar el paquete"
        description="Instala react-router-dom con tu gestor de paquetes favorito."
        title="Terminal"
        language="bash"
        code="npm install react-router-dom"
        variants={[
          { label: "npm", code: "npm install react-router-dom" },
          { label: "yarn", code: "yarn add react-router-dom" },
          { label: "pnpm", code: "pnpm add react-router-dom" },
          { label: "bun", code: "bun add react-router-dom" },
        ]}
      />

      <CodeBlock
        id="wrap-with-browserrouter"
        heading="Envolver con BrowserRouter"
        description="Envuelve tu App con el componente BrowserRouter para habilitar el enrutamiento."
        title="src/main.jsx"
        code={`import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>`}
        language="tsx"
      />

      <CodeBlock
        id="define-routes"
        heading="Definir rutas"
        description="Usa el componente Routes para declarar las rutas de tu aplicación."
        title="src/App.jsx"
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
}`}
        language="tsx"
      />

      <CodeBlock
        id="create-navbar"
        heading="Crear enlaces de navegación"
        description="Crea una barra de navegación con enlaces usando el componente Link."
        title="src/components/NavBar.tsx"
        code={`import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;`}
        language="tsx"
      />

      <CodeBlock
        id="fallback-route"
        heading="Ruta de fallback (404)"
        description="Captura rutas no definidas con un componente NotFound."
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
        language="tsx"
      />

      <CodeBlock
        id="layout-with-outlet"
        heading="Extra: Layout con Outlet"
        description="Crea un layout persistente con Outlet para renderizar rutas hijas."
        title="src/components/Layout.tsx"
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
        id="define-nested-routes"
        heading="Extra: Definir rutas anidadas"
        description="Organiza rutas hijas dentro de un layout principal."
        title="src/App.jsx"
        code={`<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>`}
        language="tsx"
      />
      <NavPagination />
    </>
  );
};

export default ReactRouter;
