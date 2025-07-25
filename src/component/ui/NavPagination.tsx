import { useLocation, useNavigate } from "react-router-dom";
import { allDocsLinks } from "../sidebar/sidebarLinks";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

const NavPagination = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentIndex = allDocsLinks.findIndex((link) => link.to === pathname);
  const prevLink = allDocsLinks[currentIndex - 1];
  const nextLink = allDocsLinks[currentIndex + 1];
  const firstLink = allDocsLinks[0];

  const isLastPage = currentIndex === allDocsLinks.length - 1;

  return (
    <div className="flex justify-between items-end mt-16 border-t border-slate pt-14 text-sm text-slate-300">
      {/* Botón Anterior */}
      {prevLink ? (
        <div className="flex flex-col items-start gap-2">
          <span className="text-zinc-400 text-xs">Página Anterior</span>
          <button
            onClick={() => navigate(prevLink.to)}
            className="flex items-center gap-2 text-base text-primary hover:text-secondary transition border rounded-md px-3 py-2 border-slate hover:border-secondary"
          >
            <FaArrowLeft className="text-sm" />
            {prevLink.label}
          </button>
        </div>
      ) : (
        <div />
      )}

      {/* Botón Siguiente o “Volver al principio” */}
      <div className="flex flex-col items-end gap-2 text-right">
        <span className="text-zinc-400 text-xs">
          {isLastPage ? "Primera Página" : "Página Siguiente"}
        </span>
        <button
          onClick={() => navigate(isLastPage ? firstLink.to : nextLink.to)}
          className="flex items-center gap-2 text-base text-primary hover:text-secondary transition border rounded-md px-3 py-2 border-slate hover:border-secondary"
        >
          {isLastPage ? (
            <>
              Volver al principio
              <FaArrowUp className="text-sm" />
            </>
          ) : (
            <>
              {nextLink?.label}
              <FaArrowRight className="text-sm" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavPagination;
