/* eslint-disable no-unused-vars */
import React from 'react';
import { Category } from '../../components/category/category';
import './bolos.scss';

const bolosData = [
  {
    id: 1,
    title: 'Bolo de Chocolate com Morango',
    imageUrl: 'https://www.estadao.com.br/resizer/oFDrDp3xgfze9zuyNaR5gnyURVA=/arc-anglerfish-arc2-prod-estadao/public/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg', // Atualize com o caminho correto da imagem
  },
];

export function Bolos() {
  return (
    <div className="bolos-page">
      <div className="bolos-container">
        {bolosData.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
}