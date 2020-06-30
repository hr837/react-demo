import { RouteProps } from "react-router-dom";

/******* pages ******/
import Todos from "@/pages/todos";
import Dashboard from "@/pages/dashboard";

const routeConfigs: Array<RouteProps & { label: string }> = [
  { path: "/todos", component: Todos, label: "Todo" },
  { path: "/dashboard", component: Dashboard, label: "主页" },
];

export default routeConfigs;
