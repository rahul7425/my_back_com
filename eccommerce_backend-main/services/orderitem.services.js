const db = require('../db/db');
const dbOrderitem = db.Orderitem;

exports.addOrderItems = async (orderItemsData) => {
    try {
        return await dbOrderitem.insertMany(orderItemsData);
    } catch (error) {
        throw new Error('Error adding order items: ' + error.message);
    }
};
