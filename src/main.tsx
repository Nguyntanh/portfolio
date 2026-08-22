import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
