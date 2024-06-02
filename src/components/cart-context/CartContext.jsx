/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [stock, setStock] = useState(10); // Defina o estoque inicial

  const addToCart = (quantity) => {
    if (quantity <= stock) {
      setCartCount(cartCount + quantity);
      setStock(stock - quantity); // Atualiza o estoque
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, stock }}>
      {children}
    </CartContext.Provider>
  );
};


