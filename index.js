const express = require('express')

const app = express()
const PORT = 8000

app.listen(PORT, ()=>console.log(`listening to port ${PORT} in the morning 🎧`))