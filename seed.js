const mongoose = require('mongoose')
const db = require('./models')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/stu_knits'
mongoose.connect(MONGODB_URI)

const data = {
    products: [
        {
            name: "Fisherman Sweater",
            description: "A really nice sweater that can be dressed up or dressed down",
            yarn: 'Brooklyn Tweed Shelter',
            priceInCents: 25000,
            imgUrl: "https://i.imgur.com/XeTnyLS.jpg"
        },
        {
            name: "Speckled Winter Hat",
            description: "Chill style hat made with merino wool",
            yarn: 'Cloudborn Superwash Merino Bulky',
            priceInCents: 4000,
            imgUrl: "https://i.imgur.com/HI4050C_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
        },
        {
            name: "Hipster Hat",
            description: "Ribbed, comfy hat for any day. Make sure to look the part while drinking kombucha out of your mason jar",
            yarn: 'Sunday from Sandnes Garn',
            priceInCents: 4500,
            imgUrl: "https://i.imgur.com/TY5hhyw.jpg"
        },
        {
            name: "Weekend Slipover",
            description: "Modern take on the classic sweater vest",
            yarn: 'Woolfolk Luft and Shibu Knits Silk Cloud',
            priceInCents: 15000,
            imgUrl: "https://i.imgur.com/goJ7Wyz_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
        },
        {
            name: "Twisted Rib Mittens",
            description: "Comfortable, warm mittens with a ribbed cuff",
            yarn: 'Blue Sky Fibers held together with New Sky Light',
            priceInCents: 4500,
            imgUrl: "https://i.imgur.com/n1fWRZr.jpg"
        },
        {
            name: "Gingham Tote",
            description: "Lined knit tote for your summer picnic",
            yarn: 'Shiny Happy Cotton',
            priceInCents: 12500,
            imgUrl: "https://i.imgur.com/0UA4PP7.jpg"
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