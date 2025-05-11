import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();

  const total = cartItems.reduce((sum, item) => {
    const qty = item.quantity || 1;
    return sum + item.price * qty;
  }, 0);

  const handleConfirm = () => {
    alert('✅ Order confirmed! (This would send data to backend)');
    // You could add actual logic to send order here
  };

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>

      {user && (
        <p className={styles.userInfo}>
          <strong>Logged in as:</strong> {user.email}
        </p>
      )}

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.summary}>
          <ul className={styles.itemList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.quantity}>× {item.quantity}</span>
                <span className={styles.price}>
                  €{(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <strong>Total:</strong>
            <span>€{total.toFixed(2)}</span>
          </div>

          <button className={styles.confirmButton} onClick={handleConfirm}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
