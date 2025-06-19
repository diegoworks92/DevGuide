import { NavLink } from "react-router-dom";

const Nav = () => {
  const irAlInicio = () => {
    window.scrollTo(0, 0);
  };

  const classLinks = ({ isActive }: { isActive: boolean }) =>
    ` ${
      isActive ? "text-red-500 font-bold" : "text-gray-500"
    } hover:text-blue-500 transition duration-300`;
  return (
    <header className={`z-50 flex flex-nowrap justify-around`}>
      <nav className="fixed gap-36 sm:gap-96 lg:gap-52 w-[90%] xl:w-[80%] top-0 flex justify-between items-center py-3 z-20 dark:text-white dark:bg-transparent bg-opacity-0 dark:bg-opacity-80 backdrop-blur-md ">
        <div
          className="ml-2 pl-5 w-16 flex items-center gap-5 cursor-pointer"
          onClick={irAlInicio}
        >
          <img
            src="../../public/diego.webp"
            alt="Profile Picture"
            className={`rounded-full absolute left-0 w-10 `}
          />
          <p className="ml-10 text-green01 dark:text-magentaD whitespace-nowrap text-xl font-bold">
            DevGuide DiegoWorks
          </p>
        </div>

        <div className="flex gap-2">
          <NavLink to="/" className={classLinks}>
            Home
          </NavLink>
          <NavLink to="/redux" className={classLinks}>
            Redux
          </NavLink>
          <NavLink to="/test" className={classLinks}>
            Testing
          </NavLink>
          <NavLink to="/react-router" className={classLinks}>
            Router
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
