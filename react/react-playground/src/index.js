import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import(/* webpackChunkName: "my-chunk-name" */ './components/widget')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
