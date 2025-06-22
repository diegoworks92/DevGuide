import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const NavLinkTw = () => {
  return (
    <>
      <Title name="NavLink + Tailwind" />

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

      {/* Crear NavBar con NavLink + Tailwind */}
      <CodeBlock
        heading="Create styled navigation with NavLink"
        title="NavBar.tsx"
        code={`import { NavLink } from "react-router-dom";

<nav>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "text-blue-500 font-bold" : "text-gray-500"
    }
  >
    Inicio
  </NavLink>

  <NavLink
    to="/contacto"
    className={({ isActive }) =>
      isActive ? "text-blue-500 font-bold" : "text-gray-500"
    }
  >
    Contacto
  </NavLink>
</nav>`}
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

export default NavLinkTw;
