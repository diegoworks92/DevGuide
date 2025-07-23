import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MdContentCopy, MdInfoOutline, MdSwapHoriz } from "react-icons/md";
import { useToc } from "./../toc/useToc";

interface Variant {
  label: string;
  code: string;
}

interface CodeBlockProps {
  heading?: string;
  title: string;
  code?: string;
  id?: string;
  language?: string;
  description?: string;
  variants?: Variant[];
  exampleVariant?: Variant;
  alternativeVariant?: Variant;
}

const CodeBlock = ({
  heading,
  title,
  code,
  id,
  language = "typescript",
  description,
  variants,
  exampleVariant,
  alternativeVariant,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeCode, setActiveCode] = useState(code ?? "");
  const { register } = useToc();

  const isExample = Boolean(exampleVariant);
  const isAlternative = Boolean(alternativeVariant);
  const hasVariants = variants && variants.length > 1;

  useEffect(() => {
    if (id && heading) register({ id, heading });
  }, [id, heading, register]);

  useEffect(() => {
    if (isExample) {
      setActiveCode(exampleVariant!.code);
    } else if (isAlternative) {
      setActiveCode(alternativeVariant!.code);
    } else if (variants?.length) {
      setActiveCode(variants[0].code);
    } else if (code) {
      setActiveCode(code);
    }
  }, [
    code,
    variants,
    exampleVariant,
    alternativeVariant,
    isExample,
    isAlternative,
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isUrl = (text?: string) =>
    typeof text === "string" && /^https?:\/\//.test(text.trim());

  const getPackageIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "npm":
        return <img src="/npm.svg" alt="Logo de Bun" className="w-4" />;
      case "yarn":
        return <img src="/yarn.svg" alt="Logo de Bun" className="w-4" />;
      case "pnpm":
        return <img src="/pnpm.svg" alt="Logo de Bun" className="w-4" />;
      case "bun":
        return <img src="/bun.png" alt="Logo de Bun" className="w-4" />;
      default:
        return null;
    }
  };

  return (
    <>
      {heading && (
        <h2
          id={id}
          className={`scroll-mt-20 text-xl font-semibold mt-10 mb-4 flex items-center gap-2 ${
            isExample
              ? "text-exemple"
              : isAlternative
              ? "text-alters"
              : "text-primary"
          }`}
        >
          {isExample && (
            <span
              title="Código de ejemplo"
              className="text-exemple"
              style={{ cursor: "default" }}
            >
              <MdInfoOutline />
            </span>
          )}
          {isAlternative && (
            <span
              title="Otras alternativas del código"
              className="text-alters"
              style={{ cursor: "default" }}
            >
              <MdSwapHoriz />
            </span>
          )}
          {heading}
        </h2>
      )}

      {description && <p className="mt-2 mb-4 text-gray-300">{description}</p>}

      <div className="text-white bg-dark p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto border">
        <div
          className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2`}
        >
          {/* Título archivo */}
          <span className="text-sm text-secondary font-mono">{title}</span>

          {/* Etiqueta + Botones */}
          {(exampleVariant || alternativeVariant || hasVariants) && (
            <div className="select-none flex flex-wrap items-center gap-2">
              {exampleVariant && (
                <span
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border text-exemple border-exemple bg-slate max-w-[160px] truncate whitespace-nowrap overflow-hidden"
                  title="Código de ejemplo"
                  style={{ cursor: "default" }}
                >
                  <MdInfoOutline className="shrink-0" />
                  <span className="truncate">{exampleVariant.label}</span>
                </span>
              )}

              {alternativeVariant && (
                <span
                  className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border text-alters border-alters bg-slate max-w-[160px] truncate whitespace-nowrap overflow-hidden"
                  title="Otras alternativas del código"
                  style={{ cursor: "default" }}
                >
                  <MdSwapHoriz className="shrink-0" />
                  <span className="truncate">{alternativeVariant.label}</span>
                </span>
              )}

              {hasVariants &&
                variants!.map((v) => (
                  <button
                    key={v.label}
                    onClick={() => setActiveCode(v.code)}
                    className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded border max-w-[160px] truncate whitespace-nowrap overflow-hidden ${
                      activeCode === v.code
                        ? "bg-slate text-white border-none"
                        : "border-gray-600 bg-slate text-gray-400 hover:bg-slate hover:text-primary"
                    }`}
                    title={`Usar ${v.label}`}
                  >
                    <span className="shrink-0">{getPackageIcon(v.label)}</span>
                    <span className="truncate">{v.label}</span>
                  </button>
                ))}

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border text-gray-400 hover:text-primary bg-slate border-gray-600 max-w-[160px] truncate whitespace-nowrap overflow-hidden transition"
                title={copied ? "Copiado!" : "Copiar código"}
              >
                {copied ? (
                  <span className="text-check shrink-0">✓</span>
                ) : (
                  <MdContentCopy className="shrink-0" />
                )}
                <span className="truncate">Copiar</span>
              </button>
            </div>
          )}
        </div>

        {/* Bloque de código */}
        {isUrl(activeCode) ? (
          <a
            href={activeCode}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-[12px] rounded-lg border w-full p-[10px] mt-[3px] bg-black border-white inline-block text-accent break-all hover:text-secondary transition"
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
