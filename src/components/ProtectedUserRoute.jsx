import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedUserRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // Not logged in
  }

  if (user.role !== 'user') {
    return <Navigate to="/" />; // Logged in but not a normal user
  }

  return children; // ✅ Correct user, allow access
};

export default ProtectedUserRoute;
