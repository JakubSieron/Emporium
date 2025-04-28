import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, title, description, image, price }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart({ id, title, description, image, price });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-title">{title}</h3>
      </Link>
      <p className="product-description">
        {description.length > 80 ? `${description.substring(0, 80)}...` : description}
      </p>
      <p className="product-price"><strong>${price.toFixed(2)}</strong></p>
      <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
