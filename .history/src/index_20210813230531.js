import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
