import React, { ComponentProps, useEffect } from "react";
import "./index.less";
import Menus from "./components/menus";
import { withRouter, useHistory } from "react-router-dom";

import { notification } from "antd";

const BasicLayout = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      history.replace("/");
      notification.error({
        message: "登录状态异常，请重新登录",
      });
    }
  });

  return (
    <section className="basic-layout">
      <div className="header">Header</div>
      <div className="left">
        <Menus />
      </div>
      <div className="main">{props.children}</div>
    </section>
  );
};

export default withRouter(BasicLayout);
