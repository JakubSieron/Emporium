import React, { useEffect, useState } from 'react';
import styles from './AdminModal.module.scss';

type Product = {
  _id?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'miniatures' | 'books' | 'paints';
  featured: boolean;
  trending: boolean;
  discounted: boolean;
};

type Props = {
  onClose: () => void;
};

const AdminModal: React.FC<Props> = ({ onClose }) => {
  const [tab, setTab] = useState<'miniatures' | 'books' | 'paints'>('miniatures');
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Omit<Product, '_id'>>({
    name: '',
    description: '',
    image: '',
    price: 0,
    category: tab,
    featured: false,
    trending: false,
    discounted: false,
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
      featured: product.featured,
      trending: product.trending,
      discounted: product.discounted,
    });
    setShowForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
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

    setForm({
      name: '',
      description: '',
      image: '',
      price: 0,
      category: tab,
      featured: false,
      trending: false,
      discounted: false,
    });
    setEditing(null);
    setShowForm(false);
  };

  const filtered = products.filter((p) => p.category === tab);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2>Manage Products</h2>
       
       <div className={styles.topBar}>
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

        <button className={styles.addButton} onClick={() => {
          setEditing(null);
          setForm({ name: '', description: '', image: '', price: 0, category: tab, featured: false, trending: false, discounted: false });
          setShowForm(true);
        }}>
          ➕ Add Product
        </button>
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

       {showForm && (
  <div className={styles.formOverlay}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>{editing ? 'Edit Product' : 'Add New Product'}</h3>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleFormChange}
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={form.description}
        onChange={handleFormChange}
        required
      />

      <label htmlFor="image">Image Filename</label>
      <input
        id="image"
        name="image"
        value={form.image}
        onChange={handleFormChange}
        required
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        value={form.price}
        onChange={handleFormChange}
        required
      />
      
      
      <div className={styles.checkboxGroup}>
  <label>
    <input
      type="checkbox"
      name="featured"
      checked={form.featured}
      onChange={handleCheckboxChange}
    />
    Featured
  </label>
  <label>
    <input
      type="checkbox"
      name="trending"
      checked={form.trending}
      onChange={handleCheckboxChange}
    />
    Trending
  </label>
  <label>
    <input
      type="checkbox"
      name="discounted"
      checked={form.discounted}
      onChange={handleCheckboxChange}
    />
    Discounted
  </label>
</div>


      <div className={styles.formActions}>
        <button type="submit">{editing ? 'Update' : 'Add Product'}</button>
        <button type="button" onClick={() => {
          setShowForm(false);
          setEditing(null);
        }}>
          Cancel
        </button>
      </div>
    </form>
  </div>
)}
       
      </div>
    </div>
  );
};

export default AdminModal;

