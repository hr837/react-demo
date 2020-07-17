import React from "react";

import { withRouter, RouteComponentProps } from "react-router";

class RouterCheck extends React.Component<RouteComponentProps> {
  componentWillMount() {
    if (!localStorage.getItem("isLogin")) {
      this.props.history.replace("/login");
    } else {
      this.props.history.replace("/dashboard");
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(RouterCheck);
