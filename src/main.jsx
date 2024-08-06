import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GeralStyle from "./GeralStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeralStyle />
    <App />
  </React.StrictMode>
);
