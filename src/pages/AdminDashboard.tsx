import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
};

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error('Failed to load products', err));
  }, []);

  const deleteProduct = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    });

    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="admin-dashboard" style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/new" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        + Add New Product
      </Link>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Category</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Price</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>€{product.price.toFixed(2)}</td>
              <td>
                <button onClick={() => navigate(`/admin/edit/${product._id}`)}>Edit</button>{' '}
                <button onClick={() => deleteProduct(product._id)}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
