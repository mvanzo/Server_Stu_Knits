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
            imgUrl: "https://n.nordstrommedia.com/id/sr3/fcbe293d-298d-40e3-92d7-b1faf8ced7b1.jpeg?h=365&w=240&dpr=2"
        },
        {
            name: "Red Hat",
            description: "Chill Style Hat",
            timeToMake: "15 hours of knitting time",
            price: 40,
            imgUrl: "https://filson-products.imgix.net/images/11030235/Red/11030235_Red_main_001.png?h=700&w=1500&bg=ffffff&q=80&auto=format,compress"
        },
        {
            name: "Socks",
            description: "Comfy socks for around the house",
            timeToMake: "8 hours of knitting time",
            price: 30.89,
            imgUrl: "https://freshstitches.com/wp-content/uploads/2010/06/free-easy-knitting-sock-pattern-1024x774.jpg"
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