import { RouteConfig } from "./types";
/******* pages ******/
import Todos from "@/pages/todos";
import Dashboard from "@/pages/dashboard";

const routeConfigs: Array<RouteConfig> = [
  { path: "/info/todos", component: Todos, label: "Todo" },
  { path: "/info/index", component: Dashboard, label: "主页" },
];

export default routeConfigs;
