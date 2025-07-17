import { NavLink } from "react-router-dom";

type NavButtonProps = {
  linkButton: string;
  nameButton: string;
};

const NavButton = ({ linkButton, nameButton }: NavButtonProps) => {
  return (
    <NavLink
      to={linkButton}
      className="bg-slate text-primary hover:text-slate hover:bg-primary py-2 px-4 rounded-3xl font-bold transition duration-900 "
    >
      {nameButton}
    </NavLink>
  );
};

export default NavButton;
