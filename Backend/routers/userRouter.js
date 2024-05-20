
const express = require('express')
const { createUser } = require('../controllers/userControl')
const userRouter = express.Router()


userRouter.route('/')
.post(createUser)
.get()
.delete()
.patch()



module.exports = userRouter