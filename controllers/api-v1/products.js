const express = require("express")
const router = express.Router()
const db = require("../../models")

// add product
router.post('/add', async (req, res)=> {
    const newProduct = await db.Product.create({
        name: req.body.name,
        description: req.body.description,
        timeToMake: req.body.timeToMake,
        price: req.body.price
    })
    res.json('products page route working')
})

// display all products
router.get('/', async (req, res)=> {
    const findAllProducts = await db.Product.find({})
    console.log(findAllProducts)
    res.json({
        findAllProducts
    })
})

module.exports = router