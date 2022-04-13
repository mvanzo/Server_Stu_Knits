const express = require("express")
const router = express.Router()
const db = require("../../models")

// add starter db object
router.post('/', async (req, res)=> {
    try{
        const allProducts = await db.Product.insertMany([{
            name: req.body.name,
            description: req.body.description,
            timeToMake: req.body.timeToMake,
            price: req.body.price
        }])
        res.json({ msg: 'this route is working' })
    } catch(err){
        console.log(err)
    }
})

// router.post('/add-all', async (req, res)=> {
//     try{
//         const addAll = await db.Product.insertMany(data)
//     }catch (err){
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
            price: req.body.price
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