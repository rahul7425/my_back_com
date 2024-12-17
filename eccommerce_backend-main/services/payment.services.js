const instance = require('../razorpay');
const crypto = require("crypto");
const db = require('../db/db');
const dbOrder = db.Order;

exports.createCheckoutOrder = async (amount) => {
    try {
        const options = {
            amount: amount * 100, // Convert amount to paise 
            currency: 'INR'
        };
        return await instance.orders.create(options);
    } catch (error) {
        throw new Error('Error creating Razorpay order: ' + error.message);
    }
};

exports.verifyPayment = async (orderId, paymentData) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentData;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSign === razorpay_signature) {
            const updatedOrder = await dbOrder.findOneAndUpdate(
                { _id: orderId },
                { paymentStatus: "SUCCESS" },
                { new: true }
            );
            return updatedOrder;
        } else {
            throw new Error('Payment verification failed');
        }
    } catch (error) {
        throw new Error('Error verifying payment: ' + error.message);
    }
};
 