import React from "react";
import { NavLink } from "react-router-dom";
import { MdLink, MdBook, MdSchool, MdQuiz } from "react-icons/md";

interface RelatedContentProps {
  links: {
    label: string;
    href: string;
    external?: boolean;
    type?: "doc" | "guide" | "test";
  }[];
}

const getIconForType = (type?: string) => {
  switch (type) {
    case "doc":
      return <MdBook className=" shrink-0" />;
    case "guide":
      return <MdSchool className=" shrink-0" />;
    case "test":
      return <MdQuiz className=" shrink-0" />;
    default:
      return <MdLink className="text-gray-400 shrink-0" />;
  }
};

const RelatedContent: React.FC<RelatedContentProps> = ({ links }) => {
  if (!links.length) return null;

  return (
    <div className="mt-10 mb-6">
      <h2 className="scroll-mt-20 text-xl font-semibold mb-4 flex items-center gap-2 text-accent">
        <MdLink />
        Recursos relacionados
      </h2>

      <div className="rounded-lg bg-dark">
        <ul className="flex flex-col sm:flex-row gap-2 flex-wrap">
          {links.map((link, i) => (
            <li key={i}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded border border-accent text-accent hover:text-secondary hover:border-secondary transition"
                >
                  {getIconForType(link.type)}
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded border border-accent text-accent hover:text-secondary hover:border-secondary transition"
                >
                  {getIconForType(link.type)}
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedContent;

/* 
Ejemplo de uso:
  <RelatedContent
    links={[
      {
        label: "Documentación: Advanced Fetch",
        href: "/docs/advanced-fetch",
        type: "doc",
      },
      {
        label: "Guía sobre API Methods",
        href: "/guide/api-methods",
        type: "guide",
      },
      { label: "Test sobre Hooks", href: "/docs/test", type: "test" },
      {
        label: "React Query Docs",
        href: "https://tanstack.com/query/v4",
        external: true,
      },
    ]}
  />
*/
