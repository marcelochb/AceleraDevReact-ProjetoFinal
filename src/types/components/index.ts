import { PropertsOfOpenDrawer } from "../hooks";
import { TypeOfProdutos } from "../data";

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

export type TypeCatalogOfProducts = {
  products: TypeOfProdutos[];
};

export type TypeOfProduct = {
  product: TypeOfProdutos;
};

export type TypePriceOfProduct = {
  actualPrice: string;
  regularPrice: string;
  onSale: boolean;
};
