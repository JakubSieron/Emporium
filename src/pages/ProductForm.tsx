import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Product = {
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

const ProductForm: React.FC = () => {
  const { id } = useParams(); // present only if editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Product>({
    name: '',
    image: '',
    description: '',
    category: '',
    price: 0,
  });

  const isEditMode = Boolean(id);

  // Load product if editing
  useEffect(() => {
    if (isEditMode) {
      fetch(`http://localhost:5000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error('Failed to load product', err));
    }
  }, [id, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = isEditMode
      ? `http://localhost:5000/api/products/${id}`
      : `http://localhost:5000/api/products`;

    const method = isEditMode ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      navigate('/admin');
    } else {
      alert('Failed to save product');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{isEditMode ? 'Edit Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Image (filename or URL):</label>
        <input name="image" value={formData.image} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Category:</label>
        <input name="category" value={formData.category} onChange={handleChange} required />

        <label>Price (€):</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <br /><br />
        <button type="submit">{isEditMode ? 'Update' : 'Create'} Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
