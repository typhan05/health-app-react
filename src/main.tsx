import "./sass/style.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
