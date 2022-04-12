require('./models')
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3002

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {
    res.json({msg:'welcome to the user app'})
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users'))

app.listen(PORT, ()=>console.log(`listening to port ${PORT} in the morning 🎧`))