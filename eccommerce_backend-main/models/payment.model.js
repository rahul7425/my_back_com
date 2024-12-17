const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Payment = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'orders',
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['PENDING', 'SUCCESS', 'FAILED'],
        default: 'PENDING'
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('payments', Payment);
