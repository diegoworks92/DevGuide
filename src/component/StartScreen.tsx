import Title from "./Title";

const StartScreen = () => {
  return (
    <>
      <Title name="Home" />

      <div className="bg-gray-800 text-white p-8 my-6 w-full max-w-full sm:max-w-3xl rounded-lg">
        <h2 className="text-center text-3xl font-bold mb-6">
          Welcome to React Guides!
        </h2>

        <p className="mb-4 text-gray-300 leading-relaxed">
          This platform is your go-to companion for speeding up React app
          development. You’ll find practical guides, ready-to-copy examples, and
          optimized configurations so you can dive straight into building
          without the initial setup headaches.
        </p>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Explore each section to master key parts of the modern stack:
        </p>

        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>🚀 Set up a React, Vite & TypeScript project</li>
          <li>🔀 Declarative routing with React Router</li>
          <li>🧩 State management with Redux Toolkit & Async Thunk</li>
          <li>🧪 Unit and integration testing with Vitest & Testing Library</li>
          <li>🎨 Styling with Tailwind CSS and custom CSS classes</li>
          <li>🛠️ Sass integration, custom components, and more</li>
        </ul>

        <p className="mb-4 text-gray-300 leading-relaxed">
          Each guide includes:
        </p>
        <ul className="list-inside text-gray-300 mb-6 space-y-2">
          <li>✔️ Clean, commented code snippets</li>
          <li>✔️ Clear file structure and naming</li>
          <li>✔️ Step-by-step instructions you can follow in your project</li>
        </ul>

        {/* Small screens */}
        <p className="text-center text-gray-400 text-sm mb-2 xl:hidden">
          Navigate from the menu to access guides and examples.
        </p>
        {/* XL and up */}
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
