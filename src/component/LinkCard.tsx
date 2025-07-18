import React, { useState, useEffect, useRef } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isExpanded &&
        cardRef.current &&
        !cardRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  const visibleLinks = isExpanded ? links : links.slice(0, 4);
  const hasExtra = links.length > 4;

  return (
    <div
      ref={cardRef}
      className="border border-white rounded-2xl py-2 px-4 w-64 sm:w-56 min-h-[220px] flex flex-col transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <hr className="border-slate mt-0 mb-4" />
      <ul className="list-disc list-outside pl-5 space-y-1 text-gray-300 mb-3">
        {visibleLinks.map((link) => (
          <li key={link.to} className="hover:text-accent">
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      {hasExtra && (
        <button
          onClick={toggleExpand}
          className="text-sm text-secondary hover:text-accent font-medium self-start mt-auto"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
};

export default LinkCard;
