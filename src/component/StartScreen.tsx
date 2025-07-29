import LinkCard from "./ui/LinkCard";
import Nav from "./Nav";
import {
  FaRocket,
  FaRoute,
  FaPuzzlePiece,
  FaVial,
  FaPaintBrush,
  FaWrench,
  FaCheckCircle,
  FaThumbtack,
} from "react-icons/fa";
import NavButton from "./ui/NavButton";
import ReactIcon from "./ui/ReactIcon";
import Footer from "./Footer";

const StartScreen = () => {
  return (
    <>
      <Nav />

      <div className="mt-10 mb-10 p-4 flex justify-center flex-col items-center relative z-0">
        <div className="text-white p-10 my-6 w-full max-w-full sm:max-w-5xl rounded-lg  relative z-10">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-start relative">
            <div className="flex flex-col text-center sm:text-start justify-center items-center sm:justify-start sm:items-start">
              <ReactIcon classLogo="h-36 sm:hidden mb-6" />
              <h1 className="text-3xl mb-2 sm:text-5xl font-bold text-primary">
                DevGuide
              </h1>
              <h2 className="text-lg mb-2 sm:text-3xl font-bold flex items-center justify-center flex-wrap">
                Guías prácticas
              </h2>
              <h2 className="text-lg mb-2 sm:text-3xl font-bold flex items-center justify-center flex-wrap">
                Documentación lista para usar
              </h2>
              <h2 className="text-sm sm:text-lg font-bold text-gray-400 mb-6 flex items-center justify-center flex-wrap">
                Tu punto de partida para dominar el ecosistema React!
              </h2>
              <div className="flex gap-4 mb-10">
                <NavButton linkButton="/docs" nameButton="Documentación" />
                <NavButton linkButton="/guide" nameButton="Guías" />
              </div>
            </div>

            <ReactIcon classLogo="h-52 hidden sm:block lg:mr-36" />
          </div>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Esta plataforma es tu compañera ideal para acelerar el desarrollo de
            aplicaciones con React. En la sección <strong>Documentación</strong>{" "}
            encontrarás recursos listos para usar: fragmentos de código,
            configuraciones optimizadas y ejemplos directos que te permitirán
            implementar rápidamente las soluciones más comunes del stack
            moderno.
          </p>

          <p className="mb-10 text-gray-300 leading-relaxed">
            Además, en la sección <strong>Guías</strong> encontrarás
            explicaciones detalladas sobre el funcionamiento de React, sus
            librerías y patrones. Estas guías te ayudarán a entender cómo y por
            qué aplicar cada herramienta en tu proyecto.
          </p>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Explora cada sección para dominar las partes clave del ecosistema
            React:
          </p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li className="flex items-start gap-3">
              <FaRocket className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>Configura un proyecto con React, Vite y TypeScript</span>
            </li>
            <li className="flex items-start gap-3">
              <FaRoute className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>Routing declarativo con React Router</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPuzzlePiece className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>State management con Redux Toolkit y Async Thunks</span>
            </li>
            <li className="flex items-start gap-3">
              <FaVial className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>
                Pruebas unitarias e integradas con Vitest y Testing Library
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPaintBrush className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>Estilos con Tailwind CSS, CSS personalizado y Sass</span>
            </li>
            <li className="flex items-start gap-3">
              <FaWrench className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>
                Ejemplos de data fetching con Fetch, Axios y React Query
              </span>
            </li>
          </ul>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Cada recurso incluye:
          </p>

          <ul className="text-gray-300 mb-10 space-y-2">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>Fragmentos de código limpios y comentados</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>Estructura de archivos y nombres claros</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-primary h-4 w-4 mt-1 flex-shrink-0" />
              <span>
                Instrucciones paso a paso que puedes seguir en tu proyecto
              </span>
            </li>
          </ul>

          <p className="mb-6 text-gray-300 text-primary text-lg font-bold leading-relaxed">
            Documentación lista para usar:
          </p>

          <div className="flex flex-wrap gap-4 mb-10 items-start justify-center sm:justify-start">
            <LinkCard
              title="State Management"
              links={[
                { label: "Redux Toolkit", to: "/redux-toolkit" },
                { label: "Redux Thunk", to: "/redux-thunk" },
                { label: "Zustand", to: "/zustand" },
                {
                  label: "useReducer: Contador",
                  to: "/docs/use-reducer-basic",
                },
                {
                  label: "useReducer: TodoList",
                  to: "/docs/use-reducer-todolist",
                },
                {
                  label: "Context API: ThemeContext",
                  to: "/docs/context-themecontext",
                },
                {
                  label: "Context API: Advanced",
                  to: "/docs/themecontext-advanced",
                },
                {
                  label: "useReducer + Context API",
                  to: "/docs/use-reducer-context-api",
                },
              ]}
            />
            <LinkCard
              title="React Router"
              links={[
                { label: "Basic Setup", to: "/react-router" },
                { label: "Outlet", to: "/react-router-outlet" },
                { label: "NavLink + Tailwind", to: "/navlink-tw" },
                { label: "NavLink + CSS", to: "/navlink-css" },
              ]}
            />
            <LinkCard
              title="Testing"
              links={[{ label: "Unit & Integration Tests", to: "/test" }]}
            />
            <LinkCard
              title="I18n"
              links={[{ label: "React-i18next", to: "/i18n" }]}
            />
            <LinkCard
              title="Data Fetching"
              links={[
                { label: "Data Fetching", to: "/data-fetching" },
                { label: "Advanced Fetch", to: "/advanced-fetch" },
                { label: "React Query", to: "/react-query" },
                { label: "Axios", to: "/axios" },
              ]}
            />
            <LinkCard
              title="Styling"
              links={[
                { label: "Sass", to: "/sass" },
                {
                  label: "Tailwind CSS: Basic",
                  to: "/docs/tailwind-css-basic",
                },
                {
                  label: "Tailwind CSS: Advanced",
                  to: "/docs/tailwind-css-advanced",
                },
              ]}
            />
          </div>

          <p className="text-gray-400 italic mb-4 flex items-center gap-2">
            <FaThumbtack className="text-secondary" />
            Se agregarán más guías con el tiempo.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartScreen;
