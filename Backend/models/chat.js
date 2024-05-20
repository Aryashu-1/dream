const { default: mongoose } = require("mongoose");
const { message } = require("./message");


const chatSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    },
    to: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    },
    message:[
        {
            type : mongoose.Schema.ObjectId,
            ref: 'message'
        }
    ]


},{timestamps: true})

const chat = mongoose.model('chat', chatSchema)

module.exports = {chat}