import { PropertsOfOpenDrawer } from "../hooks";

export type TypesButtonTheme = {
  toggleTheme: () => void;
  titleOfCurrentTheme: string;
};

export type TypesHeader = TypesButtonTheme & {
  openDrawer: PropertsOfOpenDrawer;
};

export type TypeHeaderDrawer = {
  closeDrawer: () => void;
  typeOfDrawerOpened: string;
};

export type TypeDrawer = {
  isDrawerVisible: boolean;
} & TypeHeaderDrawer;

export enum typeOfDrawer {
  SearchOfProducts = "SearchOfProducts",
  ShoppingBag = "ShoppingBag",
}
