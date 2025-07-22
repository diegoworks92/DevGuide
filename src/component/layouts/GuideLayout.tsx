import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import { TableOfContents } from "../toc/TableOfContents";
import Sidebar_Guide from "../sidebar/Sidebar_Guide";

const GuideLayout: React.FC = () => (
  <div className="flex flex-col">
    <Nav />

    {/* En desktop lg+: Sidebar_Guide | contenido | TOC en xl+ */}
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] xl:grid-cols-[16rem_1fr_auto]">
      <div className="hidden lg:block">
        <Sidebar_Guide />
      </div>

      <main className="mt-10 mb-80 p-4 flex justify-center">
        <div className="w-full max-w-3xl">
          <Outlet />
        </div>
      </main>

      {/* TOC visible a partir de xl */}
      <aside className="hidden xl:block w-60 pl-4">
        <TableOfContents />
      </aside>
    </div>
  </div>
);

export default GuideLayout;
