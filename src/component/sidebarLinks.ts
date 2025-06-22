// src/sidebarLinks.ts

export interface LinkItem {
  to: string;
  label: string;
}

// Redux: enlaces + paths
export const reduxLinks: LinkItem[] = [
  { to: "/redux", label: "Redux Toolkit" },
  { to: "/redux-thunk", label: "Redux Thunk" },
];
// todas las rutas que consideras “Redux”
export const reduxPaths: string[] = [
  "/redux",
  "/redux-toolkit",
  "/redux-thunk",
];

// Zustand: enlaces + paths
export const zustandLinks: LinkItem[] = [{ to: "/zustand", label: "Zustand" }];
// todas las rutas que consideras “Zustand”
export const zustandPaths: string[] = ["/zustand"];

// React Router: enlaces + paths
export const routerLinks: LinkItem[] = [
  { to: "/react-router", label: "Basic Setup" },
  { to: "/outlet-guide", label: "Outlet" },
  { to: "/navlink-tw", label: "NavLink + Tailwind" },
  { to: "/navlink-css", label: "NavLink + Css" },
];
export const routerPaths: string[] = [
  "/react-router",
  "/outlet-guide",
  "/navlink-tw",
  "/navlink-css",
];

// Testing: enlace + paths
export const testLinks: LinkItem[] = [
  { to: "/test", label: "Unit + Integration" },
];
export const testPaths: string[] = ["/test"];

// I18next: enlace + paths
export const i18nLinks: LinkItem[] = [{ to: "/i18n", label: "I18Next" }];
export const i18nPaths: string[] = ["/i18n"];
