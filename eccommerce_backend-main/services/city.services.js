const db = require('../db/db');
const dbCity = db.City;

exports.addCity = async (cityData) => {
    try {
        const city = new dbCity(cityData);
        return await city.save();
    } catch (error) {
        throw new Error('Error saving city: ' + error.message);
    }
};

exports.getCities = async () => {
    try {
        return await dbCity.find();
    } catch (error) {
        throw new Error('Error fetching cities: ' + error.message);
    }
};

exports.updateCity = async (state, updatedData) => {
    try {
        return await dbCity.findOneAndUpdate({ state }, updatedData);
    } catch (error) {
        throw new Error('Error updating city: ' + error.message);
    }
};
