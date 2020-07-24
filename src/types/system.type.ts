export type ResourceInfo = {
  id: number;
  type: "Module" | "Sub" | "Menu";
  name: string;
  path: string;
  parentId: number | null;
  icon?: string;
};

export type WorkMenuItemType = {
  children?: ResourceInfo[];
} & ResourceInfo;
