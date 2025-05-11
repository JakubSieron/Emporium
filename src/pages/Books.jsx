import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
//import allProducts from '../data/products.json';
import './Books.css';

const Books = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => p.category === 'books');
        setProducts(filtered);
      })
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);


  return (
    <div className="books-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.name}
            description={product.description}
            image={`/images/${product.image}`} 
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;

