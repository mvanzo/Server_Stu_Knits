const mongoose = require('mongoose')
const db = require('./models')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/stu_knits'
mongoose.connect(MONGODB_URI)

const data = {
    products: [
        {
            name: "Green Sweater",
            description: "A really nice sweater that can be dressed up or dressed down",
            timeToMake: "139 hours of knitting time",
            price: 140.21,
        },
        {
            name: "Red Hat",
            description: "Chill Style Hat",
            timeToMake: "15 hours of knitting time",
            price: 40,
        },
        {
            name: "Socks",
            description: "Comfy socks for around the house",
            timeToMake: "8 hours of knitting time",
            price: 30.89,
        },
    ]
}

// seed product db
const seedDb = async () => {
    await db.Product.deleteMany({});
    await db.Product.insertMany(data.products)
}

seedDb().then(() => {
    mongoose.connection.close()
})