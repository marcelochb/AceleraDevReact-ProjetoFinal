import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'react-feather';
import './styles.scss';
import { ButtonTheme } from '../ButtonTheme';

export const Header: React.FC = () => {
  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__content">
          <Link to="/">
            <div className="topbar__logo">
              FASHIONISTA
            </div>
          </Link>
          <ButtonTheme title='Dark' toggleTheme={() => { }} />
          <div className="topbar__icons">

            <button className="icon">

              <ShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
