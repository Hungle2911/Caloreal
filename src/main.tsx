import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StatsProvider } from "./contexts/StatsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StatsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StatsProvider>
  </React.StrictMode>
);
