import React from 'react';
import { useAuth } from '../context/AuthContext';
import './UserDashboard.css';


const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      <p>Welcome, {user.email}</p>
      <p>Here you can view your orders, account settings, and cart.</p>
    </div>
  );
};

export default UserDashboard;
