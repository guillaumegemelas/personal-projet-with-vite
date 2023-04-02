import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//pour installer Bootstrap projet react with vite
// yarn add react-bootstrap bootstrap
//puis import avec ligne ci dessous
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
