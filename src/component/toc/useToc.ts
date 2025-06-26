import { useContext } from "react";
import { TocContext } from "./TocProvider";

export function useToc() {
  const ctx = useContext(TocContext);
  if (!ctx) throw new Error("useToc must be used inside TocProvider");
  return ctx;
}
