import { RouteProps } from "react-router-dom";

/******* pages ******/
import login from "@/pages/login";

const routeConfigs: Array<RouteProps & { label: string }> = [
  {
    path: ["/", "/login", "/index"],
    exact: true,
    component: login,
    label: "用户登录",
  },
];

export default routeConfigs;
