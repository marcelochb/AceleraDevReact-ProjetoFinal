import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header, Drawer } from '../../components';
import './styles.scss';
import { usePersistedTheme, useDrawer } from '../../utils/hooks';
import { Routes } from '../../routes';
export const App = () => {
  const { toggleTheme, titleOfCurrentTheme } = usePersistedTheme({ initialTypeOfTheme: 'Dark', keyOfLocalStorageToTheme: 'theme' })
  const { drawerIsVisible, toggleDrawerVisible } = useDrawer();
  return (
    <div className={`app ${drawerIsVisible ? 'app--is-drawer-visible' : ''}`}>
      <BrowserRouter>
        <Header
          toggleTheme={toggleTheme}
          titleOfCurrentTheme={titleOfCurrentTheme}
          toggleDrawerVisible={toggleDrawerVisible}
        />
        <Drawer
          isDrawerVisible={drawerIsVisible}
          toggleDrawerVisible={toggleDrawerVisible}
        />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
