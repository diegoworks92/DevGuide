import Title from "./Title";
import LinkCard from "./LinkCard";
import reactLogo from "../assets/react.svg";
const StartScreen = () => {
  return (
    <>
      <Title name="DevGuide" />

      <div className="text-white p-8 my-6 w-full max-w-full sm:max-w-3xl rounded-lg border">
        <h2 className="text-center text-2xl font-bold mb-6 flex items-center justify-center flex-wrap">
          <span>
            Tu punto de partida para dominar el ecosistema{" "}
            <span className="inline-flex items-center">
              React
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
                title="Ir a la documentación de React"
              >
                <img
                  src={reactLogo}
                  className="h-6 align-middle transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] will-change-[filter] animate-[logo-spin_20s_linear_infinite] motion-reduce:animate-none"
                  alt="React logo"
                />
              </a>
            </span>
          </span>
        </h2>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Esta plataforma es tu compañera ideal para acelerar el desarrollo de
          aplicaciones con React. Encontrarás guías prácticas, ejemplos listos
          para copiar y configuraciones optimizadas para que puedas empezar a
          construir sin dolores de cabeza iniciales.
        </p>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Explora cada sección para dominar las partes clave del stack moderno:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>🚀 Configura un proyecto con React, Vite y TypeScript</li>
          <li>🔀 Routing declarativo con React Router</li>
          <li>🧩 State management con Redux Toolkit y Async Thunks</li>
          <li>
            🧪 Pruebas unitarias e integradas con Vitest y Testing Library
          </li>
          <li>🎨 Estilos con Tailwind CSS, CSS personalizado y Sass</li>
          <li>🛠️ Ejemplos de data fetching con Fetch, Axios y React Query</li>
        </ul>

        <p className="mb-4 text-gray-300 leading-relaxed">Cada guía incluye:</p>
        <ul className="list-inside text-gray-300 mb-6 space-y-2">
          <li>✔️ Fragmentos de código limpios y comentados</li>
          <li>✔️ Estructura de archivos y nombres claros</li>
          <li>✔️ Instrucciones paso a paso que puedes seguir en tu proyecto</li>
        </ul>

        <p className="mb-6 text-gray-300 leading-relaxed">Guías disponibles:</p>
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

          <LinkCard title="Styling" links={[{ label: "Sass", to: "/sass" }]} />
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
        <p className="text-gray-400 text-sm hidden xl:block">
          Usa la barra lateral para explorar las guías. Cada sección ofrece
          fragmentos listos para copiar que puedes probar al instante.
        </p>
      </div>
    </>
  );
};

export default StartScreen;
