const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

// Import Database connection (this will automatically connect to the MongoDB)
require('./db/db.js');

// Increase the payload limit for body parsing (useful for large requests like image uploads or large data)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors({ origin: "*" }));  // Consider specifying a restricted list of origins in production

// Middleware to parse incoming requests (application/json and application/x-www-form-urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

 
// Define routes for different parts of your app (make sure controllers exist for these routes)
app.use('/user', require('./controller/user.controller'));
app.use('/product', require('./controller/product.controller.js'));
app.use('/cart', require('./controller/cart.controller.js'));
app.use('/address', require('./controller/address.controller.js'));
app.use('/category', require("./controller/category.controller.js"));
app.use('/city', require("./controller/city.controller.js"));
app.use('/cartitem', require("./controller/cartitem.controller.js"));
app.use('/payment', require("./controller/payment.controller.js"));
app.use('/orderitem', require("./controller/orderitem.controller.js"));
app.use("/order", require("./controller/order.controller.js"));

// Start the server    
app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}`);
});
