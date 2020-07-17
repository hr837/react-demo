import React from "react";
import LogoImg from "@/assets/images/logo.jpg";
import "./index.less";

const HeaderLeft = () => {
  return (
    <div className="logo">
      <img src={LogoImg} className="logo-img" />
      <span className="sys-name">仲裁系统</span>
    </div>
  );
};

export default HeaderLeft;
