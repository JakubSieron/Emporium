import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminModal from '../components/AdminModal/AdminModal';
import './AdminDashboard.css'; // Keep this if you're using it

const AdminDashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="admin-actions">
        <button onClick={() => setShowModal(true)}>🛠 Manage Products</button>
        <button disabled>📦 View Orders (Coming Soon)</button>
      </div>

      {showModal && <AdminModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AdminDashboard;

