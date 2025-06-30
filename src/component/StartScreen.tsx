import { NavLink } from "react-router-dom";
import Title from "./Title";
/* import reactLogo from "../assets/react.svg"; */
const StartScreen = () => {
  return (
    <>
      <Title name="Home" />

      <div className="text-white p-8 my-6 w-full max-w-full sm:max-w-3xl rounded-lg border">
        <h2 className="text-center text-3xl font-bold mb-6">
          Welcome to React Guides!
        </h2>
        <a href="https://react.dev" target="_blank">
          {/*           <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] will-change-[filter] animate-[logo-spin_20s_linear_infinite] motion-reduce:animate-none"
            alt="React logo"
          /> */}
        </a>
        <p className="mb-4 text-gray-300 leading-relaxed">
          This platform is your go-to companion for speeding up React app
          development. You’ll find practical guides, ready-to-copy examples, and
          optimized configurations so you can jump straight into building
          without the initial setup headaches.
        </p>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Explore each section to master key parts of the modern stack:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>🚀 Set up a React, Vite & TypeScript project</li>
          <li>🔀 Declarative routing with React Router</li>
          <li>🧩 State management with Redux Toolkit & Async Thunks</li>
          <li>🧪 Unit and integration testing with Vitest & Testing Library</li>
          <li>🎨 Styling with Tailwind CSS, custom CSS, and Sass</li>
          <li>🛠️ Data fetching examples with Fetch, Axios & React Query</li>
        </ul>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Each guide includes:
        </p>
        <ul className="list-inside text-gray-300 mb-6 space-y-2">
          <li>✔️ Clean, commented code snippets</li>
          <li>✔️ Clear file structure and naming</li>
          <li>✔️ Step-by-step instructions you can follow in your project</li>
        </ul>

        <p className="mb-6 text-gray-300 leading-relaxed">Available guides:</p>

        {/* State Management */}
        <div className="mb-4">
          <h3 className="text-xl text-[#4EC9B0] font-semibold mb-2">
            State Management
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink
                to="/redux-toolkit"
                className="text-[#CE9178] hover:underline"
              >
                Redux Toolkit
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/redux-thunk"
                className="text-[#CE9178] hover:underline"
              >
                Redux Thunk
              </NavLink>
            </li>
            <li>
              <NavLink to="/zustand" className="text-[#CE9178] hover:underline">
                Zustand
              </NavLink>
            </li>
          </ul>
        </div>

        {/* React Router */}
        <div className="mb-4">
          <h3 className="text-xl text-[#9CDCFE] font-semibold mb-2">
            React Router
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink
                to="/react-router"
                className="text-[#4D8ABB] hover:underline"
              >
                Basic Setup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/react-router-outlet"
                className="text-[#4D8ABB] hover:underline"
              >
                Outlet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/navlink-tw"
                className="text-[#4D8ABB] hover:underline"
              >
                NavLink + Tailwind
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/navlink-css"
                className="text-[#4D8ABB] hover:underline"
              >
                NavLink + CSS
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Testing */}
        <div className="mb-4">
          <h3 className="text-xl text-[#956892] font-semibold mb-2">Testing</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink to="/test" className="text-[#956892] hover:underline">
                Unit & Integration Tests
              </NavLink>
            </li>
          </ul>
        </div>

        {/* I18n */}
        <div className="mb-4">
          <h3 className="text-xl text-[#4D8ABB] font-semibold mb-2">I18n</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink to="/i18n" className="text-[#4D8ABB] hover:underline">
                React-i18next
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Data Fetching */}
        <div className="mb-4">
          <h3 className="text-xl text-[#6A9955] font-semibold mb-2">
            Data Fetching
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink
                to="/basic-fetch"
                className="text-[#6A9955] hover:underline"
              >
                Basic Fetch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/advanced-fetch"
                className="text-[#6A9955] hover:underline"
              >
                Advanced Fetch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/react-query"
                className="text-[#6A9955] hover:underline"
              >
                React Query
              </NavLink>
            </li>
            <li>
              <NavLink to="/axios" className="text-[#6A9955] hover:underline">
                Axios
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Styling */}
        <div className="mb-6">
          <h3 className="text-xl text-[#CE9178] font-semibold mb-2">Styling</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>
              <NavLink to="/sass" className="text-[#CE9178] hover:underline">
                Sass
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Portfolio */}
        <p className="mb-4 text-gray-300 leading-relaxed">
          🌐 Check out my portfolio at{" "}
          <a
            href="https://www.diegoworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CDCFE] underline"
          >
            diegoworks.com
          </a>
          .
        </p>

        {/* Coming soon note */}
        <p className="text-gray-400 italic mb-4">
          📌 More guides will be added here over time.
        </p>

        {/* Responsive hints */}
        <p className="text-center text-gray-400 text-sm mb-2 xl:hidden">
          Navigate using the menu to access all guides.
        </p>
        <p className="text-center text-gray-400 text-sm hidden xl:block">
          Use the sidebar to explore the guides. Each section offers
          ready-to-copy snippets you can try instantly.
        </p>
      </div>
    </>
  );
};

export default StartScreen;

/* import Title from "./Title";

const StartScreen = () => {
  return (
    <>
      <Title name="Home" />

      <div className="bg-gray-800 text-white p-8 my-6 w-full max-w-full sm:max-w-3xl rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-6">
          ¡Bienvenido a React Guides!
        </h2>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Esta plataforma es tu compañera ideal para acelerar el desarrollo de
          aplicaciones con React. Aquí encontrarás guías prácticas, ejemplos
          listos para copiar y configuraciones óptimas para que empieces a
          trabajar sin perder tiempo en la configuración inicial.
        </p>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Explora cada sección para dominar aspectos clave del stack:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>🚀 Configurar un proyecto con React, Vite y TypeScript</li>
          <li>🔀 Enrutamiento declarativo con React Router</li>
          <li>🧩 Gestión de estado con Redux Toolkit y Async Thunk</li>
          <li>🧪 Tests unitarios e integración con Vitest y Testing Library</li>
          <li>🎨 Estilizado con Tailwind CSS y clases CSS personalizadas</li>
          <li>🛠️ Integración de Sass, componentes a medida y mucho más</li>
        </ul>

        <p className="mb-4 text-gray-300 leading-relaxed">Cada guía incluye:</p>
        <ul className="list-inside text-gray-300 mb-6 space-y-2">
          <li>✔️ Snippets limpios y comentados</li>
          <li>✔️ Estructura de archivos y nombres claros</li>
          <li>✔️ Pasos detallados para replicar en tu proyecto</li>
        </ul>


        <p className="text-center text-gray-400 text-sm mb-2 xl:hidden">
          Navega desde el menú para acceder a las guías y ejemplos.
        </p>

        <p className="text-center text-gray-400 text-sm hidden xl:block">
          Usa el menú lateral para explorar las guías. Cada sección ofrece
          fragmentos listos para copiar y probar al instante.
        </p>
      </div>
    </>
  );
};

export default StartScreen;
 */
