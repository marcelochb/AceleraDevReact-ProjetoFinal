import React from 'react';
import './styles.scss';
import { TypeOfProduct } from '../../types/components';
import { Link } from 'react-router-dom';
import { NoImage } from '../NoImage';
import { PriceOfProduct } from '../PriceOfProduct';

export const Product: React.FC<TypeOfProduct> = ({ product }) => {
  return (
    // <div className="product__list">
    <section className={`product${product.image ? '' : ' no-image'}`}>
      <Link to={`/produto/${product.code_color}`}>
        <div className="product__content">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
              <NoImage />
            )}
          {product.on_sale ? (
            <div className="price__off">{`- ${product.discount_percentage}`}</div>
          ) : (
              <></>
            )}
          <div className="product__footer">
            <div className="product__name">{product.name}</div>
            <PriceOfProduct
              regularPrice={product.regular_price}
              actualPrice={product.actual_price}
              onSale={product.on_sale}
            />
          </div>
        </div>
      </Link>
    </section>
    // </div>
  );
}
