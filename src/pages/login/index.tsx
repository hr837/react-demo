import React from "react";

import { Form, Input, Button } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MobileOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./index.less";
import { RouteComponentProps, withRouter } from "react-router-dom";

type StateType = {
  verifyCodeMode: boolean;
  timeOut: number;
};

class Login extends React.Component<RouteComponentProps, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      verifyCodeMode: false,
      timeOut: 0,
    };
  }

  private onFinish(data) {
    console.log(data);
    // console.log(this.props);
    // this.props.history.replace("/todos");
    localStorage.setItem("isLogin", "123");
    this.props.history.replace("/");
  }

  private changeVerifyMode() {
    this.setState((state) => ({
      verifyCodeMode: !state.verifyCodeMode,
    }));
  }

  private get verifyTypeText() {
    const { verifyCodeMode } = this.state;
    return verifyCodeMode ? "使用密码登录" : "使用验证码登录";
  }

  private getCode() {
    this.setState({
      timeOut: 10,
    });
  }

  private renderGetCode() {
    const { timeOut } = this.state;

    if (timeOut) {
      return (
        <Button type="link" disabled size="small">
          {timeOut + "后重试"}
        </Button>
      );
    }

    return (
      <Button type="link" size="small" onClick={this.getCode.bind(this)}>
        获取验证码
      </Button>
    );
  }

  private renderVerifyInput() {
    const { verifyCodeMode } = this.state;

    if (verifyCodeMode) {
      return (
        <Form.Item name="verifycode">
          <Input
            placeholder="请输入验证码"
            prefix={<MessageOutlined />}
            suffix={this.renderGetCode()}
          />
        </Form.Item>
      );
    }
    return (
      <Form.Item name="password">
        <Input.Password
          placeholder="请输入密码"
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
    );
  }

  public render() {
    return (
      <div className="login">
        <div className="login-wrapper">
          <Form onFinish={this.onFinish.bind(this)} size="large">
            <Form.Item name="phone">
              <Input
                type="tel"
                placeholder="请输入手机号"
                prefix={<MobileOutlined />}
              />
            </Form.Item>
            {this.renderVerifyInput()}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
          <div className="bottom-action">
            <Button type="link" onClick={this.changeVerifyMode.bind(this)}>
              {this.verifyTypeText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
