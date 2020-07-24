import React from "react";
import { Result, Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./index.less";

function NotFount(props: RouteComponentProps) {
  return (
    <Result
      className="not-found"
      status="404"
      title="404"
      subTitle="您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => props.history.go(-2)}>
          返回
        </Button>
      }
    />
  );
}

export default withRouter(NotFount);
