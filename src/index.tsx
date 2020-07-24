import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "@/assets/styles/index.less";
import InitStore from "./store";
import RouterApp from "./router";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = InitStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
