import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@/assets/styles/index.less";
import InitStore from "./store";
import RouterApp from "./router";

const store = InitStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
