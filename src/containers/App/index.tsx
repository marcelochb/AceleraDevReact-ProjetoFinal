import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header, Drawer } from '../../components';
import './styles.scss';
import { usePersistedTheme, useDrawer } from '../../utils/hooks';
import { Routes } from '../../routes';
export const App = () => {
  const { toggleTheme, titleOfCurrentTheme } = usePersistedTheme({ initialTypeOfTheme: 'Dark', keyOfLocalStorageToTheme: 'theme' })
  const { getUseDrawer, handleUseDrawer } = useDrawer();
  return (
    <div className={`app ${getUseDrawer.drawerIsVisible ? 'app--is-drawer-visible' : ''}`}>
      <BrowserRouter>
        <Header
          toggleTheme={toggleTheme}
          titleOfCurrentTheme={titleOfCurrentTheme}
          openDrawer={handleUseDrawer.openDrawer}
        />
        <Drawer
          isDrawerVisible={getUseDrawer.drawerIsVisible}
          closeDrawer={handleUseDrawer.closeDrawer}
          typeOfDrawerOpened={getUseDrawer.typeOfDrawerOpened}
        />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
