import type { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type TocEntry = { id: string; heading: string };
type TocContextValue = {
  entries: TocEntry[];
  register: (e: TocEntry) => void;
};

export const TocContext = createContext<TocContextValue | null>(null);

interface Props {
  children: ReactNode;
}
export function TocProvider({ children }: Props) {
  const [entries, setEntries] = useState<TocEntry[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setEntries([]);
  }, [pathname]);

  const register = (entry: TocEntry) => {
    setEntries((prev) =>
      prev.some((e) => e.id === entry.id) ? prev : [...prev, entry]
    );
  };

  return (
    <TocContext.Provider value={{ entries, register }}>
      {children}
    </TocContext.Provider>
  );
}
