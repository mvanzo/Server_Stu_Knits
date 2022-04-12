const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    timeToMake: String,
    price: Number
})

module.exports = mongoose.model('Product', ProductSchema)