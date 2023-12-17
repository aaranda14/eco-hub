const express = require('express');
const mongoose = require('mongoose'); // Add this line
const router = express.Router();
const Product = require('../models/product.model');

// Get all products
router.get('/', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a specific product
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  console.log('Backend Route - Product ID:', productId);

  const query = isNaN(productId) ? { _id: productId } : { id: parseInt(productId) };

  Product.findOne(query)
    .then(product => {
      console.log('Backend Route - Fetched Product:', product);
      res.json(product);
    })
    .catch(err => {
      console.error('Backend Route - Error:', err);
      res.status(400).json('Error: ' + err);
    });
});

// Create a product
router.post('/', async (req, res) => {
  const newProductData = req.body;

  // Manually assign a unique ID (you can use a counter or another approach)
  const lastProduct = await Product.findOne().sort({ id: -1 }).limit(1);
  const newProductId = lastProduct ? lastProduct.id + 1 : 1;

  const newProduct = new Product({
    ...newProductData,
    id: newProductId,
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a product
router.put('/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  Product.findOneAndUpdate(
    { id: productId },
    { $set: updatedProduct },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).json('Product not found');
      }
      res.json(product);
    })
    .catch((err) => {
      console.error('Error updating product:', err);
      res.status(400).json('Error: ' + err);
    });
});

// Delete a product
router.delete('/:id', (req, res) => {
  const productId = req.params.id;

  // Ensure the provided ID is a valid integer
  const productIdInt = parseInt(productId, 10);
  if (isNaN(productIdInt)) {
    return res.status(400).json('Invalid product ID');
  }

  Product.findOneAndDelete({ id: productIdInt })
    .then(deletedProduct => {
      if (!deletedProduct) {
        return res.status(404).json('Product not found');
      }
      res.json('Product deleted.');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
