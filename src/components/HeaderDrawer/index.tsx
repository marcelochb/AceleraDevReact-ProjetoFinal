import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import { TypeHeaderDrawer, typeOfDrawer } from '../../types/components';
export const HeaderDrawer: React.FC<TypeHeaderDrawer> = ({
  closeDrawer,
  typeOfDrawerOpened
}) => {
  return (
    <header className="header__drawer">
      <div className="container">
        <button
          onClick={closeDrawer}
        >
          <FontAwesomeIcon icon={faArrowLeft} />

        </button>
        <text>{
          typeOfDrawerOpened === typeOfDrawer.ShoppingBag
            ? 'Sacola (0)'
            : 'Buscar Produtos'
        }</text>
      </div>
    </header>
  );
}
