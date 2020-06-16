import React from "react";

import "./styles.scss";
import { TypePriceOfProduct } from "../../types/components";

export const PriceOfProduct: React.FC<TypePriceOfProduct> = ({
  actualPrice,
  onSale,
  regularPrice
}) => (
    <div className="product__price">
      {actualPrice}
      {onSale ? <span>{regularPrice}</span> : <></>}
    </div>
  );
