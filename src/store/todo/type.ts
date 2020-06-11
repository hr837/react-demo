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

interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  index: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
