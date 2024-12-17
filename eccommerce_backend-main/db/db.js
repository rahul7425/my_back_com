const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB connection URL from environment variables
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/ecommerce'; // Fallback to local MongoDB if not set

// Optional: Configure Mongoose to avoid warnings
mongoose.set('strictQuery', true);

// Function to establish MongoDB connection
async function connectToDatabase() {
    try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection established successfully');
    

    // Event listeners for connection events
    mongoose.connection.on('connected', () => {
      console.log('MongoDB is connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB is disconnected');
    });

    // Graceful shutdown handling
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to application termination.');
      process.exit(0);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

// Call the connection function
connectToDatabase();

// Export models
module.exports = {
  User: require('../models/user.model'),
  Product: require('../models/product.model'),
  Cart: require('../models/cart.model'),
  Order: require('../models/order.model'),
  Address: require('../models/address.model'),
  City: require('../models/city.model'),
  Category: require('../models/category.model'),
  Cartitem: require('../models/cartitem.model'),
  Orderitem: require('../models/orderitem.model'),
};
