const express = require("express")
const router = express.Router()
const db = require("../../models")

// add starter db object -- DON'T NEED THIS - SEEDING INSTEAD
// router.post('/', async (req, res)=> {
//     try{
//         const allProducts = await db.Product.insertMany([{
//             name: req.body.name,
//             description: req.body.description,
//             timeToMake: req.body.timeToMake,
//             price: req.body.price,
//             imageUrl: req.body.imageUrl
//         }])
//         res.json({ msg: 'this route is working' })
//     } catch(err){
//         console.log(err)
//     }
// })

// add a single product
router.post('/add', async (req, res)=> {
    try{
        const newProduct = await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            timeToMake: req.body.timeToMake,
            price: req.body.price,
            imgUrl: req.body.imageUrl
        })
        res.json('add single product route working')
    } catch (err){
        console.log(err)
    }
})

// display all products
router.get('/', async (req, res)=> {
    try{
        const findAllProducts = await db.Product.find({})
        res.json({ findAllProducts })
    } catch(err) {
        console.log(err)
    }
})

module.exports = router