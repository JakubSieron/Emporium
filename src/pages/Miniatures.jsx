import React from 'react';
import ProductCard from '../components/ProductCard';
import './Miniatures.css';

const miniatures = [
  { id: '1', title: 'Knight Commander', description: 'A detailed resin knight.', image: 'https://via.placeholder.com/300x200' },
  { id: '2', title: 'Dragon Warlord', description: 'Epic dragon model.', image: 'https://via.placeholder.com/300x200' },
  { id: '3', title: 'Elf Ranger', description: 'Lightweight and detailed.', image: 'https://via.placeholder.com/300x200' },
];

const Miniatures = () => {
  return (
    <div className="miniatures-container">
      <h1>Miniatures</h1>
      <div className="products-grid">
        {miniatures.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Miniatures;
