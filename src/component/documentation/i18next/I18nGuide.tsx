import InfoText from "../../InfoText";
import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const I18nGuide = () => {
  return (
    <>
      <Title name="React Internationalization (i18n)" />

      <InfoText
        heading="Introducción"
        description={`Puedes gestionar las traducciones en React con i18next de dos formas:\n
      1) Carga dinámica desde public/locales usando i18next-http-backend, ideal si quieres modificar los archivos de traducción sin recompilar.\n
      2) Importación estática desde src/locales, recomendada si prefieres incluir los textos directamente en el bundle final.`}
      />

      <CodeBlock
        id="official-page"
        heading="Página oficial"
        description="Consulta la guía y ejemplos en la web oficial."
        title="react.i18next.com"
        code={`https://react.i18next.com/`}
        language="text"
      />

      <CodeBlock
        id="install-dependencies"
        heading="Instalar dependencias"
        description="Instala i18next y sus adaptadores con tu gestor favorito."
        title="Terminal"
        language="bash"
        variants={[
          {
            label: "npm",
            code: "npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend",
          },
          {
            label: "yarn",
            code: "yarn add i18next react-i18next i18next-browser-languagedetector i18next-http-backend",
          },
          {
            label: "pnpm",
            code: "pnpm add i18next react-i18next i18next-browser-languagedetector i18next-http-backend",
          },
          {
            label: "bun",
            code: "bun add i18next react-i18next i18next-browser-languagedetector i18next-http-backend",
          },
        ]}
      />

      <CodeBlock
        id="initialize-i18n"
        heading="Inicializar i18n (HTTP backend)"
        description="Configura carga dinámica de JSON y detección de idioma."
        title="src/i18n.ts"
        code={`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)            // carga archivos JSON desde public/locales
  .use(LanguageDetector)       // detecta idioma del navegador
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;`}
        language="ts"
      />

      <CodeBlock
        id="translation-json"
        heading="Archivos de traducción"
        description="Coloca tus JSON en public/locales/{lng}/translation.json."
        title="public/locales/en/translation.json"
        code={`{
  "welcome": "Welcome",
  "description": "This app is internationalized."
}`}
        language="json"
      />

      <CodeBlock
        id="wrap-app-with-suspense"
        heading="Envolver la App"
        description="Carga traducciones antes de renderizar tu App."
        title="src/index.tsx"
        code={`import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading translations...</div>}>
    <App />
  </Suspense>
);`}
        language="tsx"
      />

      <CodeBlock
        id="use-translations"
        heading="Usar traducciones"
        description="Recupera textos y cambia idioma con useTranslation."
        title="src/components/Greeting.tsx"
        code={`import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Greeting() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
    </div>
  );
}`}
        language="tsx"
      />

      <InfoText
        heading="Importación estática (opcional)"
        description="Si prefieres no usar i18next-http-backend, puedes importar directamente los archivos de traducción desde src/locales. Esto elimina la necesidad de cargar archivos JSON desde public y los incluye en el bundle final."
      />

      <CodeBlock
        id="static-import"
        heading="Configurar i18n con imports estáticos"
        title="src/i18n.ts"
        code={`import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    fallbackLng: 'en',
    debug: false
  });

export default i18n;`}
        language="ts"
      />
    </>
  );
};

export default I18nGuide;
