import CodeBlock from "../../ui/CodeBlock";
import NavPagination from "../../ui/NavPagination";
import { allDocsLinks } from "../../sidebar/docsSidebarLinks";
import Title from "../../ui/Title";

const NavLinkCss = () => {
  return (
    <>
      <Title name="NavLink Css" />

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
        id="create-navigation-with-css"
        heading="Crear navegación con NavLink + CSS"
        description="Usa NavLink con clases condicionales para aplicar estilos activos personalizados."
        title="src/components/NavBar.tsx"
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
        language="tsx"
      />

      <CodeBlock
        id="style-with-css"
        heading="Estilizar con CSS"
        description="Define clases CSS para los enlaces y su estado activo."
        title="src/index.css"
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

      <CodeBlock
        id="fallback-route"
        heading="Ruta de fallback"
        description="Captura rutas no definidas con un componente NotFound."
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
        language="tsx"
      />
      <NavPagination links={allDocsLinks} />
    </>
  );
};

export default NavLinkCss;
