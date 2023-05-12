import React from "react";
import ReactDOM from "react-dom/client";
import { ContextApi } from "./Files/Contextapi";
import Dashboard from "./Dashboard";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextApi>
      <Dashboard />
    </ContextApi>
  </React.StrictMode>
);
