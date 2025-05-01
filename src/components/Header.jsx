import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Match paths
  const path = location.pathname;
  let bannerClass = 'header-home';
  let title = 'Fantasy Miniatures Emporium';
  let subtitle = 'Your realm of paints, books, and epic battles';

  if (path.includes('/about')) {
    bannerClass = 'header-about';
    title = 'About Us';
    subtitle = 'Our story and passion for the miniature world.';
  } else if (path.includes('/contact')) {
    bannerClass = 'header-contact';
    title = 'Contact Us';
    subtitle = 'We’d love to hear from you!';
  } else if (path.includes('/miniatures')) {
    bannerClass = 'header-miniatures';
    title = 'Miniatures';
    subtitle = 'Epic armies, characters, and monsters await.';
  } else if (path.includes('/books')) {
    bannerClass = 'header-books';
    title = 'Books';
    subtitle = 'Lore, strategy, and fantasy-filled stories.';
  } else if (path.includes('/paints')) {
    bannerClass = 'header-paints';
    title = 'Paints';
    subtitle = 'Brush, blend, and bring your models to life.';
  }

  return (
    <header className={`site-header ${bannerClass}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;
