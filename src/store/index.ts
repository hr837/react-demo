import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { todoReducer } from "./todo/reducers";
import { workspaceReducer } from "./workspace/reducers";
import { userReducer } from "./user/reducers";
import storage from "redux-persist/lib/storage";

/**
 * 合并所有reducer
 */
const rootReducers = combineReducers({
  todo: todoReducer,
  workspace: workspaceReducer,
  user: persistReducer({ key: "user", storage }, userReducer),
});

/**
 * store type
 */
export type AppState = ReturnType<typeof rootReducers>;

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducers
);
/**
 * 初始化store
 */
export default function initStore() {
  const store = createStore(persistedReducer, composeWithDevTools());
  const persistor = persistStore(store as any);
  return { store, persistor };
}
