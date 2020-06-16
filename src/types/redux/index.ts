import { TypeOfProdutos } from "../data";

export enum CatalogOfProdutcsReduxType {
  SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS",
}

export type actionOfCatalog = {
  payload: TypeOfProdutos;
  type: string;
};
