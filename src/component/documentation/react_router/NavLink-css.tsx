import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const NavLinkCss = () => {
  return (
    <>
      <Title name="NavLink Css" />

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

      {/* Crear NavBar con NavLink + clases CSS */}
      <CodeBlock
        heading="Create navigation with NavLink + CSS classes"
        title="NavBar.tsx"
        code={`import { NavLink } from "react-router-dom";

<nav>
  <NavLink
    to="/"
    className={({ isActive }) =>
      "enlace px-2 " + (isActive ? "activo" : "")
    }
  >
    Inicio
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      "enlace px-2 " + (isActive ? "activo" : "")
    }
  >
    Acerca de
  </NavLink>
</nav>`}
      />

      {/* Estilos CSS */}
      <CodeBlock
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

      {/* Ruta 404 */}
      <CodeBlock
        heading="Fallback route"
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />
    </>
  );
};

export default NavLinkCss;
