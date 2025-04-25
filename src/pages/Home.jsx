import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Hobby Haven!</h1>
        <p>Your one-stop shop for miniatures, books, and paints.</p>
      </header>
      <section className="intro">
        <h2>Discover Your Passion</h2>
        <p>Whether you're a model maker, a painter, or a bookworm, we have everything you need to bring your hobby to life.</p>
      </section>
    </div>
  );
};

export default Home;
