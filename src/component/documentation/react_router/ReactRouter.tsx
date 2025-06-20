import CodeBlock from "../../CodeBlock";

const ReactRouter = () => {
  return (
    <>
      <h1>React Router</h1>

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
        code={`import { Link } from "react-router-dom";

  <nav>
    <Link to="/">Inicio</Link>
    <Link to="/servicios">Servicios</Link>
    <Link to="/contacto">Contacto</Link>
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

export default ReactRouter;
