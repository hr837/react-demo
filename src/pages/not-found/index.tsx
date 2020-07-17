import React from "react";
import { Result, Button } from "antd";

import "./index.less";

const NotFount = () => {
  return (
    <Result
      className="not-found"
      status="404"
      title="404"
      subTitle="您访问的页面不存在"
      extra={<Button type="primary">返回</Button>}
    />
  );
};

export default NotFount;
