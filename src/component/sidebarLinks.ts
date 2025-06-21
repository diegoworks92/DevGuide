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

// React Router: enlaces + paths
export const routerLinks: LinkItem[] = [
  { to: "/react-router", label: "Link" },
  { to: "/navlink-tw", label: "NavLink + Tailwind" },
  { to: "/navlink-css", label: "NavLink + Css" },
];
export const routerPaths: string[] = [
  "/react-router",
  "/navlink-tw",
  "/navlink-css",
];

// Testing: enlace + paths
export const testLinks: LinkItem[] = [{ to: "/test", label: "Testing" }];
export const testPaths: string[] = ["/test"];

/* export const reduxLinks = [
  { to: "/redux-toolkit", label: "Redux Toolkit" },
  { to: "/redux-thunk", label: "Redux Thunk" },
];

export const routerLinks = [
  { to: "/react-router", label: "Link" },
  { to: "/navlink-tw", label: "NavLink + Tailwind" },
  { to: "/navlink-css", label: "NavLink + Css" },
];

export const testLinks = [{ to: "/test", label: "Testing" }];
 */
