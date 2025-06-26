import { NavLink, useLocation } from "react-router-dom";
import ResponsiveSidebar from "./ResponsiveSidebar";
import {
  stateManagementPaths,
  routerPaths,
  testPaths,
  i18nPaths,
  dataFetchingPaths,
  stylingPaths,
} from "./sidebarLinks";

const Nav = () => {
  const irAlInicio = () => {
    window.scrollTo(0, 0);
  };

  const { pathname } = useLocation();
  const classLinks = (active: boolean) =>
    `mx-4 ${
      active ? "text-[#CE9178] font-bold" : "text-[#4D8ABB]"
    } hover:text-[#956892] transition`;

  return (
    <header className={`z-50 flex flex-nowrap justify-around pb-10`}>
      <nav className="fixed bg-[#1E1E1E] gap-36 sm:gap-96 lg:gap-52 w-full top-0 flex justify-around items-center py-3 z-20  bg-opacity-0 backdrop-blur-md border-b">
        <div
          className="w-16 flex items-center gap-5 cursor-pointer"
          onClick={irAlInicio}
        >
          <img
            src="/diego.webp"
            alt="Profile Picture"
            className={`rounded-full left-0 w-10 `}
          />
          <p className="whitespace-nowrap sm:text-xl font-bold">
            DiegoWorks | DevGuide
          </p>
        </div>
        <div className="hidden xl:flex gap-2">
          <NavLink to="/" className={({ isActive }) => classLinks(isActive)}>
            Home
          </NavLink>

          <NavLink
            to="/redux-toolkit"
            className={() =>
              classLinks(stateManagementPaths.includes(pathname))
            }
          >
            State Management
          </NavLink>

          <NavLink
            to="/react-router"
            className={() => classLinks(routerPaths.includes(pathname))}
          >
            Router
          </NavLink>

          <NavLink
            to="/test"
            className={() => classLinks(testPaths.includes(pathname))}
          >
            Testing
          </NavLink>

          <NavLink
            to="/i18n"
            className={() => classLinks(i18nPaths.includes(pathname))}
          >
            I18n
          </NavLink>

          <NavLink
            to="/basic-fetch"
            className={() => classLinks(dataFetchingPaths.includes(pathname))}
          >
            Data Fetching
          </NavLink>

          <NavLink
            to="/sass"
            className={() => classLinks(stylingPaths.includes(pathname))}
          >
            Styling
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
