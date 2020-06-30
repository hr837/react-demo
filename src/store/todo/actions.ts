import { ActionTypes, TodoInfo } from "./type";

export function addTodo(text: string) {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}

export function toggleTodo(index: number) {
  return { type: ActionTypes.TOGGLE_TODO, index };
}

export function getTodoList(data: TodoInfo[]) {
  return { type: ActionTypes.GET_TODO_LIST, data };
}
