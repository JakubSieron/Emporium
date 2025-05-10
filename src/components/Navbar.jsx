import React,  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import CartDrawer from '../components/CartDrawer';
import './Navbar.css';

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Logged out successfully!', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
     <>
    <nav className="navbar">
        <ul className="nav-list">
        <li>
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
          </Link>
        </li>
          <li><Link to="/miniatures">Miniatures</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/paints">Paints</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <button onClick={() => setShowDrawer(true)} className="cart-link">
              <i className="fas fa-shopping-cart"></i>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li><Link to="/register">Sign Up</Link></li>
            </>
          )}

          {user && (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><span className="user-email">Hi, {user.email}</span></li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
    </nav>

<CartDrawer isOpen={showDrawer} onClose={() => setShowDrawer(false)} />
  </>
  );
}

export default Navbar;
