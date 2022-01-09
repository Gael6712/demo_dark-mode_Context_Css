import React from "react";
import ReactDOM from "react-dom";
import "./scss/style.scss";
import App from "./App";
import ThemeContextProvider from "./Context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
