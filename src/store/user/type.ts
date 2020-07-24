import { ResourceInfo } from "@/types/system.type";

export type UserInfo = {
  resources: ResourceInfo[];
  token: string;
};

export enum ActionType {
  /**
   * 更新资源
   */
  UPDATE_RESOURCE,
  /**
   * 设置token
   */
  SET_TOKEN,
}

/* actions */
interface UpdateResource {
  type: ActionType.UPDATE_RESOURCE;
  resources: ResourceInfo[];
}

interface SetToken {
  type: ActionType.SET_TOKEN;
  token: string;
}

export type UserAction = UpdateResource | SetToken;
