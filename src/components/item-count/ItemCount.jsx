/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './ItemCount.scss';
import { CartContext } from '../../components/cart-context/CartContext';

const ItemCount = ({ initial = 1, stock, id, title, price }) => {
  const [count, setCount] = useState(initial);
  const { addToCart, stock: availableStock } = useContext(CartContext);
  const [error, setError] = useState(false);

  const increment = () => {
    if (count < stock && count < availableStock) {
      setCount(count + 1);
      setError(false);
    } else {
      setError(true);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setError(false);
    }
  };

  const handleAddToCart = () => {
    if (count <= availableStock && count <= stock) {
      addToCart({ id, title, price, quantity: count }); // Passa todas as informações do item para addToCart
      setCount(initial);
      setError(false);
    } else {
      setError(true);
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
        disabled={count > availableStock || count > stock}
      >
        Adicionar ao carrinho
      </button>
      {error && <p className="error-message">Estoque insuficiente</p>}
    </div>
  );
};

ItemCount.propTypes = {
  initial: PropTypes.number,
  stock: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ItemCount;

