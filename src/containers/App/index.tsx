import React from 'react';
import './styles.scss';
import { usePersistedTheme } from '../../utils/hooks';
export const App = () => {
  const { toggleTheme } = usePersistedTheme({ initialTypeOfTheme: 'Dark', keyOfLocalStorageToTheme: 'theme' })

  return (
    <div className="app">
      <h1>Hello World</h1>
      <button
        onClick={toggleTheme}
      >change theme</button>
    </div>
  );
}
