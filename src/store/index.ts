import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todoReducer } from "./todo/reducers";

/**
 * 合并所有reducer
 */
const rootReducers = combineReducers({
  todo: todoReducer,
});

/**
 * store type
 */
export type AppState = ReturnType<typeof rootReducers>;

/**
 * 初始化store
 */
export default function initStore() {
  const store = createStore(rootReducers, composeWithDevTools());
  return store;
}
