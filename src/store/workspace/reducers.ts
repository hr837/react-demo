import { MenuInfo, ActionTypes, MenuAction } from "./type";

const initalState: MenuInfo = {
  module: "nav1",
  path: "",
};

export function workspaceReducer(
  state: MenuInfo = initalState,
  action: MenuAction
) {
  const tmpState = { ...state };

  switch (action.type) {
    case ActionTypes.TOGGLE_MODULE:
      tmpState.module = action.module;
      break;
    case ActionTypes.TOGGLE_MENU:
      tmpState.path = action.path;
      break;
  }

  return tmpState;
}
