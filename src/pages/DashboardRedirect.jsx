import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const DashboardRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.role === 'admin') return <Navigate to="/admin" />;
  if (user.role === 'user') return <Navigate to="/user" />;

  return <Navigate to="/" />;
};

export default DashboardRedirect;
