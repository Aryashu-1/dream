const { default: mongoose } = require("mongoose");


const messageSchema = mongoose.Schema({

    body: {
        type: String,
        required: true
    },
    


},{timestamps: true})

const message = mongoose.model('message', messageSchema)

module.exports = {message}