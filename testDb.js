const db = require('./models')

const testUser = async ()=> {
    try {
        const newUser = await db.User.create({
            name: 'Stuart',
            email: 'stu@stu.com',
            password: 'stu',
            admin: false
        })
    } catch(err){
        console.log(err)
    }
}

testUser()