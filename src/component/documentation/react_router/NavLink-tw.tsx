import CodeBlock from "../../ui/CodeBlock";
import Title from "../../ui/Title";

const NavLinkTw = () => {
  return (
    <>
      <Title name="NavLink + Tailwind" />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Instalación declarativa y documentación oficial de React Router."
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
        description="Envuelve tu App con BrowserRouter para habilitar el enrutamiento."
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
        description="Declara las rutas principales de tu aplicación."
        title="src/App.jsx"
        code={`import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}
        language="tsx"
      />

      <CodeBlock
        id="create-styled-navigation"
        heading="Crear navegación con estilo"
        description="Usa NavLink con clases condicionales de Tailwind para resaltar la ruta activa."
        title="src/components/NavBar.tsx"
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
        to="/about"
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
        language="tsx"
      />

      <CodeBlock
        id="fallback-route"
        heading="Ruta de fallback"
        description="Captura rutas no definidas con un componente NotFound."
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
        language="tsx"
      />
    </>
  );
};

export default NavLinkTw;
