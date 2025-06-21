import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import {
  reduxLinks,
  reduxPaths,
  routerLinks,
  routerPaths,
  testLinks,
  testPaths,
} from "./sidebarLinks";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-gray-800  h-full fixed pt-20 px-20 border-r">
      <h1 className="-ml-4 mb-4 text-xl">Documentation</h1>
      <Menu
        title="Redux"
        links={reduxLinks}
        isActiveSection={reduxPaths.includes(pathname)}
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
    </div>
  );
};

export default Sidebar;
