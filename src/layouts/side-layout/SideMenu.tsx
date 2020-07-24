import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { Menu } from "antd";
import { ResourceInfo, WorkMenuItemType } from "@/types/system.type";
const { SubMenu, Item } = Menu;

type PropType = {
  module?: ResourceInfo;
  sub: ResourceInfo | null;
  menuPath: string;
  onMenuClick: (path: string) => void;
};

/**
 * 工作台布局 左侧菜单
 */
function SideMenu(props: PropType) {
  // 生成菜单数据
  const findChildren = useSelector((state: AppState) => {
    return (id: number) => {
      return state.user.resources.filter((x) => x.parentId === id);
    };
  });
  // 所有菜单数据
  const menuList = useSelector((state: AppState) => {
    return state.user.resources.filter((x) => x.type === "Menu");
  });

  // 当前菜单数据 ， 更新当前菜单
  const [menus, updateMenus] = useState<WorkMenuItemType[]>([]);
  const [subPath, updateSubPath] = useState<string[]>([]);

  // 当前sub
  useEffect(() => {
    let path = "";
    if (props.sub) {
      path = props.sub.path;
    }
    updateSubPath([path]);
  }, [props.sub]);

  // 当菜单变化，需要更新当前展开的菜单
  useEffect(() => {
    const [first] = menuList;
    if (!first) return;
  }, [menuList]);

  // 如果模块变化，需要重新生成菜单
  useEffect(() => {
    if (!props.module) return;
    const { id: moduleId } = props.module;
    const data = findChildren(moduleId).map((x) => {
      const sub = x as WorkMenuItemType;
      sub.children = findChildren(x.id);
      return x;
    });
    updateMenus(data);
  }, [props.module]);

  return (
    <Menu
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      openKeys={subPath}
      selectedKeys={[props.menuPath]}
      onOpenChange={updateSubPath}
      onSelect={({ key }) => props.onMenuClick(key)}
    >
      {menus.map((menuData) => {
        if (menuData.children) {
          return (
            <SubMenu key={menuData.path} title={menuData.name}>
              {menuData.children.map(renderItem)}
            </SubMenu>
          );
        }
        return renderItem(menuData);
      })}
    </Menu>
  );
}

function renderItem(props: ResourceInfo) {
  return <Item key={props.path}>{props.name}</Item>;
}

export default SideMenu;
