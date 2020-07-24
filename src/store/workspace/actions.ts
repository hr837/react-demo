import { ActionTypes } from "./type";

export function toggleModule(module: string) {
  return {
    type: ActionTypes.TOGGLE_MODULE,
    module,
  };
}

export function toggleMenu(path: string) {
  return {
    type: ActionTypes.TOGGLE_MENU,
    path,
  };
}
