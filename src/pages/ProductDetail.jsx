import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allProducts from '../data/products.json';
import './ProductDetail.css';

const ProductDetail = ({ isModal = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  const content = (
    <div className="product-detail-content">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="product-detail-image"
      />
      <h1>{product.name}</h1>
      <p className="product-detail-description">{product.description}</p>
      <h2 className="product-detail-price">${product.price.toFixed(2)}</h2>
    </div>
  );

  // Render as full page
  if (!isModal) {
    return (
      <div className="product-detail-container">
        {content}
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      </div>
    );
  }

  // Render as centered modal
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={() => navigate(-1)}
          className="close-button"
        >
          ✕
        </button>
        {content}
      </div>
    </div>
  );
};

export default ProductDetail;
