import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import {
  stateManagementLinks,
  stateManagementPaths,
  routerLinks,
  routerPaths,
  testLinks,
  testPaths,
  i18nLinks,
  i18nPaths,
  dataFetchingLinks,
  dataFetchingPaths,
  stylingLinks,
  stylingPaths,
} from "./sidebarLinks";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className=" fixed top-0 left-0 h-full w-64 border-r pt-20 px-6">
      <h1 className="mb-4 text-xl text-[#4EC9B0]">Documentation</h1>

      {/* Contenedor scrollable */}
      <div className="overflow-y-auto max-h-[calc(100vh-5rem)] pl-6 pb-10">
        <Menu
          title="State Management"
          links={stateManagementLinks}
          isActiveSection={stateManagementPaths.includes(pathname)}
        />
        <Menu
          title="React Router"
          links={routerLinks}
          isActiveSection={routerPaths.includes(pathname)}
        />
        <Menu
          title="Testing"
          links={testLinks}
          isActiveSection={testPaths.includes(pathname)}
        />
        <Menu
          title="I18n"
          links={i18nLinks}
          isActiveSection={i18nPaths.includes(pathname)}
        />
        <Menu
          title="Data Fetching"
          links={dataFetchingLinks}
          isActiveSection={dataFetchingPaths.includes(pathname)}
        />

        <Menu
          title="Styling"
          links={stylingLinks}
          isActiveSection={stylingPaths.includes(pathname)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
