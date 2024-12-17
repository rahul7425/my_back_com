const db = require('../db/db');
const dbCategory = db.Category;

exports.addCategory = async (categoryData) => {
    try {
        const category = new dbCategory(categoryData);
        return await category.save();
    } catch (error) {
        throw new Error('Error saving category: ' + error.message);
    }
};

exports.getCategories = async () => {
    try {
        return await dbCategory.find();
    } catch (error) {
        throw new Error('Error fetching categories: ' + error.message);
    }
};
