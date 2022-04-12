require('./models')
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {
    res.json({msg:'welcome to the user app'})
})

app.listen(PORT, ()=>console.log(`listening to port ${PORT} in the morning 🎧`))