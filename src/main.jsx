import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as THREE from "three";

// Router
import { BrowserRouter } from "react-router-dom";

// Global styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
