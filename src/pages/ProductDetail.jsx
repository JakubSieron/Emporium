import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const allProducts = [
  // Miniatures
  { id: '1', title: 'Knight Commander', description: 'A detailed resin knight.', image: 'https://via.placeholder.com/300x200' },
  { id: '2', title: 'Dragon Warlord', description: 'Epic dragon model.', image: 'https://via.placeholder.com/300x200' },
  { id: '3', title: 'Elf Ranger', description: 'Lightweight and detailed.', image: 'https://via.placeholder.com/300x200' },
  // Books
  { id: '4', title: 'Painting Guide', description: 'Learn to paint like a pro.', image: 'https://via.placeholder.com/300x200' },
  { id: '5', title: 'Miniature Lore', description: 'Stories behind your miniatures.', image: 'https://via.placeholder.com/300x200' },
  { id: '6', title: 'Model Building 101', description: 'Starter guide for beginners.', image: 'https://via.placeholder.com/300x200' },
  // Paints
  { id: '7', title: 'Acrylic Starter Set', description: 'All basic colors you need.', image: 'https://via.placeholder.com/300x200' },
  { id: '8', title: 'Metallic Effects', description: 'Shiny metallic paints.', image: 'https://via.placeholder.com/300x200' },
  { id: '9', title: 'Brush Cleaner', description: 'Keep your brushes fresh.', image: 'https://via.placeholder.com/300x200' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
