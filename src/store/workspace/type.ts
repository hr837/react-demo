/**
 * menu state
 */
export type MenuInfo = {
  module: string;
  path: string;
};

/**
 * Menu action types
 */
export enum ActionTypes {
  /**
   * 改变模块
   */
  TOGGLE_MODULE,
  /**
   * 改变菜单
   */
  TOGGLE_MENU,
}

interface ToggleModule {
  type: ActionTypes.TOGGLE_MODULE;
  /**
   * 当前的菜单模块
   */
  module: string;
}

interface ToggleMenu {
  type: ActionTypes.TOGGLE_MENU;
  /**
   * 当前的菜单路径
   */
  path: string;
}

/**
 * 菜单的action 类型集合
 */
export type MenuAction = ToggleModule | ToggleMenu;
