import React from "react";

import { withRouter, RouteComponentProps } from "react-router";
import BasicLayout from "@/layouts/basic-layout";

class RouterCheck extends React.Component<RouteComponentProps> {
  componentWillMount() {
    if (!localStorage.getItem("isLogin")) {
      this.props.history.replace("/login");
    } else {
      this.props.history.replace("/dashboard");
    }
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(RouterCheck);
