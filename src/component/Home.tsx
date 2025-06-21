import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="">
      <Nav />
      {/* Sidebar de escritorio: visible desde xl en adelante */}
      <div className="hidden 2xl:block">
        <Sidebar />
      </div>

      {/* Aquí se renderizan las subrutas como Redux, ReactRouter, etc. */}
      <main className="flex-grow mt-10 p-4 flex flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
