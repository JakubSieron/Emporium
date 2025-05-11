import React, { useEffect, useState } from 'react';
import styles from './AdminModal.module.scss';

type Order = {
  _id: string;
  email: string;
  total: number;
  items: { title: string; quantity: number; price: number }[];
};

type Props = {
  onClose: () => void;
};

const AdminOrdersModal: React.FC<Props> = ({ onClose }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
  fetch('http://localhost:5000/api/orders')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched orders:', data); // 🐞 Debug line
      setOrders(data);
    })
    .catch(err => console.error('Failed to fetch orders', err));
}, []);


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2>Customer Orders</h2>

  <div className={styles.orderList}>
      {orders.map(order => (
        <div key={order._id} className={styles.orderCard}>
          <h4>{order.email}</h4>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>
                {item.title} × {item.quantity} – €{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> €{order.total.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default AdminOrdersModal;
