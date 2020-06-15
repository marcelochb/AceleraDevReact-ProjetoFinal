import React from 'react';
import './styles.scss';

export const ShoppingBag: React.FC = () => {
  return (
    <div className="shopping-bag">
      <div className="shopping-bag__products">

        <span className="shopping-bag__empty">Sua sacola está vazia</span>
      </div>
      <div className="shopping-bag__subtotal">
        Subtotal - R$ 1.200,00
      </div>
    </div>
  );
}
