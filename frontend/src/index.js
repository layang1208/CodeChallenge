import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Patients from "./Pages/Patients";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Patients />
  </React.StrictMode>,
  document.getElementById("root")
);
