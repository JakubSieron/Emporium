import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../components/ProductCard.module.scss';
import products from '../data/products.json';

const Miniatures = () => {
  const miniatures = products.filter(product => product.category === 'miniatures');

  return (
    <div className="page">
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


