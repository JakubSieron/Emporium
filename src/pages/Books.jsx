import React from 'react';
import ProductCard from '../components/ProductCard';
import './Books.css';

const books = [
  { id: '4', title: 'Painting Guide', description: 'Learn to paint like a pro.', image: 'https://via.placeholder.com/300x200' },
  { id: '5', title: 'Miniature Lore', description: 'Stories behind your miniatures.', image: 'https://via.placeholder.com/300x200' },
  { id: '6', title: 'Model Building 101', description: 'Starter guide for beginners.', image: 'https://via.placeholder.com/300x200' },
];

const Books = () => {
  return (
    <div className="books-container">
      <h1>Books</h1>
      <div className="products-grid">
        {books.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};


export default Books;
