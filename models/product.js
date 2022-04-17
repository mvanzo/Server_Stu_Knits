const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    yarn: String,
    priceInCents: Number,
    imgUrl: String
})

module.exports = mongoose.model('Product', ProductSchema)