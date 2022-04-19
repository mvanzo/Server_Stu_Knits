const express = require("express")
const router = express.Router()
const db = require("../../models")

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

router.post('/', async (req, res)=> {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item=> {
                return{
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.priceInCents
                    },
                    quantity: item.quantity
                }
            }),

            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}`,
        })
        res.json({ url: session.url })
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router