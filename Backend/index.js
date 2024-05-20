require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()

// Connect to DB
try {
    mongoose.connect(process.env.DBURL)
    .then(()=>console.log(`Connected to DB`))
} catch (error) {
    console.log(error)
}

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json)

// Routes
const messageRouter = require('./routers/messageRouter')
const userRouter = require('./routers/userRouter')

app.use('/user',userRouter)
app.use('/message',messageRouter)

// Final listen
const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`listening on Port ${PORT}`))