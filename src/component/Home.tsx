// src/components/Home.tsx
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { TableOfContents } from "./toc/TableOfContents";

const Home = () => (
  <div className="flex flex-col">
    <Nav />

    {/*
      - grid-cols-1: móvil (< lg) → solo columna (Outlet)
      - lg:grid-cols-[16rem_1fr]: desde lg → 2 columnas (Sidebar | contenido)
      - xl:grid-cols-[16rem_1fr_auto]: desde xl → 3 columnas (Sidebar | contenido | TOC)
    */}
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] xl:grid-cols-[16rem_1fr_auto]">
      {/* Sidebar: oculto < lg, visible lg+ */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Contenido principal siempre en la columna central */}
      <main className="mt-10 mb-80 p-4 flex justify-center">
        <div className="w-full max-w-3xl">
          <Outlet />
        </div>
      </main>

      {/* Table Of Contents: oculto < xl, visible xl+ */}
      <aside className="hidden xl:block w-60 pl-4">
        <TableOfContents />
      </aside>
    </div>
  </div>
);

export default Home;
