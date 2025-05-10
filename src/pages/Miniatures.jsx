import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from './Miniatures.module.scss';
import products from '../data/products.json';

const Miniatures = () => {
  const miniatures = products.filter(product => product.category === 'miniatures');

  return (
    <div className={styles.miniaturesContainer}>
      <div className={styles.productGrid}>
        {miniatures.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
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
