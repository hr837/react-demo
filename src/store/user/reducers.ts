import { UserInfo, ActionType, UserAction } from "./type";

const initalState: UserInfo = {
  resources: [],
  token: "",
};

export function userReducer(state = initalState, action: UserAction) {
  const tmpState = { ...state };
  switch (action.type) {
    case ActionType.UPDATE_RESOURCE:
      tmpState.resources = action.resources;
      break;
    case ActionType.SET_TOKEN:
      tmpState.token = action.token;
      break;
  }
  return tmpState;
}
