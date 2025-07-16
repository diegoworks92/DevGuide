export interface LinkItem {
  to: string;
  label: string;
}

// State Management
export const stateManagementLinks: LinkItem[] = [
  { to: "/docs/redux-toolkit", label: "Redux Toolkit" },
  { to: "/docs/redux-thunk", label: "Redux Thunk" },
  { to: "/docs/zustand", label: "Zustand" },
  { to: "/docs/use-reducer-basic", label: "useReducer: Basic" },
  { to: "/docs/use-reducer-advanced", label: "useReducer: Advanced" },
  { to: "/docs/context-api-basic", label: "Context API: Basic" },
  { to: "/docs/context-api-advanced", label: "Context API: Advanced" },
  { to: "/docs/use-reducer-context-api", label: "useReducer + Context API" },
];

export const stateManagementPaths: string[] = stateManagementLinks.map(
  (l) => l.to
);

// React Router
export const routerLinks: LinkItem[] = [
  { to: "/docs/react-router", label: "Basic Setup" },
  { to: "/docs/outlet-guide", label: "Outlet" },
  { to: "/docs/navlink-tw", label: "NavLink + Tailwind" },
  { to: "/docs/navlink-css", label: "NavLink + Css" },
];
export const routerPaths: string[] = routerLinks.map((l) => l.to);

// Testing
export const testLinks: LinkItem[] = [
  { to: "/docs/test", label: "Unit + Integration" },
];
export const testPaths: string[] = testLinks.map((l) => l.to);

// I18next
export const i18nLinks: LinkItem[] = [{ to: "/docs/i18n", label: "I18Next" }];
export const i18nPaths: string[] = i18nLinks.map((l) => l.to);

// Data Fetching
export const dataFetchingLinks: LinkItem[] = [
  { to: "/docs/basic-fetch", label: "Basic Fetch" },
  { to: "/docs/advanced-fetch", label: "Advanced Fetch" },
  { to: "/docs/react-query", label: "React Query" },
  { to: "/docs/axios", label: "Axios" },
];
export const dataFetchingPaths: string[] = dataFetchingLinks.map((l) => l.to);

// Styling
export const stylingLinks: LinkItem[] = [
  { to: "/docs/sass", label: "Sass" },
  { to: "/docs/tailwind-css-basic", label: "Tailwind CSS: Basic" },
  { to: "/docs/tailwind-css-advanced", label: "Tailwind CSS: Advanced" },
];
export const stylingPaths: string[] = stylingLinks.map((l) => l.to);
