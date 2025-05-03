import React from 'react';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products.json';
import './Paints.css';

const Paints = () => {
  const paints = allProducts.filter(product => product.category === 'paints');

  return (
    <div className="paints-container">
      <div className="products-grid">
        {paints.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            image={`/images/${item.image}`}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Paints;

