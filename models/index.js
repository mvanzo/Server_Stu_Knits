require('dotenv').config()
const mongoose = require('mongoose')


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/stu_knits'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection

db.once('open', ()=>console.log(`connected to mongo at ${db.host}:${db.port}`))
db.on('error', err=>{
    console.log('error with database connection')
    console.log(err)
})

module.exports.User = require('./user')
module.exports.Product = require('./product')