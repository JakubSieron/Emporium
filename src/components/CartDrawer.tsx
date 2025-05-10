import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();
const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={onClose}
      />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
         
  <div className={styles.items}>
    {cartItems.map((item) => (
      <div key={item.id} className={styles.item}>
        <img src={item.image} alt={item.title} />
        <div className={styles.info}>
          <h4>{item.title}</h4>
          <p>€{item.price.toFixed(2)}</p>
          <div className={styles.controls}>
            <button onClick={() => decrementFromCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>🗑️</button>
          </div>
        </div>
      </div>
    ))}
  

  <div className={styles.totalSection}>
  <div className={styles.total}>
    <span>Total:</span>
    <span>€{totalPrice.toFixed(2)}</span>
  </div>

  <button className={styles.checkoutButton} onClick={() => alert('Checkout coming soon!')}>
    Checkout
  </button>
</div>
</div>



        )}
      </div>
    </>
  );
};

export default CartDrawer;
