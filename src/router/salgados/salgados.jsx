/* eslint-disable no-unused-vars */
import React from 'react';
import { Category } from '../../components/category/category';
import './salgados.scss';

const salgadosData = [
  {
    id: 4,
    title: 'Coxinha',
    imageUrl: 'https://acdn.mitiendanube.com/stores/002/961/025/products/facetune_05-07-2023-10-57-3911-d49b959788d4f189d616885655215834-1024-1024.jpeg',
  },
  {
    id: 5,
    title: 'Empada de Camarão',
    imageUrl: 'https://www.sabornamesa.com.br/media/k2/items/cache/24c01e452493eba0f9e741ef09a2d61a_XL.jpg',
  },
];

export function Salgados() {
  return (
    <div className="salgados-page">
      <div className="salgados-container">
        {salgadosData.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
}