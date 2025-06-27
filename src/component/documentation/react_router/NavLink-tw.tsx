import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const NavLinkTw = () => {
  return (
    <>
      <Title name="NavLink + Tailwind" />

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

      {/* Crear NavBar con NavLink y Tailwind */}
      <CodeBlock
        id="create-styled-navigation"
        heading="Create styled navigation with NavLink"
        title="NavBar.tsx"
        code={`import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-500"
        }
      >
        About
      </NavLink>
    </nav>
  );
};

      export default NavBar;`}
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

export default NavLinkTw;
