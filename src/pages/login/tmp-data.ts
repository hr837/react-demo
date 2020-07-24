import { ResourceInfo } from "@/types/system.type";

export const UserResources: ResourceInfo[] = [
  {
    name: "我的",
    path: "/workspace/my",
    type: "Module",
    id: 1,
    parentId: null,
  },
  {
    name: "我的数据",
    path: "/workspace/my/data",
    type: "Sub",
    id: 101,
    parentId: 1,
  },
  {
    name: "客户数据",
    path: "/workspace/my/data/customer",
    type: "Menu",
    id: 10101,
    parentId: 101,
  },
  {
    name: "我的案件",
    path: "/workspace/my/data/case-list",
    type: "Menu",
    id: 10102,
    parentId: 101,
  },
  {
    name: "我的待办",
    path: "/workspace/my/task",
    type: "Sub",
    id: 102,
    parentId: 1,
  },
  {
    name: "待催收",
    path: "/workspace/my/task/collection-case",
    type: "Menu",
    id: 10201,
    parentId: 102,
  },
  {
    name: "催收管理",
    path: "/workspace/collection",
    type: "Module",
    id: 2,
    parentId: null,
  },
  {
    name: "案件管理",
    path: "/workspace/collection/case-manage",
    type: "Sub",
    id: 201,
    parentId: 2,
  },
  {
    name: "所有案件",
    path: "/workspace/collection/case-manage/all",
    type: "Menu",
    id: 20101,
    parentId: 201,
  },
  {
    name: "待分配",
    path: "/workspace/collection/case-manage/await-distribution",
    type: "Menu",
    id: 20102,
    parentId: 201,
  },
];
