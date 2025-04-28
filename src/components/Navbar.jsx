import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ Added authentication
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth(); // ✅ Access user + logout function

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/miniatures">Miniatures</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/paints">Paints</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/cart">Cart</Link></li> {/* ✅ Cart always visible */}

        {/* 🔥 Dynamic Part based on login */}
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
              <button onClick={logout} className="logout-button">
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
