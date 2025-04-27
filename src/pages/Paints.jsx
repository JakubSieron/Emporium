import React from 'react';
import ProductCard from '../components/ProductCard';
import './Paints.css';

const paints = [
  { id: '7', title: 'Acrylic Starter Set', description: 'All basic colors you need.', image: 'https://via.placeholder.com/300x200' },
  { id: '8', title: 'Metallic Effects', description: 'Shiny metallic paints.', image: 'https://via.placeholder.com/300x200' },
  { id: '9', title: 'Brush Cleaner', description: 'Keep your brushes fresh.', image: 'https://via.placeholder.com/300x200' },
];

const Paints = () => {
  return (
    <div className="paints-container">
      <h1>Paints</h1>
      <div className="products-grid">
        {paints.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Paints;
