const {user} = require('../models/user')


async function createUser(req,res){

    try {
        
        const new_user = await user.create({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        return res.status(201).send(new_user)
        
    } catch (error) {
        console.log(error)
        return res.status(400).send(null)
    }

}


module.exports = {
    createUser
}