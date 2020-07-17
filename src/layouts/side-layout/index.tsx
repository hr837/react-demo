import React, { PropsWithChildren } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  withRouter,
  RouteProps,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import todos from "@/pages/todos";
import "./index.less";
import HeaderMenu from "@/components/workspace/header-menu";
import HeaderLeft from "@/components/workspace/header-left";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const SideLayout = (props: RouteComponentProps) => {
  const { match } = props;

  return (
    <Layout className="work-space-layout">
      <Header className="header">
        <HeaderLeft />
        <HeaderMenu />
      </Header>
      <Layout>
        <Sider width={200} className="work-sider site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="component-warpper site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/workspace/todos" component={todos} />
              <Redirect to="/not-found" from={match.path} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(SideLayout);
