import React from "react";
import "./shared/css/global.css";
import ReactDOM from "react-dom/client";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode children={<App />} />
);
