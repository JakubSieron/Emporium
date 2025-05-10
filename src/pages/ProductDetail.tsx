import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

const ProductDetail: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const quantity = cartItems.find((item) => item.id === id)?.quantity || 0;

  const handleAdd = () => product && addToCart(product);
  const handleRemoveOne = () => product && decrementFromCart(product._id);
  const handleRemoveAll = () => product && removeFromCart(product._id);

  if (loading) return <p>Loading...</p>;
  if (!product) return <h2>Product not found.</h2>;

  const content = (
    <div className="product-detail-content">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="product-detail-image"
      />
      <h1 className="product-detail-title">{product.name}</h1>
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
