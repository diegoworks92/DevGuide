import CodeBlock from "../../CodeBlock";

const NavLinkTw = () => {
  return (
    <>
      <h1>NavLink + Tailwind</h1>

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

      {/* 404 */}
      <CodeBlock
        title="404"
        code={`<Route path="*" element={<NotFound />} />`}
      />
    </>
  );
};

export default NavLinkTw;
