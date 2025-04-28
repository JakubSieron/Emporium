import React from 'react';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';


const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <p>Here you can view and manage all orders, products, and users.</p>
    </div>
  );
};

export default AdminDashboard;

