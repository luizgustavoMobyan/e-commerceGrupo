/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import shoppingIcon from '../../assets/shopping-cart-simple.svg';
import { CartContext } from '../cart-context/CartContext';
import './cart-icon.scss';

export function CartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container"> 
      <img src={shoppingIcon} className="shopping-icon" alt="Carrinho de compras" />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}