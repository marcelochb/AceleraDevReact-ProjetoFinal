import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import { TypeHeaderDrawer } from '../../types/components';
export const HeaderDrawer: React.FC<TypeHeaderDrawer> = ({
  toggleDrawerVisible
}) => {
  return (
    <header className="header__drawer">
      <div className="container">
        <button
          onClick={toggleDrawerVisible}
        >
          <FontAwesomeIcon icon={faArrowLeft} />

        </button>
        <text>Sacola de compras (0)</text>
      </div>
    </header>
  );
}
