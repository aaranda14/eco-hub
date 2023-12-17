const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: Number,
  id: { type: Number, unique: true },
  title: String,
  body: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
