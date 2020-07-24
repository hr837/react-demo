import React from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

import SimpleRoutes from "@/router/simple.routes";

const BlankLayout = () => {
  return (
    <Layout>
      <Layout.Content>
        <Switch>
          {SimpleRoutes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/not-found" />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};

export default BlankLayout;
