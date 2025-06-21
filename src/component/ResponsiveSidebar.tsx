import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { reduxLinks, routerLinks, testLinks } from "./sidebarLinks";

const ResponsiveSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="text-white bg-gray-700 px-3 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 bg-gray-800 border text-white w-64 pt-4 px-10 shadow-lg z-50 rounded "
        >
          <h2 className="mb-4 -ml-4 font-bold text-lg">Documentation</h2>
          <Menu
            title="Redux"
            links={reduxLinks}
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
        </div>
      )}
    </div>
  );
};

export default ResponsiveSidebar;
