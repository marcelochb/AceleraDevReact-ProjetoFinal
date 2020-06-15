import React from 'react';


import './styles.scss';
import { TypeDrawer } from '../../types/components';
import { HeaderDrawer } from '../HeaderDrawer';

export const Drawer: React.FC<TypeDrawer> = ({
  isDrawerVisible,
  toggleDrawerVisible
}) => {


  return (
    <div className={`drawer ${isDrawerVisible ? 'drawer--is-visible' : ''}`}>
      <HeaderDrawer toggleDrawerVisible={toggleDrawerVisible} />

      <div className="drawer__content">

      </div>
    </div>
  );
};

