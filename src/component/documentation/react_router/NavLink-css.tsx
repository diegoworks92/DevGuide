import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const NavLinkCss = () => {
  return (
    <>
      <Title name="NavLink Css" />

      {/* Página Oficial */}
      <CodeBlock
        title="Official Page Declarative Mode"
        code={`https://reactrouter.com/start/declarative/installation`}
      />

      {/* Terminal */}
      <CodeBlock title="Terminal" code={`npm install react-router-dom`} />

      {/* main.jsx */}
      <CodeBlock
        title="main.jsx"
        code={`import { BrowserRouter } from "react-router-dom";

  <BrowserRouter>
   <App />
  </BrowserRouter>
        `}
      />

      {/* App.jsx */}
      <CodeBlock
        title="App.jsx"
        code={`import { Routes, Route } from "react-router-dom";

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
        `}
      />

      {/* NavBar.tsx */}
      <CodeBlock
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
    </nav>
            `}
      />

      {/* index.css */}
      <CodeBlock
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
      />

      {/* 404 */}
      <CodeBlock
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />
    </>
  );
};

export default NavLinkCss;
