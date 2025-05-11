import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminModal from '../components/AdminModal/AdminModal';
import AdminOrdersModal from '../components/AdminModal/AdminOrdersModal';
import './AdminDashboard.css'; // Keep this if you're using it

const AdminDashboard: React.FC = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="admin-actions">
        <button onClick={() => setShowProductModal(true)}>🛠 Manage Products</button>
        <button onClick={() => setShowOrdersModal(true)}>📦 View Orders</button>
      </div>

      {showProductModal && <AdminModal onClose={() => setShowProductModal(false)} />}
      {showOrdersModal && <AdminOrdersModal onClose={() => setShowOrdersModal(false)} />}
    </div>
  );
};

export default AdminDashboard;

