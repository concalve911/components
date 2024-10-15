import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.html";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("main");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  Чистый синтаксис react без JSX
// const title = React.createElement("h1", null, "Hello React");
// const text = React.createElement("p", null, "React is Cool");
// const block = React.createElement("div", null, title, text);
