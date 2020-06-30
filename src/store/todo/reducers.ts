import { TodoActionTypes, TodoInfo, ActionTypes } from "./type";

export function todoReducer(state: TodoInfo[] = [], action: TodoActionTypes) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case ActionTypes.TOGGLE_TODO:
      return state.map((todo: TodoInfo, index: number) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    case ActionTypes.GET_TODO_LIST:
      return [...action.data];
    default:
      return state;
  }
}
