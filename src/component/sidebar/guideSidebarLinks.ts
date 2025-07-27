import type { LinkItem } from "./docsSidebarLinks";

// State Management
export const guideStateManagementLinks: LinkItem[] = [
  { to: "/guide/todoapp", label: "Guía técnica: TodoApp" },
];

export const guideStateManagementPaths: string[] =
  guideStateManagementLinks.map((l) => l.to);

// Data Fetching
export const guideDataFetchingLinks: LinkItem[] = [
  { to: "/guide/api-methods", label: "Llamadas a APIs" },
];
export const guideDataFetchingPaths: string[] = guideDataFetchingLinks.map(
  (l) => l.to
);

export const allGuideLinks: LinkItem[] = [
  ...guideStateManagementLinks,
  ...guideDataFetchingLinks,
];
