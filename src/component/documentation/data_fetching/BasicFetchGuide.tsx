import CodeBlock from "../../CodeBlock";
import Title from "../../Title";

const BasicFetchGuide = () => {
  return (
    <>
      <Title name="Basic Fetch" />

      {/* Documentación oficial */}
      <CodeBlock
        id="official-docs"
        heading="Official Docs"
        title="MDN Fetch API"
        code={`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`}
        language="text"
      />

      {/* Llamada fetch sencilla */}
      <CodeBlock
        id="simple-fetch-call"
        heading="Simple fetch call"
        title="basicFetch.js"
        code={`fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching:', error));`}
        language="js"
      />

      {/* Fetch en React con useEffect */}
      <CodeBlock
        id="fetch-in-react"
        heading="Fetch in React with useEffect"
        title="components/FetchData.tsx"
        code={`import React, { useState, useEffect } from 'react';

export default function FetchData() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => setData(json))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`}
        language="tsx"
      />
    </>
  );
};

export default BasicFetchGuide;
