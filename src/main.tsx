import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { TocProvider } from "./component/toc/TocProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <TocProvider>
        <App />
      </TocProvider>
    </HashRouter>
  </StrictMode>
);
