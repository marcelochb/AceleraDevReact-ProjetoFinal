import React from 'react';
import { useFetchProducts } from '../../utils/hooks/useFetchProducts';
import { Loading } from '../../components';
import { CatalogOfProducts } from '../../containers/CatalogOfProducts';


export const CatalogOfProductsRoute: React.FC = () => {
  const { getProducts } = useFetchProducts();

  return (
    <React.Fragment>
      {getProducts.isLoading
        ? <Loading />
        : <CatalogOfProducts products={getProducts.catalogOfProducts} />}
    </React.Fragment>
  );
}
