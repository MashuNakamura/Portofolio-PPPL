import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import DefaultLayout from "./layout/DefaultLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  </StrictMode>
);
