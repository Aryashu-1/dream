
const express = require('express')
const { createUser,checkIfUserExists } = require('../controllers/userControl')
const userRouter = express.Router()


userRouter.route('/signup')
.post(createUser)

userRouter.route('/signin')
.post(checkIfUserExists)



module.exports = userRouter