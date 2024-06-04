/* eslint-disable no-unused-vars */
import React from 'react';
import { Category } from '../../components/category/category';
import './faca-sua-festa.scss';

const facasuafestaData = [
  {
    id: 6,
    title: 'Monte seu Kit Festa',
    imageUrl: 'https://padariavianney.com.br/web/image/product.template/5142/image_1024?unique=0b96313',
  },
];

export function FacaSuaFesta() {
  return (
    <div className="doces-page">
      <div className="doces-container">
        {facasuafestaData.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
}