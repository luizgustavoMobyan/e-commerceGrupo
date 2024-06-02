/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import './ItemCount.scss';
import { CartContext } from '../../components/cart-context/CartContext';

const ItemCount = ({ initial = 1, stock = 10 }) => {
  const [count, setCount] = useState(initial);
  const { addToCart, stock: availableStock } = useContext(CartContext);

  const increment = () => {
    if (count < stock && count < availableStock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count <= availableStock) {
      addToCart(count);
      setCount(initial); // Reseta o contador após adicionar ao carrinho
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button className="item-count-button" onClick={decrement}>-</button>
        <span className="item-count-display">{count}</span>
        <button className="item-count-button" onClick={increment}>+</button>
      </div>
      <button 
        className="add-to-cart-button" 
        onClick={handleAddToCart} 
        disabled={count > availableStock}
      >
        Adicionar ao carrinho
      </button>
      {count > availableStock && <p className="error-message">Estoque insuficiente</p>}
    </div>
  );
};

export default ItemCount;
