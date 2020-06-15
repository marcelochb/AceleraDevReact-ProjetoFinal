import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Sun } from 'react-feather';

import { TypesButtonTheme } from '../../types/components';

import './styles.scss';

export const ButtonTheme: React.FC<TypesButtonTheme> = ({
  toggleTheme,
  titleOfCurrentTheme,
}) => {
  const titleOfNextTheme = titleOfCurrentTheme === 'Light' ? 'Dark' : 'Light';
  return (
    <div className='button__theme'>
      {titleOfCurrentTheme === 'Light'
        ? (<FontAwesomeIcon icon={faMoon} />)
        : (<Sun />)}

      <button
        onClick={toggleTheme}
      >
        {titleOfNextTheme} mode
    </button>
    </div>

  );
}
