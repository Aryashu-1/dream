
const express = require('express')
const { createMessage, getMessage, createChat } = require('../controllers/chatControl')
const messageRouter = express.Router()


messageRouter.route('/')
.post(createChat)
.get()
.delete()
.patch()

messageRouter.route('/message')
.post(createMessage)
.get(getMessage)
.delete()
.patch()



module.exports = messageRouter