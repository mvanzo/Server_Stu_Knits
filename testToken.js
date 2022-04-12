const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtTest = async ()=> {
    try{
        // simulate a server response when a server logs in
        // create a jwt payload
        const payload = {
            name: 'hello, i am a user',
            id: 'jasdkflds',
            email: 'fakeemail@email.com'
        }
        // sign the jwt
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: (60 * 60) * 24 })
        console.log(token)
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decode)
    } catch(err) {
        console.log(err)
    }
}

jwtTest()