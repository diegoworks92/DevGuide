// src/sidebarLinks.ts

export interface LinkItem {
  to: string;
  label: string;
}

// State Management: enlaces + paths
export const stateManagementLinks: LinkItem[] = [
  { to: "/redux-toolkit", label: "Redux Toolkit" },
  { to: "/redux-thunk", label: "Redux Thunk" },
  { to: "/zustand", label: "Zustand" },
];
// todas las rutas que consideras “State Management”
export const stateManagementPaths: string[] = [
  "/redux-toolkit",
  "/redux-thunk",
  "/zustand",
];

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

// Data Fetching: enlaces + paths
export const dataFetchingLinks: LinkItem[] = [
  { to: "/basic-fetch", label: "Basic Fetch" },
  { to: "/advanced-fetch", label: "Advanced Fetch" },
  { to: "/react-query", label: "React Query" },
  { to: "/axios", label: "Axios" },
];
export const dataFetchingPaths: string[] = [
  "/basic-fetch",
  "/advanced-fetch",
  "/react-query",
  "/axios",
];

// Styling": enlaces + paths
export const stylingLinks: LinkItem[] = [{ to: "/sass", label: "Sass" }];
export const stylingPaths: string[] = ["/sass"];
