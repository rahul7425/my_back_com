const db = require('../db/db');
const dbAddress = db.Address;

exports.saveAddress = async (addressData) => {
    try {
        const address = new dbAddress(addressData);
        return await address.save();
    } catch (error) {
        throw new Error('Error saving address: ' + error.message);
    }
};

exports.getSavedAddresses = async (filter) => {
    try {
        return await dbAddress.find(filter);
    } catch (error) {
        throw new Error('Error fetching addresses: ' + error.message);
    }
};
