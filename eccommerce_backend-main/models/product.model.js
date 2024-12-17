const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Product = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    title: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    size: [{ 
        type: String
    }],
    quatity: {
        type: Number
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    discount_price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    }

});

module.exports = mongoose.model("products", Product)
