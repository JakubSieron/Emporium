import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/miniatures">Miniatures</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/paints">Paints</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Store Hours</h3>
          <p>Mon–Fri: 9am – 8pm</p>
          <p>Saturday: 10am – 6pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>
          <p>support@fantasyemporium.com</p>
          <p>+1 555-123-4567</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner"> 
          <h7>&copy; {new Date().getFullYear()} Fantasy Miniatures Emporium. All rights reserved.</h7>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
