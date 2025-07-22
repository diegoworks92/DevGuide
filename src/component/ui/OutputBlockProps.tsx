import React from "react";
import { MdCheckCircle, MdVisibility } from "react-icons/md";

interface OutputBlockProps {
  heading: string;
  description?: string;
  children: React.ReactNode;
}

const OutputBlock: React.FC<OutputBlockProps> = ({
  heading,
  description,
  children,
}) => {
  return (
    <div className="mt-10 mb-4">
      {/* Título del bloque con icono */}
      <h2 className="scroll-mt-20 text-green-400 text-xl font-semibold mb-4 flex items-center gap-2">
        <MdCheckCircle />
        Resultado final
      </h2>

      {/* Descripción opcional */}
      {description && (
        <p className="mt-2 text-gray-300 whitespace-pre-line">{description}</p>
      )}

      {/* Contenedor con título + etiqueta tipo variante + contenido */}
      <div className="rounded-lg border p-4 mt-4">
        <div className="flex justify-between items-center -mb-2">
          {/* Nombre del bloque */}
          <span className="text-sm text-secondary font-mono">{heading}:</span>

          {/* Etiqueta de resultado */}
          <span
            className="text-xs px-2 py-1 rounded border flex items-center gap-1 text-check border-check bg-slate"
            title="Representación visual del resultado"
            style={{ cursor: "default" }}
          >
            <MdVisibility />
            Vista simulada
          </span>
        </div>

        {/* Contenido del resultado */}
        <div className="mt-4 p-4 bg-black rounded-lg border border-gray-600 text-white text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OutputBlock;
