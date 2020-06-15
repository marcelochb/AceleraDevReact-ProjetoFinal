import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search } from 'react-feather';
import './styles.scss';
import { ButtonTheme } from '../ButtonTheme';
import { TypesHeader, typeOfDrawer } from '../../types/components';

export const Header: React.FC<TypesHeader> = ({
  titleOfCurrentTheme,
  toggleTheme,
  openDrawer
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
              onClick={() => openDrawer({ typeOfDrawer: typeOfDrawer.SearchOfProducts })}
            >

              <Search />
            </button>

            <button className="icon"
              onClick={() => openDrawer({ typeOfDrawer: typeOfDrawer.ShoppingBag })}
            >
              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
