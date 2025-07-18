import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TocProvider } from "./component/toc/TocProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TocProvider>
        <App />
      </TocProvider>
    </BrowserRouter>
  </StrictMode>
);
