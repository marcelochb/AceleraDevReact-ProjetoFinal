import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Header } from '../../components';
import './styles.scss';
import { usePersistedTheme } from '../../utils/hooks';
import { Routes } from '../../routes';
export const App = () => {
  const { toggleTheme } = usePersistedTheme({ initialTypeOfTheme: 'Dark', keyOfLocalStorageToTheme: 'theme' })

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
