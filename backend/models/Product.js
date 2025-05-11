const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  category: String,
  price: Number,
  featured: { type: Boolean, default: false },
  trending: { type: Boolean, default: false },
  discounted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);
