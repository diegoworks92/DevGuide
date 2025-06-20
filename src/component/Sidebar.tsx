import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const classLinks = ({ isActive }: { isActive: boolean }) =>
    ` ${
      isActive ? "text-red-500 font-bold" : "text-gray-500"
    } hover:text-blue-500 transition duration-300`;
  return (
    <div className=" bg-gray-900 w-1/5 h-full fixed pt-20 px-10">
      <div className=" flex flex-col">
        <h1>Documentation</h1>
        <NavLink to="/react-router" className={classLinks}>
          React Router
        </NavLink>
        <NavLink to="/navlink-tw" className={classLinks}>
          NavLink + Tailwind
        </NavLink>
        <NavLink to="/navlink-css" className={classLinks}>
          NavLink + Css
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
