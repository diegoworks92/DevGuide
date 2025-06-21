import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
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
    <div className="bg-gray-800 text-white p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto">
      {/* Título y botón en la misma línea */}
      <div className="flex justify-between mb-2 gap-2">
        <span className="text-sm text-gray-400 font-mono">{title}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white  text-xs px-2 py-1 border border-gray-600 rounded transition"
        >
          {copied ? "✅ Copied" : <MdContentCopy />}
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

{
  /*  */
}
<CodeBlock title="" code={``} />;

/* 
prism

prismDark

okaidia

tomorrow

twilight

coy

solarizedlight

atomDark

coldarkDark

coldarkCold

dracula

duotoneDark

duotoneLight

materialDark

materialLight

nightOwl

oneDark

xonokai
 */
