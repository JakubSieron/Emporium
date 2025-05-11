const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: [
    {
      id: { type: String, required: true },
      title: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
