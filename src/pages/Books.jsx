import React from 'react';
import ProductCard from '../components/ProductCard';
import allProducts from '../data/products.json';
import './Books.css';

const Books = () => {
  const books = allProducts.filter(product => product.category === 'books');

  return (
    <div className="books-container">
      <div className="products-grid">
        {books.map((item) => (
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

export default Books;

