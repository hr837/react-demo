import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import BasicLayout from "@/layouts/basic-layout";
import Login from "@/pages/login";
import PageRoutes from "./page-routes.config";
import RouterCheck from "./RouterCheck";

export default class RouterApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RouterCheck} />
          <Route path="/login" component={Login} />

          <Route path="/">
            <BasicLayout>
              {PageRoutes.map((config, index) => (
                <Route
                  key={index}
                  path={config.path}
                  component={config.component}
                />
              ))}
            </BasicLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
