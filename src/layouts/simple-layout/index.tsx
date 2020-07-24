import React from "react";
import {
  withRouter,
  RouteComponentProps,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import InfoRoutes from "@/router/info.routes";

import "./index.less";
import { Layout } from "antd";
import FooterInfo from "@/components/workspace/footer-info";
import HeaderLeft from "@/components/workspace/header-left";

const SimpleLayout = (props: RouteComponentProps) => {
  const { match, history } = props;

  history.listen((data) => {
    console.log(data);
  });

  return (
    <Layout className="simple-layout">
      <Layout.Header>
        <HeaderLeft />
      </Layout.Header>
      <Layout>
        <Layout.Content>
          <Switch>
            {InfoRoutes.map((x, index) => (
              <Route {...x} key={index} />
            ))}
            <Redirect to="/not-found" from={match.path} />
          </Switch>
        </Layout.Content>
        <Layout.Footer className="footer">
          <FooterInfo />
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default withRouter(SimpleLayout);
