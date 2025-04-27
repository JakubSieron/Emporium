import React from 'react';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products.json';
import './Miniatures.css';

const Miniatures = () => {
  const miniatures = allProducts.filter(product => product.category === 'miniatures');

  return (
    <div className="miniatures-container">
      <h1>Miniatures</h1>
      <div className="products-grid">
        {miniatures.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.name}
            description={item.description}
            image={`/images/${item.image}`} // Assuming images will be placed inside /public/images/
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Miniatures;

