import { RouteProps } from "react-router-dom";

/******* pages ******/
import CaseList from "@/pages/nav1/case-list";
import Users from "@/pages/nav1/users";
import Customer from "@/pages/customer";
import AllCase from "@/pages/all-case";
import AwaitDistribution from "@/pages/await-distribution";
import CollectionCase from "@/pages/my/collection-case";

const routeConfigs: Array<RouteProps> = [
  {
    path: "/workspace/my/data/customer",
    exact: true,
    component: Customer,
  },
  {
    path: "/workspace/my/data/case-list",
    exact: true,
    component: CaseList,
  },
  {
    path: "/workspace/collection/case-manage/all",
    exact: true,
    component: AllCase,
  },
  {
    path: "/workspace/collection/case-manage/await-distribution",
    exact: true,
    component: AwaitDistribution,
  },
  {
    path: "/workspace/my/task/collection-case",
    exact: true,
    component: CollectionCase,
  },
];

export default routeConfigs;
