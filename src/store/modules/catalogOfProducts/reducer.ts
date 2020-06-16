import produce from "immer";
import { TypeOfProdutos } from "../../../types/data";
import {
  actionOfCatalog,
  CatalogOfProdutcsReduxType,
} from "../../../types/redux";

const INITIAL_STATE: TypeOfProdutos = {} as TypeOfProdutos;

export default function user(state = INITIAL_STATE, action: actionOfCatalog) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CatalogOfProdutcsReduxType.SET_ALL_PRODUCTS: {
        draft = action.payload;
        break;
      }
      default:
    }
  });
}
