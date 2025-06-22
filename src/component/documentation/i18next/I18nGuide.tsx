import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const I18nGuide = () => {
  return (
    <>
      <Title name="React Internationalization (i18n)" />

      {/* Página Oficial */}
      <CodeBlock
        heading="Official Page"
        title="URL"
        code={`https://react.i18next.com/`}
        language="text"
      />

      {/* Instalación */}
      <CodeBlock
        heading="Install dependencies"
        title="Terminal"
        code={`npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend`}
        language="bash"
      />

      {/* Inicializar i18n */}
      <CodeBlock
        heading="Initialize i18n"
        title="src/i18n.ts"
        code={`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)                // carga archivos de traducción vía HTTP
  .use(LanguageDetector)           // detecta el idioma del usuario
  .use(initReactI18next)           // conecta con React
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;`}
        language="ts"
      />

      {/* Archivos de traducción */}
      <CodeBlock
        heading="Add translation file"
        title="public/locales/en/translation.json"
        code={`{
  "welcome": "Welcome",
  "description": "This application is internationalized."
}`}
        language="json"
      />

      <CodeBlock
        heading="Add translation file"
        title="public/locales/es/translation.json"
        code={`{
  "welcome": "Bienvenido",
  "description": "Esta aplicación está internacionalizada."
}`}
        language="json"
      />

      {/* Envolver la App */}
      <CodeBlock
        heading="Wrap App with Suspense"
        title="src/index.tsx"
        code={`import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';  // importa la configuración de i18n

ReactDOM.render(
  <Suspense fallback={<div>Loading translations...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);`}
        language="tsx"
      />

      {/* Usar traducciones en componentes */}
      <CodeBlock
        heading="Use translations in components"
        title="components/Greeting.tsx"
        code={`import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Greeting() {
  const { t, i18n } = useTranslation();

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{t('welcome')}</h1>
      <p className="mb-4">{t('description')}</p>
      <button onClick={() => switchTo('en')} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
        English
      </button>
      <button onClick={() => switchTo('es')} className="px-3 py-1 bg-green-500 text-white rounded">
        Español
      </button>
    </div>
  );
}`}
        language="tsx"
      />

      {/* Extra: Automatic language detection */}
      <CodeBlock
        heading="Extra: Automatic language detection"
        title="src/i18n.ts"
        code={`// i18next-browser-languagedetector ya está configurado
// Detecta idioma desde: querystring, cookie, localStorage, navigator, htmlTag…`}
        language="text"
      />
    </>
  );
};

export default I18nGuide;
