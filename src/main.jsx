import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToggleContextProvider from "./context/ToggleContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </StrictMode>
);
