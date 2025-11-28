import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Green } from "./screens/Green/Green";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Green />
  </StrictMode>,
);
