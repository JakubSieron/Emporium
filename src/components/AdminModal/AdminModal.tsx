import React, { useEffect, useState } from 'react';
import styles from './AdminModal.module.scss';

type Product = {
  _id?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'miniatures' | 'books' | 'paints';
};

type Props = {
  onClose: () => void;
};

const AdminModal: React.FC<Props> = ({ onClose }) => {
  const [tab, setTab] = useState<'miniatures' | 'books' | 'paints'>('miniatures');
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState<Omit<Product, '_id'>>({
    name: '',
    description: '',
    image: '',
    price: 0,
    category: tab,
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setForm((prev) => ({ ...prev, category: tab }));
    setEditing(null);
  }, [tab]);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      category: product.category,
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = editing
      ? `http://localhost:5000/api/products/${editing._id}`
      : 'http://localhost:5000/api/products';
    const method = editing ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const savedProduct = await res.json();

    if (editing) {
      setProducts((prev) =>
        prev.map((p) => (p._id === savedProduct._id ? savedProduct : p))
      );
    } else {
      setProducts((prev) => [...prev, savedProduct]);
    }

    setForm({ name: '', description: '', image: '', price: 0, category: tab });
    setEditing(null);
  };

  const filtered = products.filter((p) => p.category === tab);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2>Manage Products</h2>

        <div className={styles.tabs}>
          {(['miniatures', 'books', 'paints'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setTab(cat)}
              className={tab === cat ? styles.active : ''}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((product) => (
            <div key={product._id} className={styles.card}>
              <img src={`/images/${product.image}`} alt={product.name} />
              <h4>{product.name}</h4>
              <p>€{product.price.toFixed(2)}</p>
              <div className={styles.actions}>
                <button onClick={() => handleEdit(product)}>✏️</button>
                <button onClick={() => handleDelete(product._id!)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <h3>{editing ? 'Edit Product' : 'Add New Product'}</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleFormChange} placeholder="Name" required />
          <textarea name="description" value={form.description} onChange={handleFormChange} placeholder="Description" required />
          <input name="image" value={form.image} onChange={handleFormChange} placeholder="Image filename" required />
          <input name="price" type="number" value={form.price} onChange={handleFormChange} placeholder="Price" required />

          <button type="submit">{editing ? 'Update' : 'Add Product'}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
