import React from "react";
import "./App.css";
import Todos from "./pages/todos";

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}
