import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";

const ThemeContext = createContext("light");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext.Provider value={"theme"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
