/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ItemCount from '../item-count/ItemCount';
import './category.scss';

export function Category({ category }) {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <ItemCount initial={1} stock={10} />
        <button className="category-button">Comprar Agora</button>
      </div>
    </div>
  );
}