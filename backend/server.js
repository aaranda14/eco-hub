const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/eco-hub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Import product routes
const productRoutes = require('./routes/product.routes');

// Use product routes
app.use('/products', productRoutes);

// Handle the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is the root endpoint!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
