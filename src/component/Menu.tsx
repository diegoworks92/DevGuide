import { NavLink } from "react-router-dom";

export interface LinkItem {
  to: string;
  label: string;
}

export interface MenuProps {
  title: string;
  links: LinkItem[];
  onItemClick?: () => void;
  isActiveSection?: boolean;
}

const Menu = ({
  title,
  links,
  onItemClick,
  isActiveSection = false,
}: MenuProps) => {
  // clase para cada enlace
  const classLinks = ({ isActive }: { isActive: boolean }) =>
    `pl-4 block ${
      isActive ? "text-red-500 font-bold" : "text-gray-500"
    } hover:text-blue-500 transition`;

  return (
    <div className="flex flex-col mb-6">
      {/* Título del grupo: cambia de color si isActiveSection */}
      <h2
        className={`-ml-4 mb-2 text-lg font-semibold ${
          isActiveSection ? "text-red-500" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Lista de enlaces */}
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onItemClick}
          className={classLinks}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
