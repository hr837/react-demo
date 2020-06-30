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

/**
 * Todo action types
 */
export enum ActionTypes {
  /**
   * 添加todo
   */
  ADD_TODO,
  /**
   * 改变todo状态
   */
  TOGGLE_TODO,
  /**
   * 获取服务器数据
   */
  GET_TODO_LIST,
}

interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  /**
   * 添加的todo信息
   */
  text: string;
}

interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  /**
   * 点击的todo列表索引
   */
  index: number;
}

interface GetTodoList {
  type: ActionTypes.GET_TODO_LIST;
  /**
   * 服务器获取的todo数据
   */
  data: TodoInfo[];
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | GetTodoList;
