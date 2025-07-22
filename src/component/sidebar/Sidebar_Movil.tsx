import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Menu from "../Menu";
import {
  stateManagementLinks,
  routerLinks,
  testLinks,
  i18nLinks,
  dataFetchingLinks,
  stylingLinks,
} from "./sidebarLinks";
import { guideLinks } from "./guideSidebarLinks";

const Sidebar_Movil: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setActiveSection(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const sectionTitleClass =
    "w-full flex justify-between items-center font-bold text-primary hover:text-primary transition";

  return (
    <div className="relative z-[10000] bg-slate">
      <button
        className="text-white px-3 py-2 rounded border transition-all duration-300 relative z-[10001]"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setActiveSection(null);
        }}
      >
        ☰
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 bg-dark border text-white w-72 pt-4 px-6 shadow-lg z-20 rounded max-h-[85vh] overflow-y-auto transition-all duration-300 ease-in-out"
        >
          {/* INICIO */}
          <div className="mb-4">
            <button
              className={sectionTitleClass}
              onClick={() => {
                setIsOpen(false);
                setActiveSection(null);
              }}
            >
              <NavLink
                to="/"
                className="w-full text-xl text-left block"
                onClick={(e) => e.stopPropagation()}
              >
                Inicio
              </NavLink>
            </button>
            <hr className="border-slate mt-2 mb-4" />
          </div>

          {/* DOCUMENTACIÓN */}
          <div className="mb-4 ">
            <button
              className={sectionTitleClass}
              onClick={() => toggleSection("docs")}
            >
              <span className="text-xl">Documentación</span>
              <FaChevronDown
                className={`transition-transform duration-400 ${
                  activeSection === "docs" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "docs" && (
              <div className="mt-2 pl-2">
                <Menu
                  title="State Management"
                  links={stateManagementLinks}
                  onItemClick={() => setIsOpen(false)}
                />
                <Menu
                  title="React Router"
                  links={routerLinks}
                  onItemClick={() => setIsOpen(false)}
                />
                <Menu
                  title="Testing"
                  links={testLinks}
                  onItemClick={() => setIsOpen(false)}
                />
                <Menu
                  title="I18n"
                  links={i18nLinks}
                  onItemClick={() => setIsOpen(false)}
                />
                <Menu
                  title="Data Fetching"
                  links={dataFetchingLinks}
                  onItemClick={() => setIsOpen(false)}
                />
                <Menu
                  title="Styling"
                  links={stylingLinks}
                  onItemClick={() => setIsOpen(false)}
                />
              </div>
            )}
            <hr className="border-slate mt-4" />
          </div>

          {/* GUÍA */}
          <div className="mb-4">
            <button
              className={sectionTitleClass}
              onClick={() => toggleSection("guide")}
            >
              <span className="text-xl">Guías</span>
              <FaChevronDown
                className={`transition-transform duration-400 ${
                  activeSection === "guide" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeSection === "guide" && (
              <div className="mt-2 pl-2">
                <Menu
                  title="Data Fetching"
                  links={guideLinks}
                  onItemClick={() => setIsOpen(false)}
                />
              </div>
            )}
            <hr className="border-slate mt-4" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar_Movil;
