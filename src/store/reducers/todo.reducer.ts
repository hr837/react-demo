import { combineReducers } from "redux";
import {
  TodoInfo,
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
} from "../types/todo";

function todos(state: TodoInfo[] = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, { completed: !item.completed });
        }
        return item;
      });
    default:
      return state;
  }
}

function visibilityFilters(
  state = VisibilityFilters.SHOW_ALL,
  action: {
    type: string;
    index: number;
    filter: VisibilityFilters;
  }
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  visibilityFilters,
});
