import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
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
            <div className={styles.productRow}>Product 1</div>
            <div className={styles.productRow}>Product 2</div>
            <div className={styles.productRow}>Product 3</div>
          </div>

          <div className={`${styles.column} ${styles.trending}`}>
            <h2>Trending</h2>
            <div className={styles.productRow}>Product A</div>
            <div className={styles.productRow}>Product B</div>
            <div className={styles.productRow}>Product C</div>
          </div>

          <div className={`${styles.column} ${styles.trending}`}>
            <h2>Trending</h2>
            <div className={styles.productRow}>Product D</div>
            <div className={styles.productRow}>Product E</div>
            <div className={styles.productRow}>Product F</div>
          </div>

          <div className={`${styles.column} ${styles.discounted}`}>
            <h2>Discounted</h2>
            <div className={styles.productRow}>Sale 1</div>
            <div className={styles.productRow}>Sale 2</div>
            <div className={styles.productRow}>Sale 3</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
