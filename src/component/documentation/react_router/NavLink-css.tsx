import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const NavLinkCss = () => {
  return (
    <>
      <Title name="NavLink Css" />

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

      {/* Envolver con BrowserRouter */}
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

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}
      />

      {/* Crear NavBar con NavLink y clases CSS */}
      <CodeBlock
        id="create-navigation-with-css"
        heading="Create navigation with NavLink + CSS classes"
        title="NavBar.tsx"
        code={`import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          "enlace px-2 " + (isActive ? "activo" : "")
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          "enlace px-2 " + (isActive ? "activo" : "")
        }
      >
        About
      </NavLink>
    </nav>
  );
};`}
      />

      {/* Estilos CSS */}
      <CodeBlock
        id="style-with-css"
        heading="Style with CSS"
        title="index.css"
        code={`.enlace {
  text-decoration: none;
  color: #888;
  padding: 0.5rem;
  transition: color 0.2s ease;
}

.enlace:hover {
  color: #555;
}

.enlace.activo {
  font-weight: bold;
  color: #000;
}`}
        language="css"
      />

      {/* Ruta de fallback */}
      <CodeBlock
        id="fallback-route"
        heading="Fallback route"
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />
    </>
  );
};

export default NavLinkCss;
