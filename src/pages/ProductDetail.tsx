import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import allProducts from '../data/products.json';
import './ProductDetail.css';

const ProductDetail: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();

  const product = allProducts.find((item) => item.id === parseInt(id || '', 10));
  const quantity = cartItems.find((item) => item.id === product?.id)?.quantity || 0;

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  const handleAdd = () => addToCart(product);
  const handleRemoveOne = () => decrementFromCart(product.id);
  const handleRemoveAll = () => removeFromCart(product.id);

  const content = (
    <div className="product-detail-content">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="product-detail-image"
      />
      <h1>{product.name}</h1>
      <h2 className="product-detail-title">{product.name}</h2> 
      <p className="product-detail-description">{product.description}</p>
      <h2 className="product-detail-price">€{product.price.toFixed(2)}</h2>

      <div className="product-controls">
        <button onClick={handleRemoveOne} disabled={quantity === 0}>−</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemoveAll} disabled={quantity === 0}>🗑️</button>
      </div>
    </div>
  );

  return isModal ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={() => navigate(-1)} className="close-button">✕</button>
        {content}
      </div>
    </div>
  ) : (
    <div className="product-detail-container">
      {content}
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
    </div>
  );
};

export default ProductDetail;
