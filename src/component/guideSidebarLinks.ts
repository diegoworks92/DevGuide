import type { LinkItem } from "./sidebarLinks";

export const guideLinks: LinkItem[] = [
  { to: "/guide/api-methods", label: "Llamadas a APIs" },
  // { to: "/guide/otra-guia",   label: "Otra Guía"  },
];

export const guidePaths: string[] = guideLinks.map((l) => l.to);
