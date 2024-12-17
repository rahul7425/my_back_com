const db = require('../db/db');
const dbOrder = db.Order;

exports.createOrder = async (orderData) => {
    try {
        const order = new dbOrder(orderData);
        return await order.save();
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};

exports.getOrderHistory = async (user, page = 1, limit = 5) => {
    try {
        const skip = (page - 1) * limit;
        const orders = await dbOrder.find({ user })
            .skip(skip)
            .limit(limit)
            .populate("user")
            .populate("shippingAddress")
            .populate({
                path: 'orderitem',
                populate: [{ path: 'product' }]
            });

        const totalCount = await dbOrder.countDocuments({ user });
        return {
            orders,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
                totalItems: totalCount
            }
        };
    } catch (error) {
        throw new Error('Error fetching order history: ' + error.message);
    }
};

exports.getAllOrders = async (filter) => {
    try {
        return await dbOrder.find(filter).populate("user").populate("orderitem").populate("shippingAddress");
    } catch (error) {
        throw new Error('Error fetching orders: ' + error.message);
    }
};
