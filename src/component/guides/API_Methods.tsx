import React from "react";
import Title from "../ui/Title";
import InfoText from "../ui/InfoText";
import Table from "../ui/Table";
import CodeBlock from "../ui/CodeBlock";

const API_Methods: React.FC = () => {
  const sections = [
    {
      id: "fetch-example",
      title: "1. Fetch API",
      description:
        "La forma nativa de JavaScript para realizar peticiones HTTP con promesas.",
      columns: ["Cubre", "No cubre"],
      rows: [
        ["Peticiones GET y POST simples", "Manejo avanzado de errores"],
        ["Promesas nativas", "Cancelación de peticiones"],
        ["Procesamiento de JSON", "Interceptores o middleware"],
      ],
      snippetHeading: "Ejemplo con Fetch",
      snippetTitle: "Ejemplo con Fetch",
      code: `import { useEffect, useState } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
      whenToUse:
        "Ideal para peticiones simples sin dependencias externas ni caché o revalidación.",
    },
    {
      id: "axios-snippet",
      title: "2. Axios",
      description:
        "Librería externa que simplifica peticiones HTTP y mejora el manejo de errores.",
      columns: ["Cubre", "No cubre"],
      rows: [
        ["Interceptores de request/response", "Integración directa con React"],
        ["Cancelación de peticiones", "Caché automática"],
        ["Transformación de datos", "SSR sin configuración adicional"],
      ],
      snippetHeading: "Snippet con Axios",
      snippetTitle: "Snippet con Axios",
      code: `import { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
      whenToUse:
        "Cuando necesitas interceptores y cancelación en un cliente HTTP isomorfo.",
    },
    {
      id: "useeffect-fetch",
      title: "3. useEffect + Fetch/Axios",
      description:
        "Combina el hook de ciclo de vida con Fetch o Axios para llamadas controladas.",
      columns: ["Cubre", "No cubre"],
      rows: [
        [
          "Control del ciclo de vida del hook",
          "Caché y revalidación automáticas",
        ],
        ["Dependencias para re-fetch", "Throttling/debouncing integrado"],
        ["Limpieza (cleanup)", "Gestión centralizada de estado"],
      ],
      snippetHeading: "Uso de useEffect + Fetch",
      snippetTitle: "Uso de useEffect + Fetch",
      code: `import { useEffect, useState } from 'react';

function UseEffectFetchExample() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/items')
      .then(r => r.json())
      .then(json => mounted && setItems(json));
    return () => { mounted = false };
  }, []);

  return <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}`,
      whenToUse:
        "Para controlar manualmente el ciclo de vida de las peticiones en componentes.",
    },
    {
      id: "customhook-snippet",
      title: "4. Custom Hooks",
      description:
        "Hooks propios que agrupan y reutilizan la lógica de consumo de APIs.",
      columns: ["Cubre", "No cubre"],
      rows: [
        ["Reutilización de lógica (DRY)", "Caché avanzada"],
        ["Composición con otros hooks", "Gestión de mutaciones complejas"],
        ["Manejo interno de loading y error", "Revalidación automática"],
      ],
      snippetHeading: "Implementación de useFetch",
      snippetTitle: "Implementación de useFetch",
      code: `import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError);
  }, [url]);

  return { data, error };
}

// Uso en componente
function Products() {
  const { data, error } = useFetch('/api/products');

  if (error) return <div>Error</div>;
  if (!data) return <div>Cargando...</div>;

  return <ul>{data.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
      whenToUse:
        "Cuando necesites desacoplar lógica de fetch y reutilizarla entre componentes.",
    },
    {
      id: "reactquery-snippet",
      title: "5. React Query",
      description:
        "Librería especializada en gestión de datos remotos con caché y revalidación.",
      columns: ["Cubre", "No cubre"],
      rows: [
        [
          "Caché automática y revalidación",
          "Control manual detallado del cache",
        ],
        ["Estado de carga, error y éxito", "Interceptores personalizados"],
        ["Reintentos, polling y refetch", "SSR sin configuración adicional"],
      ],
      snippetHeading: "React Query: Ejemplo",
      snippetTitle: "React Query: Ejemplo",
      code: `import { useQuery } from 'react-query';

function Products() {
  const { data, error, isLoading } = useQuery('products', () =>
    fetch('/api/products').then(r => r.json())
  );

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error</div>;

  return <ul>{data.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}`,
      whenToUse:
        "Ideal para apps con muchas peticiones, caché y revalidación automática.",
    },
    {
      id: "swr-snippet",
      title: "6. SWR",
      description:
        "Librería ligera basada en stale-while-revalidate de Vercel para lecturas rápidas.",
      columns: ["Cubre", "No cubre"],
      rows: [
        [
          "Caché automática y revalidación",
          "Mutaciones (solo lectura por defecto)",
        ],
        [
          "Manejo de reintentos y polling",
          "Middleware e interceptores complejos",
        ],
        ["Suspense-ready", "SSR sin configuración adicional"],
      ],
      snippetHeading: "Ejemplo con SWR",
      snippetTitle: "Ejemplo con SWR",
      code: `import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json());

function UserProfile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Cargando...</div>;

  return <div>{data.name}</div>;
}`,
      whenToUse:
        "Perfecto para lecturas rápidas con stale-while-revalidate sin dependencias complejas.",
    },
    {
      id: "redux-thunk-snippet",
      title: "7. Redux Thunk",
      description:
        "Middleware de Redux que permite dispatch de funciones asincrónicas dentro de las acciones.",
      columns: ["Cubre", "No cubre"],
      rows: [
        ["Lógica asíncrona en actions", "Caché automática"],
        ["Acceso a getState y dispatch", "Revalidación automática"],
        ["Integración con Redux DevTools", "Polling y reintentos automáticos"],
      ],
      snippetHeading: "Snippet con Redux Thunk",
      snippetTitle: "Snippet con Redux Thunk",
      code: `// actions.js
export const fetchItems = () => async dispatch => {
  dispatch({ type: 'ITEMS_LOADING' });
  try {
    const res = await fetch('/api/items');
    const data = await res.json();
    dispatch({ type: 'ITEMS_SUCCESS', payload: data });
  } catch (e) {
    dispatch({ type: 'ITEMS_ERROR', error: e.message });
  }
};

// ItemList.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './actions';

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.data);
  const loading = useSelector(state => state.items.loading);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <div>Cargando...</div>;
  return <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}`,
      whenToUse:
        "En apps con Redux clásico que necesitan lógica asíncrona en actions.",
    },
    {
      id: "redux-saga-snippet",
      title: "8. Redux-Saga",
      description:
        "Middleware basado en generadores para orquestar efectos secundarios complejos en Redux.",
      columns: ["Cubre", "No cubre"],
      rows: [
        ["Cancelación y concurrencia", "Caché automática"],
        ["Polling, reintentos y watchers", "Revalidación automática"],
        ["Testeo fácil de sagas", "Integración nativa con hooks React"],
      ],
      snippetHeading: "Snippet con Redux-Saga",
      snippetTitle: "Snippet con Redux-Saga",
      code: `// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchItems() {
  try {
    const data = yield call(fetch, '/api/items').then(r => r.json());
    yield put({ type: 'ITEMS_SUCCESS', payload: data });
  } catch (e) {
    yield put({ type: 'ITEMS_ERROR', error: e.message });
  }
}

export function* watchFetchItems() {
  yield takeEvery('ITEMS_REQUEST', fetchItems);
}

// ItemList.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.data);
  const loading = useSelector(state => state.items.loading);

  useEffect(() => {
    dispatch({ type: 'ITEMS_REQUEST' });
  }, [dispatch]);

  if (loading) return <div>Cargando...</div>;
  return <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}`,
      whenToUse:
        "En apps grandes con lógica compleja y necesidad de control de efectos secundarios.",
    },
  ];

  const general = {
    columns: [
      "Método",
      "¿Qué es?",
      "Ideal para...",
      "Caché",
      "SSR",
      "Mutaciones",
      "Complejidad",
    ],
    rows: [
      [
        "Fetch API",
        "Nativo JS",
        "Proyectos muy simples",
        "No",
        "No",
        "Manual",
        "Baja",
      ],
      [
        "Axios",
        "Librería externa",
        "Proyectos pequeños con mejor control",
        "No",
        "No",
        "Manual",
        "Baja",
      ],
      [
        "useEffect + Fetch/Axios",
        "Hook React para ciclo de vida",
        "Carga inicial en componentes",
        "No",
        "No",
        "Manual",
        "Baja",
      ],
      [
        "Custom Hooks",
        "Funciones reutilizables",
        "Modularidad y DRY",
        "No",
        "No",
        "Manual",
        "Media",
      ],
      [
        "React Query",
        "Librería gestión de datos remotos",
        "Apps con muchas peticiones y caché",
        "Sí",
        "Opc.",
        "Sí",
        "Media",
      ],
      [
        "SWR",
        "Librería ligera “stale-while-revalidate”",
        "Apps rápidas de solo lectura",
        "Sí",
        "Opc.",
        "Limitado",
        "Baja",
      ],
      [
        "Redux Thunk",
        "Middleware Redux asincrónico",
        "Apps con Redux clásico",
        "No",
        "Sí",
        "Sí",
        "Media",
      ],
      [
        "Redux-Saga",
        "Middleware Redux basado en generadores",
        "Apps grandes con lógica compleja",
        "No",
        "Sí",
        "Sí",
        "Alta",
      ],
    ],
  };

  return (
    <>
      <Title name="Métodos para llamadas a APIs" />

      <InfoText
        heading="Introducción"
        description="En React existen varias formas de consumir APIs, desde las más básicas hasta herramientas avanzadas que gestionan caché, revalidación y estado de forma automática."
      />

      {sections.map((sec) => (
        <section key={sec.id}>
          <InfoText heading={sec.title} description={sec.description} />
          <Table columns={sec.columns} rows={sec.rows} />
          <CodeBlock
            id={sec.id}
            heading={sec.snippetHeading}
            title={sec.snippetTitle}
            code={sec.code}
            language="jsx"
          />
          <InfoText heading="¿Cuándo usar?" description={sec.whenToUse} />
        </section>
      ))}

      <InfoText
        heading="Resumen"
        description={
          "Para proyectos muy sencillos, Fetch API o Axios con useEffect es suficiente.\n" +
          "- Custom Hooks mejoran la reutilización de lógica sin dependencias externas.\n" +
          "- React Query y SWR ofrecen caché, revalidación y estado de carga listos para producción.\n" +
          "- Redux Thunk y Redux-Saga encajan en apps con Redux y lógica asíncrona compleja."
        }
      />

      <InfoText
        heading="Conclusión"
        description="La elección depende de la escala y necesidades de tu proyecto. Empieza con soluciones sencillas y evoluciona hacia React Query, SWR o middleware de Redux según crezca la complejidad de tus peticiones, caché y sincronización de datos."
      />

      <InfoText heading="Tabla comparativa general" />
      <Table columns={general.columns} rows={general.rows} />
    </>
  );
};

export default API_Methods;
