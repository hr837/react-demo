import { ADD_TODO, TOGGLE_TODO } from "./type";

export function addTodo(text: string) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}
