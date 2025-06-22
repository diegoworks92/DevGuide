import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import {
  reduxLinks,
  reduxPaths,
  zustandLinks,
  zustandPaths,
  routerLinks,
  routerPaths,
  testLinks,
  testPaths,
  i18nLinks,
  i18nPaths,
} from "./sidebarLinks";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-[#1E1E1E]  h-full fixed pt-20 px-20 border-r">
      <h1 className="-ml-4 mb-4 text-xl">Documentation</h1>
      <Menu
        title="Redux"
        links={reduxLinks}
        isActiveSection={reduxPaths.includes(pathname)}
      />

      <Menu
        title="Zustand"
        links={zustandLinks}
        isActiveSection={zustandPaths.includes(pathname)}
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
    </div>
  );
};

export default Sidebar;
