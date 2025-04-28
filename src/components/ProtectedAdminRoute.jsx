import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // Not logged in
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" />; // Logged in but not admin
  }

  return children; // ✅ Admin can access
};

export default ProtectedAdminRoute;
