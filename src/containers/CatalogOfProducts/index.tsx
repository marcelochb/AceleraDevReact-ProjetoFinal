import React from 'react';
import './styles.scss';
import { TypeCatalogOfProducts } from '../../types/components';
import { Product } from '../../components';

export const CatalogOfProducts: React.FC<TypeCatalogOfProducts> = ({ products }) => {
  return (
    <>
      <div className="container">
        <main className="products">
          <div className="products__quantity">
            <p>{`${products.length} items`}</p>
          </div>
          <div className="products__items">
            {products.map((product, key) => (
              <Product key={key} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
