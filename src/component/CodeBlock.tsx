import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";

interface CodeBlockProps {
  heading?: string;
  title: string;
  code: string;
  language?: string;
}

const CodeBlock = ({
  heading,
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
    <>
      {heading && (
        <h2 className="text-center text-white text-xl font-semibold mb-2">
          {heading}
        </h2>
      )}
      <div className=" text-white p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto border">
        <div className="flex justify-between items-center mb-2 gap-2">
          <span className="text-sm text-gray-400 font-mono">{title}</span>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white text-xs px-2 py-1 border border-gray-600 rounded transition"
          >
            {copied ? "✅ Copiado" : <MdContentCopy />}
          </button>
        </div>

        {/* Snippet de código */}
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          className="rounded-lg border"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBlock;

{
  /* <CodeBlock heading="" title="" code={``} />; */
}

/* 
vscDarkPlus

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
