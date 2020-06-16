import { CatalogOfProdutcsReduxType } from "../../../types/redux";
import { TypeOfProdutos } from "../../../types/data";

export const setAllProductsToGlobalState = (payload: TypeOfProdutos) => {
  return {
    type: CatalogOfProdutcsReduxType.SET_ALL_PRODUCTS,
    payload,
  };
};
