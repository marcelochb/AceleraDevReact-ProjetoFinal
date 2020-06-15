import React from 'react';


import './styles.scss';
import { TypeDrawer, typeOfDrawer } from '../../types/components';
import { HeaderDrawer } from '../HeaderDrawer';
import { ShoppingBag } from '../ShoppingBag';
import { SearchProducts } from '../SearchProducts';

export const Drawer: React.FC<TypeDrawer> = ({
  isDrawerVisible,
  closeDrawer,
  typeOfDrawerOpened,
}) => {


  return (
    <div className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}>
      <HeaderDrawer closeDrawer={closeDrawer} typeOfDrawerOpened={typeOfDrawerOpened} />

      <div className="drawer__content">
        {typeOfDrawerOpened === typeOfDrawer.ShoppingBag && <ShoppingBag />}
        {typeOfDrawerOpened === typeOfDrawer.SearchOfProducts && <SearchProducts />}
      </div>
    </div>
  );
};

