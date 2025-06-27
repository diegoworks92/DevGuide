import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const I18nGuide = () => {
  return (
    <>
      <Title name="React Internationalization (i18n)" />

      <p className="mb-4 text-gray-300">
        Organiza tus traducciones y elige entre carga dinámica (HTTP backend) o
        estática (imports).
      </p>

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
        description="Añade i18next, bindings y detectores de idioma."
        title="Terminal"
        code={`npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend`}
        language="bash"
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

      <CodeBlock
        id="static-import"
        heading="Import estático (opcional)"
        description="Administra tus traducciones en React con i18next utilizando dos enfoques: 
        • Carga dinámica desde public/locales usando i18next-http-backend (ideal si quieres editar las traducciones sin recompilar). 
        • Importación estática desde src/locales, recomendada si prefieres incluir los textos en el bundle final. 
        En este caso, debes eliminar i18next-http-backend y configurar i18n.ts de esta forma:"
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
