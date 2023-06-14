import React from "react";
import ReactDOM from "react-dom/client";
import { ContextApi } from "./Files/Contextapi";
import Dashboard from "./Dashboard";
import "./index.css";
import { CartProvider } from "./context/CartProvider";
//import LoginPage from "./Files/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextApi>
      <CartProvider>
        {/* <LoginPage /> */}
        <Dashboard />
      </CartProvider>
    </ContextApi>
  </React.StrictMode>
);
