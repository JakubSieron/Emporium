const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET single product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// POST new product (for testing)
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.status(201).json(saved);
});

module.exports = router;
