import React from "react";
import ReactDOM from "react-dom/client";
import { CountriesApp } from "./components/CountriesApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountriesApp />
  </React.StrictMode>
);
