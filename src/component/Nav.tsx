import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";

const Nav: React.FC = () => {
  const classLinks = (active: boolean) =>
    `mx-4 ${
      active ? "text-[#CE9178] font-bold" : "text-[#4D8ABB]"
    } hover:text-[#956892] transition`;

  return (
    <header className="z-50 flex justify-around pb-10">
      <nav className="fixed bg-[#1E1E1E] w-full top-0 flex justify-between items-center py-3 px-8 backdrop-blur-md border-b">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/diego.webp" alt="Profile" className="w-10 rounded-full" />
          <p className="text-xl font-bold">DiegoWorks | DevGuide</p>
        </div>

        <div className="hidden md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) => classLinks(isActive)}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/docs"
            className={({ isActive }) => classLinks(isActive)}
          >
            Documentación
          </NavLink>

          <NavLink
            to="/guide"
            className={({ isActive }) => classLinks(isActive)}
          >
            Guías
          </NavLink>
        </div>

        {/* Sidebar responsive: visible hasta xl */}
        <div className="block 2xl:hidden">
          <ResponsiveSidebar />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
