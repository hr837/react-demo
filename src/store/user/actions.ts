import { ResourceInfo } from "@/types/system.type";
import { ActionType } from "./type";

/**
 * 更新用户资源
 */
export function UpdateResource(data: ResourceInfo[]) {
  return {
    type: ActionType.UPDATE_RESOURCE,
    resources: data,
  };
}

/**
 * 更新用户资源
 */
export function SetToken(token: string) {
  return {
    type: ActionType.SET_TOKEN,
    token,
  };
}
