export type TodoInfo = {
  /**
   * 内容
   */
  text: string;
  /**
   * 完成状态
   */
  completed: boolean;
};

/*
 * action 类型
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * 过滤器类型
 */
export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}
