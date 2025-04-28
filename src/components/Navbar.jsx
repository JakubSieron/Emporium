import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify'; // ✅ Import toast
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate(); // ✅ Hook to redirect

  const handleLogout = () => {
    logout();          // 1. Clear user
    navigate('/');     // 2. Redirect to Home
    toast.success('Logged out successfully!', {
      position: "top-center",
      autoClose: 2000, // 2 seconds
    });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/miniatures">Miniatures</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/paints">Paints</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/cart">
            Cart {cartItems.length > 0 && `(${cartItems.length})`}
          </Link>
        </li>

        {/* 🔥 If user is logged in, show their email */}
        {user && (
          <li className="user-email">Hi, {user.email}</li>
        )}

        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </>
        )}
        {user && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
