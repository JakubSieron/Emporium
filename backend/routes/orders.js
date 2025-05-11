const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// ✅ GET /api/orders - fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // optional: newest first
    res.json(orders); // this must return an array
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders', error: err });
  }
});

// ✅ POST /api/orders - create a new order
router.post('/', async (req, res) => {
  const { email, items, total } = req.body;

  if (!email || !Array.isArray(items) || items.length === 0 || !total) {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  try {
    const newOrder = new Order({ email, items, total });
    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error saving order', error: err });
  }
});

module.exports = router;
