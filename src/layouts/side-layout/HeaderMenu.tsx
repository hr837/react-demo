import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { ResourceInfo } from "@/types/system.type";

type PropsType = {
  modulePath: string;
  onModuleClick: (data: ResourceInfo) => void;
};

function HeaderMenu(props: PropsType) {
  const menuList = useSelector((state: AppState) => {
    return state.user.resources.filter((x) => x.type === "Module");
  });

  const onMenuClick = (key: string) => {
    if (key === props.modulePath) return;
    const find = menuList.find((x) => x.path === key);
    if (!find) return;
    props.onModuleClick(find);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[props.modulePath]}
      onSelect={(data) => onMenuClick(data.key)}
    >
      {menuList.map((item) => (
        <Menu.Item key={item.path}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );
}

export default HeaderMenu;
