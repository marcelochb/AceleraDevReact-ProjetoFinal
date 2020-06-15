import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search } from 'react-feather';
import './styles.scss';
import { ButtonTheme } from '../ButtonTheme';
import { TypesHeader } from '../../types/components';

export const Header: React.FC<TypesHeader> = ({
  titleOfCurrentTheme,
  toggleTheme,
  toggleDrawerVisible,
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <div className="header__logo">
              FASHIONISTA
            </div>
          </Link>
          <ButtonTheme titleOfCurrentTheme={titleOfCurrentTheme} toggleTheme={toggleTheme} />
          <div className="header__icons">

            <button className="icon"
              onClick={toggleDrawerVisible}
            >

              <Search />
            </button>

            <button className="icon"
              onClick={toggleDrawerVisible}
            >
              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
