import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, description, image, id }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
