import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../component/Nav";
import Sidebar from "../../component/Sidebar";
import { TableOfContents } from "../toc/TableOfContents";

const DocumentLayout: React.FC = () => (
  <div className="flex flex-col">
    <Nav />
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] xl:grid-cols-[16rem_1fr_auto]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <main className="mt-10 mb-80 p-4 flex justify-center">
        <div className="w-full max-w-3xl">
          <Outlet />
        </div>
      </main>
      <aside className="hidden xl:block w-60 pl-4">
        <TableOfContents />
      </aside>
    </div>
  </div>
);

export default DocumentLayout;
