import React from 'react';
import './styles.scss';
export const SearchProducts: React.FC = () => {
  return (
    <div className="search-products">
      <div className="search-products__form">
        <input
          className="search-products__input"
          type="text"
          placeholder="Buscar por produto..."
        />
      </div>


      <div className="search-products__list">

        <span className="search-products__empty">Nenhum item encontrado :\</span>
      </div>
    </div>
  );
}
