import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Alert } from "antd";
import {
  withRouter,
  RouteComponentProps,
  useLocation,
  useHistory,
} from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderLeft from "@/components/workspace/header-left";
import SideMenu from "./SideMenu";
import { AppState } from "@/store";
import { ResourceInfo } from "@/types/system.type";
import { useSelector } from "react-redux";
import LayoutRoute from "./LayoutRoute";

import "./index.less";

const { Header, Content, Sider } = Layout;

function SideLayout() {
  const [sub, updateSub] = useState<ResourceInfo | null>(null);
  const [module, updateModule] = useState<ResourceInfo>();
  const [menu, updateMenu] = useState<ResourceInfo>();

  const resources = useSelector((state: AppState) => {
    return state.user.resources;
  });

  const { pathname } = useLocation();
  const history = useHistory();

  // 初始化菜单
  useEffect(() => {
    if (menu && menu.path === pathname) return;

    const currentMenu = resources.find(
      (x) => x.type === "Menu" && x.path === pathname
    );

    // 对输入的不存在的地址进行跳转
    if (!currentMenu) {
      history.push("/not-found");
      return;
    }

    updateMenu(currentMenu);

    // 更新sub ? module
    const parent = resources.find((x) => x.id === currentMenu.parentId);

    if (!parent) return;

    // 如果是模块 直接更新并返回
    if (parent.type === "Module") {
      updateModule(parent);
      return;
    }

    if (parent.type === "Menu") {
      Alert({
        message: "菜单配置数据异常，请重新登录",
        type: "error",
      });
      window.localStorage.clear();
      history.replace("/login");
    }
    // 此时一定是sub
    updateSub(parent);

    // 再找出module
    const currentModule = resources.find((x) => x.id === parent.parentId);
    if (!currentModule) return;
    updateModule(currentModule);
  }, [pathname]);

  // 点击顶部模块时先给与标识
  const onModuleClick = (data: ResourceInfo) => {
    updateModule(data);

    const findRes = resources.find((x) => x.parentId === data.id);
    if (!findRes) return;

    // 判断子节点类型，可能是Menu也可能是Sub
    if (findRes.type === "Sub") {
      updateSub(findRes);
      const findMenu = resources.find((x) => x.parentId === findRes.id);
      if (!findMenu) return;
      updateMenu(findMenu);
      history.push(findMenu.path);
    } else {
      updateSub(null);
      updateMenu(findRes);
      history.push(findRes.path);
    }
  };

  // 点击菜单
  const onMenuClick = (path: string) => {
    if (menu && menu.path === path) return;
    const find = resources.find((x) => x.type === "Menu" && x.path === path);
    if (!find) return;
    updateMenu(find);

    // 判断是否需要更改sub
    if (sub && sub.id !== find.parentId) {
      const parent = resources.find((x) => x.id === find.parentId);
      updateSub(parent || null);
    }
    history.push(path);
  };

  const pathResource = [module, sub, menu].filter((x) => !!x) as ResourceInfo[];

  return (
    <Layout className="work-space-layout">
      <Header className="header">
        <HeaderLeft />
        <HeaderMenu
          modulePath={module ? module.path : ""}
          onModuleClick={onModuleClick}
        />
      </Header>
      <Layout>
        <Sider width={200} className="work-sider ">
          <SideMenu
            module={module}
            sub={sub}
            menuPath={menu ? menu.path : ""}
            onMenuClick={onMenuClick}
          />
        </Sider>
        <Layout className="work-right">
          <Breadcrumb>
            {pathResource.map((item) => (
              <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content className="component-warpper ">
            <LayoutRoute />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(SideLayout);
