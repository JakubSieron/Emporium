import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, title, description, image }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart({ id, title, description, image });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
