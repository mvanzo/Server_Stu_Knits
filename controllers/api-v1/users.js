const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const db = require("../../models")

// POST /users/register -- CREATE a new user
router.post("/register", async (req, res) => {
    try {
        // check if the user exist already -- dont allow them to sign up again
        const userCheck = await db.User.findOne({
            email: req.body.email,
        })

        if (userCheck)
            return res.status(409).json({
                msg: "did you forget that you already signed up w that email? 🧐",
            })

        // hash the pass (could validate if we wanted)
        const salt = 12
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create a user in th db
        const newUser = await db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            // admin set to false automatically
            admin: false,
        })

        // create a jwt payload to send back to the client
        const payload = {
            name: newUser.name,
            email: newUser.email,
            id: newUser.id,
            admin: newUser.admin,
        }

        // sign the jwt and send it (log them in)
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24,
        })
        res.json({ token })
    } catch (err) {
        console.log(err)
        res.status(503).json({ msg: "oops server error 503 🔥😭" })
    }
})

// POST /users/login -- validate login credentials
router.post("/login", async (req, res) => {
    // try to find the use in the db that is logging in
    const foundUser = await db.User.findOne({
        email: req.body.email,
    })

    // if the user is not found -- return and send back a message that the user needs to sign up
    if (!foundUser)
        return res.status(400).json({ msg: "bad login credentials 😢" })

    // check the password from the req.body again the password in the db
    const matchPasswords = await bcrypt.compare(
        req.body.password,
        foundUser.password
    )

    // if the provided info does not match -- send back an error message and return
    if (!matchPasswords)
        return res.status(400).json({ msg: "bad login credentials 😢" })

    // create a jwt payload
    const payload = {
        name: foundUser.name,
        email: foundUser.email,
        id: foundUser.id,
        admin: foundUser.admin,
    }

    // sign the jwt
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
    })

    // send it back
    // res.json({ token })

    // decode the token
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    res.json({ decode })

})

module.exports = router