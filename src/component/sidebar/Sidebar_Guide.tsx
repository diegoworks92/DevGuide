import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "./../Menu";
import { guideLinks, guidePaths } from "./guideSidebarLinks";

const Sidebar_Guide: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-0 left-0 h-full w-64 border-r pt-20 px-6">
      <h1 className="mb-4 text-xl text-white font-bold">Guías</h1>
      <div className="overflow-y-auto max-h-[calc(100vh-5rem)] pl-4 pb-10">
        <Menu
          title="Data Fetching"
          links={guideLinks}
          isActiveSection={guidePaths.includes(pathname)}
        />
      </div>
    </div>
  );
};

export default Sidebar_Guide;
