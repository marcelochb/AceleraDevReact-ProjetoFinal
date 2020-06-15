import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { TypesButtonTheme } from '../../types/components';

import './styles.scss';

export const ButtonTheme: React.FC<TypesButtonTheme> = ({
  toggleTheme,
  titleOfCurrentTheme,
}) => {
  const iconMoon = titleOfCurrentTheme === 'Light' ? faMoonSolid : faMoonRegular
  const titleOfNextTheme = titleOfCurrentTheme === 'Light' ? 'Dark' : 'Light';
  return (
    <div className='button__theme'>
      <FontAwesomeIcon icon={iconMoon} />

      <button
        onClick={toggleTheme}
      >
        {titleOfNextTheme} mode
    </button>
    </div>

  );
}
