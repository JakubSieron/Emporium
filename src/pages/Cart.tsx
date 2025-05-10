import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/CartItem'; 
import './Cart.css';

const Cart = () => {
  const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();

  if (cartItems.length === 0) return <h2>Your cart is empty.</h2>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-details">
            <h3>{item.title}</h3>
            <p>Price: €{item.price.toFixed(2)}</p>

            <div className="cart-controls">
              <button onClick={() => decrementFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;


