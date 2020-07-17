import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SideLayout from "@/layouts/side-layout";
import Login from "@/pages/login";
import NotFount from "@/pages/not-found";
import SimpleLayout from "@/layouts/simple-layout";
import todos from "@/pages/todos";

import InfoRoutes from "./info.routes.config";
import BlankLayout from "@/layouts/blank-layout";

export default class RouterApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/workspace" component={SideLayout}></Route>
          <Route path="/info" component={SimpleLayout}></Route>
          <Route path="/not-found" exact component={NotFount}></Route>
          <Route path="/" component={BlankLayout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
