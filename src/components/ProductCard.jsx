import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.scss'; // 👈 uses your SCSS module

const ProductCard = ({ id, title, image, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, image, price });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>

      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.bottom}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <button className={styles.addToCart} onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;