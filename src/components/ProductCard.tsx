import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.scss';

export type CartItem = {
  id: string; // ✅ must match backend _id type
  title: string;
  image: string;
  price: number;
  quantity: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, title, image, price }) => {
  const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();
  const location = useLocation();

  const quantity = cartItems.find((item) => item.id === id)?.quantity || 0;

  const handleAdd = () => {
    addToCart({ id, title, image, price });
  };

  const handleRemoveOne = () => {
    decrementFromCart(id);
  };

  const handleRemoveAll = () => {
    removeFromCart(id);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Link to={`/product/${id}`} state={{ background: location }}>
          <img src={image} alt={title} />
        </Link>
      </div>

      <div className={styles.details}>
        <h3>{title}</h3>
        <div className={styles.bottom}>
          <span className={styles.price}>€{price.toFixed(2)}</span>

          <div className={styles.controls}>
            <button onClick={handleRemoveOne} disabled={quantity === 0}>−</button>
            <span>{quantity}</span>
            <button className={styles.addToCart} onClick={handleAdd}>+</button>
            <button onClick={handleRemoveAll} title="Remove" disabled={quantity === 0}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
