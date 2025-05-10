import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Miniatures.module.scss';
//import products from '../data/products.json';

const Miniatures = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => p.category === 'miniatures');
        setProducts(filtered);
      })
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className={styles.miniaturesContainer}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.name}
            image={`/images/${product.image}`}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Miniatures;
