const express = require('express');
const instance = require('../razorpay');
const crypto = require("crypto");

const db = require("../db/db");

const dbOrder = db.Order

const router = express.Router()

router.post('/checkout', async (req, res) => {
    const { amount } = req.body;

    const options = {
        amount: amount * 100,
        currency: 'INR'
    };
    try {
        const response = await instance.orders.create(options);
        res.send(response)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); 

router.post('/paymentverification/:id', async (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex');

    var response = { "signatureIsValid": "false" }
    if (expectedSign === razorpay_signature) {

        await dbOrder.findOneAndUpdate({ _id: req.params.id }, ({ paymentStatus: "SUCCESS" })).then((result) => {
            res.redirect(`http://localhost:5173/checkout/ordersuccess?reference=${razorpay_payment_id}`)
        })

    } else {
        res.send("Payment failure")
    }
});

module.exports = router
