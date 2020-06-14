import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { TypesButtonTheme } from '../../types/components';

// import { Container } from './styles';

export const ButtonTheme: React.FC<TypesButtonTheme> = ({
  title,
  toggleTheme
}) => {
  const iconMoon = title === 'Light' ? faMoonSolid : faMoonRegular

  return (
    <div className='buttonTheme' data-testid='buttonTheme'>
      <FontAwesomeIcon icon={iconMoon} />

      <button
        onClick={toggleTheme}
      >
        {title} mode
    </button>
    </div>

  );
}
