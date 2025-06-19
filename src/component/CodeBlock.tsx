import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  title: string;
  code: string;
  language?: string; // Agregamos soporte para diferentes lenguajes
}

const CodeBlock = ({
  title,
  code,
  language = "typescript",
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 text-white p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto">
      {/* Título y botón en la misma línea */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-2">
        <span className="text-sm text-gray-400 font-mono">{title}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white text-xs px-2 py-1 border border-gray-600 rounded transition"
        >
          {copied ? "✅ Copiado" : "📋 Copiar"}
        </button>
      </div>

      {/* Bloque de código con resaltado */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
