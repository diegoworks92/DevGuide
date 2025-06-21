import { NavLink, useLocation } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";
import { reduxPaths, routerPaths, testPaths } from "./sidebarLinks";

const Nav = () => {
  const irAlInicio = () => {
    window.scrollTo(0, 0);
  };

  const { pathname } = useLocation();
  const classLinks = (active: boolean) =>
    `mx-4 ${active ? "text-red-500 font-bold" : "text-gray-200"}`;

  /*   const classLinks = ({ isActive }: { isActive: boolean }) =>
    ` ${
      isActive ? "text-red-500 font-bold" : "text-gray-500"
    } hover:text-blue-500 transition duration-300`; */
  return (
    <header className={`z-50 flex flex-nowrap justify-around pb-10`}>
      <nav className="fixed bg-gray-800 gap-36 sm:gap-96 lg:gap-52 w-full top-0 flex justify-around items-center py-3 z-20  bg-opacity-0 backdrop-blur-md border-b">
        <div
          className="w-16 flex items-center gap-5 cursor-pointer"
          onClick={irAlInicio}
        >
          <img
            src="/diego.webp"
            alt="Profile Picture"
            className={`rounded-full left-0 w-10 `}
          />
          <p className="whitespace-nowrap text-xl font-bold">
            DevGuide DiegoWorks
          </p>
        </div>
        <div className="hidden lg:flex gap-2">
          <NavLink to="/" className={({ isActive }) => classLinks(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/redux"
            className={() => classLinks(reduxPaths.includes(pathname))}
          >
            Redux
          </NavLink>
          <NavLink
            to="/test"
            className={() => classLinks(testPaths.includes(pathname))}
          >
            Testing
          </NavLink>
          <NavLink
            to="/react-router"
            className={() => classLinks(routerPaths.includes(pathname))}
          >
            Router
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
