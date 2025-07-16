import LinkCard from "./LinkCard";
import reactLogo from "../assets/react.svg";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import {
  FaRocket,
  FaRoute,
  FaPuzzlePiece,
  FaVial,
  FaPaintBrush,
  FaWrench,
  FaCheckCircle,
} from "react-icons/fa";

const StartScreen = () => {
  return (
    <>
      <Nav />

      <div className="mt-10 mb-80 p-4 flex justify-center flex-col items-center">
        <div className=" text-white p-8 my-6 w-full max-w-full sm:max-w-3xl rounded-lg border">
          <div className="flex">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-5xl font-bold text-center">DevGuide</h1>
              <h2 className="text-3xl font-bold  flex items-center justify-center flex-wrap">
                Guías prácticas
              </h2>
              <h2 className="text-3xl font-bold  flex items-center justify-center flex-wrap">
                Documentación lista para usar
              </h2>
              <h2 className="text-lg font-bold text-gray-400 mb-6 flex items-center justify-center flex-wrap">
                Tu punto de partida para dominar el ecosistema React!
              </h2>
              <div className="flex gap-4 mb-10">
                <NavLink
                  to="/docs"
                  className="bg-[#9CDCFE] text-black hover:text-white hover:bg-[#6A9955] py-2 px-4 rounded-3xl font-bold transition duration-700  hover:drop-shadow-[0_0_1em_#6A9955]"
                >
                  Documentación
                </NavLink>

                <NavLink
                  to="/guide"
                  className="bg-[#9CDCFE] text-black hover:text-white hover:bg-[#6A9955] py-2 px-4 rounded-3xl font-bold transition duration-700  hover:drop-shadow-[0_0_1em_#6A9955]"
                >
                  Guías
                </NavLink>
              </div>
            </div>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
              title="Ir a la documentación de React"
            >
              <img
                src={reactLogo}
                className="h-48 align-middle transition-[filter] duration-300 drop-shadow-[0_0_2em_#61dafbaa] hover:drop-shadow-[0_0_3em_#61dafbaa] will-change-[filter] animate-[logo-spin_60s_linear_infinite] motion-reduce:animate-none"
                alt="React logo"
              />
            </a>
          </div>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Esta plataforma es tu compañera ideal para acelerar el desarrollo de
            aplicaciones con React. En la sección <strong>Documentación</strong>{" "}
            encontrarás recursos listos para usar: fragmentos de código,
            configuraciones optimizadas y ejemplos directos que te permitirán
            implementar rápidamente las soluciones más comunes del stack
            moderno.
          </p>

          <p className="mb-4 text-gray-300 leading-relaxed">
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
            <li className="flex items-center gap-2">
              <FaRocket className="text-[#9CDCFE]" />
              Configura un proyecto con React, Vite y TypeScript
            </li>
            <li className="flex items-center gap-2">
              <FaRoute className="text-[#9CDCFE]" />
              Routing declarativo con React Router
            </li>
            <li className="flex items-center gap-2">
              <FaPuzzlePiece className="text-[#9CDCFE]" />
              State management con Redux Toolkit y Async Thunks
            </li>
            <li className="flex items-center gap-2">
              <FaVial className="text-[#9CDCFE]" />
              Pruebas unitarias e integradas con Vitest y Testing Library
            </li>
            <li className="flex items-center gap-2">
              <FaPaintBrush className="text-[#9CDCFE]" />
              Estilos con Tailwind CSS, CSS personalizado y Sass
            </li>
            <li className="flex items-center gap-2">
              <FaWrench className="text-[#9CDCFE]" />
              Ejemplos de data fetching con Fetch, Axios y React Query
            </li>
          </ul>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Cada recurso incluye:
          </p>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#9CDCFE]" />
              Fragmentos de código limpios y comentados
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#9CDCFE]" />
              Estructura de archivos y nombres claros
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#9CDCFE]" />
              Instrucciones paso a paso que puedes seguir en tu proyecto
            </li>
          </ul>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Documentación lista para usar:
          </p>
          <div className="flex gap-4 mb-10 flex-wrap justify-center">
            <LinkCard
              title="State Management"
              links={[
                { label: "Redux Toolkit", to: "/redux-toolkit" },
                { label: "Redux Thunk", to: "/redux-thunk" },
                { label: "Zustand", to: "/zustand" },
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
                { label: "Basic Fetch", to: "/basic-fetch" },
                { label: "Advanced Fetch", to: "/advanced-fetch" },
                { label: "React Query", to: "/react-query" },
                { label: "Axios", to: "/axios" },
              ]}
            />

            <LinkCard
              title="Styling"
              links={[{ label: "Sass", to: "/sass" }]}
            />
          </div>

          {/* Portfolio */}
          <p className="mb-4 text-gray-300 leading-relaxed">
            🌐 Visita mi portafolio en{" "}
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
            📌 Se agregarán más guías con el tiempo.
          </p>

          {/* Responsive hints */}
          <p className="text-gray-400 text-sm mb-2 xl:hidden">
            Navega usando el menú para acceder a todas las guías.
          </p>
          {/*       <p className="text-gray-400 text-sm hidden xl:block">
            Usa la barra lateral para explorar las guías. Cada sección ofrece
            fragmentos listos para copiar que puedes probar al instante.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default StartScreen;
