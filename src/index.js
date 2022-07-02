import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import GlobalCSS from "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
