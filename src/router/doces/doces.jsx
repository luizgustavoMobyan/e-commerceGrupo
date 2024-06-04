/* eslint-disable no-unused-vars */
// router/doces/doces.js
import React from 'react';
import { Category } from '../../components/category/category';
import './doces.scss';

const docesData = [
  {
    id: 2,
    title: 'Copo da Felicidade',
    imageUrl: 'https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/mdp_web_gm_chocac-detail/public/externals/a17abc78179fffd5f128ef02131fe9bc.jpg?itok=0gAe3gWc', // Atualize com o caminho correto da imagem
  },
  {
    id: 3,
    title: 'Doces para Festa',
    imageUrl: 'https://saborecia.com.br/wp-content/uploads/2020/08/MG_4421-scaled.jpg', // Atualize com o caminho correto da imagem
  },
];

export function Doces() {
  return (
    <div className="doces-page">
      <div className="doces-container">
        {docesData.map((item) => (
          <Category key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
}
