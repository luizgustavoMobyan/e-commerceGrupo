/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ItemCount from '../item-count/ItemCount';
import './category.scss';

export function Category({ category }) {
  const { id, imageUrl, title, price, stock } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Preço: {price}</p>
        <ItemCount initial={1} stock={stock} id={id} title={title} price={price} imageUrl={imageUrl} />
        <button className="category-button">Comprar Agora</button>
      </div>
    </div>
  );
}