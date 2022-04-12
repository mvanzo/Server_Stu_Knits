const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String,
    admin: Boolean
})

module.exports = mongoose.model('User', UserSchema)