require('./models')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 3002

// middleware
// app.use(
//     cors({
//         origin: 'http://localhost:3000'
//     }
// ))
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {
    res.json({msg:'welcome to the user app'})
})

const config = {
    headers: { Authorization: `Bearer ${process.env.STRIPE_PRIVATE_KEY}` }
};

app.get('/findorders', async (req, res)=> {
    try{
        // let findOrders = await axios.get('https://api.stripe.com/v1/checkout/sessions', config)
        let findOrders = await axios.get('https://api.stripe.com/v1/charges', config)
        res.json(findOrders.data.data)
        // console.log(findOrders.data)
    } catch (err) {
        console.log(err)
    }
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users'))
app.use('/api-v1/products', require('./controllers/api-v1/products'))
app.use('/api-v1/checkout', require('./controllers/api-v1/checkout'))

app.listen(PORT, ()=>console.log(`listening to port ${PORT} in the morning 🎧`))