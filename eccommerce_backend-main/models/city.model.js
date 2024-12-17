const mongoose = require('mongoose');

const Schema = mongoose.Schema

const City = new Schema({
    state:{type:String},
    city:[{type:String}]
})

module.exports = mongoose.model("cities", City)
