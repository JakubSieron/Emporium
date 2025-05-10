// backend/importProducts.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./products.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected...');

    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Import new ones

    console.log('Products imported!');
    process.exit();
  })
  .catch(err => {
    console.error('Error importing products:', err);
    process.exit(1);
  });
