import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirm = async () => {
    if (!user) return alert('You must be logged in to place an order.');

    try {
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          items: cartItems,
          total,
        }),
      });

      clearCart();          // ✅ 2. Clear cart
      navigate('/');        // ✅ 3. Redirect home
    } catch (err) {
      alert('❌ Failed to place order.');
      console.error(err);
    }
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
                <span>{item.title}</span>
                <span>× {item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
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