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
    `block ${
      isActive ? "text-secondary font-bold" : "text-zinc-400"
    } hover:text-white transition`;

  return (
    <div className="flex flex-col mb-6">
      {/* Título del grupo: cambia de color si isActiveSection */}
      <h2
        className={`-ml-4 mb-2 text-lg font-semibold ${
          isActiveSection ? "text-secondary" : "text-primary"
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
      <hr className="border-slate mt-4" />
    </div>
  );
};

export default Menu;
