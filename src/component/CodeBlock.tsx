import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy } from "react-icons/md";
import { useToc } from "./toc/useToc";

interface CodeBlockProps {
  heading?: string;
  title: string;
  code?: string;
  id?: string;
  language?: string;
  description?: string;
  variants?: { label: string; code: string }[];
}

const CodeBlock = ({
  heading,
  title,
  code,
  id,
  description,
  language = "typescript",
  variants,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeCode, setActiveCode] = useState(code);
  const { register } = useToc();

  useEffect(() => {
    if (id && heading) register({ id, heading });
  }, [id, heading, register]);

  useEffect(() => {
    if (variants && variants.length > 0) {
      setActiveCode(variants[0].code);
    } else if (code) {
      setActiveCode(code);
    }
  }, [variants, code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isUrl = (text?: string) => {
    return typeof text === "string" && /^https?:\/\//.test(text.trim());
  };

  return (
    <>
      {heading && (
        <h2
          id={id}
          className="scroll-mt-20 text-primary text-xl font-semibold mt-10 mb-4"
        >
          {heading}
        </h2>
      )}

      {description && <p className="mt-2 mb-4 text-gray-300">{description}</p>}

      <div className="text-white bg-black p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto border">
        <div className="flex justify-between items-center mb-2 gap-2">
          <span className="text-sm text-secondary font-mono">{title}</span>
          <div className="flex items-center gap-2">
            {variants &&
              variants.map((v) => (
                <button
                  key={v.label}
                  onClick={() => setActiveCode(v.code)}
                  className={`text-xs px-2 py-1 rounded border ${
                    activeCode === v.code
                      ? "bg-primary text-black"
                      : "border-gray-600 text-gray-400 hover:text-accent"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            <button
              onClick={handleCopy}
              className="text-gray-400 hover:text-accent text-xs px-2 py-1 border border-gray-600 rounded transition"
            >
              {copied ? "✅ Copiado" : <MdContentCopy />}
            </button>
          </div>
        </div>

        {isUrl(activeCode) ? (
          <a
            href={activeCode}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border w-full p-[10px] mt-[3px] bg-black border-white inline-block text-white break-all hover:text-accent transition"
          >
            {activeCode}
          </a>
        ) : (
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            className="rounded-lg border"
          >
            {activeCode}
          </SyntaxHighlighter>
        )}
      </div>

      <div className="h-4" />
    </>
  );
};

export default CodeBlock;

{
  /* <CodeBlock description="" heading="" title="" code={``} />; */
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
