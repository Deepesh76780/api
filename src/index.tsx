import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
