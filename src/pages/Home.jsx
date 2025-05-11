import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import ProductCard from '../components/ProductCard'; // Use your existing product card

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const featured = products.filter(p => p.featured).slice(0, 4);
  const trending = products.filter(p => p.trending && !p.featured).slice(0, 4);
  const discounted = products.filter(p => p.discounted && !p.featured && !p.trending).slice(0, 4);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeader}>
        <div className={styles.headerGrid}>
          <div className={styles.headerImage}>
            <img src="/images/gotrkfelix.png" alt="Featured Miniature" />
          </div>
          <div className={styles.headerDescription}>
            <h1>Welcome to Hobby Haven!</h1>
            <p>
              Fantasy Miniatures Emporium is more than a store — it's our passion.
              Dive into a world of imagination, detail, and creativity where model builders, painters,
              and collectors unite around a shared love of miniatures and fantasy lore.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.productsShowcase}>
        <div className={styles.columnsWrapper}>
          <div className={`${styles.column} ${styles.featured}`}>
            <h2>Featured</h2>
            {featured.map(p => (
              <div key={p._id} className={styles.productRow}>
                <ProductCard
                  id={p._id}
                  title={p.name}
                  image={`/images/${p.image}`}
                  price={p.price}
                />
              </div>
            ))}
          </div>

          <div className={`${styles.column} ${styles.trending}`}>
            <h2>Trending</h2>
            {trending.map(p => (
              <div key={p._id} className={styles.productRow}>
                <ProductCard
                  id={p._id}
                  title={p.name}
                  image={`/images/${p.image}`}
                  price={p.price}
                />
              </div>
            ))}
          </div>

          <div className={`${styles.column} ${styles.discounted}`}>
            <h2>Discounted</h2>
            {discounted.map(p => (
              <div key={p._id} className={styles.productRow}>
                <ProductCard
                  id={p._id}
                  title={p.name}
                  image={`/images/${p.image}`}
                  price={p.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
