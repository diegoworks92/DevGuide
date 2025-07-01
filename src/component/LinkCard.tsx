import React from "react";
import { NavLink } from "react-router-dom";

type LinkItem = {
  label: string;
  to: string;
};

type LinkCardProps = {
  title: string;
  links: LinkItem[];
};

const LinkCard: React.FC<LinkCardProps> = ({ title, links }) => {
  return (
    <div className=" border border-[#4EC9B0] rounded-2xl p-2 w-52">
      <h3 className="text-xl font-semibold mb-2 text-[#4EC9B0]">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-300 ">
        {links.map((link) => (
          <li key={link.to} className="hover:text-[#4EC9B0]">
            <NavLink to={link.to} className="hover:underline">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkCard;
