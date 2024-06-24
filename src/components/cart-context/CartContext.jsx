/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [stock, setStock] = useState(10); // Defina o estoque inicial

  useEffect(() => {
    // Recuperar o carrinho da localStorage, se existir
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      setCartCount(storedCartItems.reduce((total, item) => total + item.quantity, 0));
    }
  }, []);

  useEffect(() => {
    // Salvar o carrinho na localStorage sempre que houver uma alteração
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (item.quantity <= stock) {
      // Verifica se o item já está no carrinho
      const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, item]);
      }
      
      setCartCount(cartCount + item.quantity);
      setStock(stock - item.quantity); // Atualiza o estoque
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, stock }}>
      {children}
    </CartContext.Provider>
  );
};