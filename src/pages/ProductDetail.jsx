import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allProducts from '../data/products.json'; // Import your products
import './ProductDetail.css'; // (Optional) Style file

const ProductDetail = () => {
  const { id } = useParams(); // Get product id from URL
  const product = allProducts.find((item) => item.id === parseInt(id)); // Find product

  if (!product) {
    return <h2>Product not found.</h2>; // Error if product not found
  }

  return (
    <div className="product-detail-container">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="product-detail-image"
      />
      <h1>{product.name}</h1>
      <p className="product-detail-description">{product.description}</p>
      <h2 className="product-detail-price">${product.price.toFixed(2)}</h2>

      {/* Back button */}
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default ProductDetail;

