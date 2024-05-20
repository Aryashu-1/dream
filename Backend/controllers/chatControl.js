const { chat } = require("../models/chat");
const {message} = require("../models/message");


async function createChat(req,res){

    try {
        
        const new_chat = await chat.create({
    
            from: req.body.from,
            to: req.body.to,
        })
    
        return res.status(201).send(new_chat)

    } catch (error) {
        return res.status(400).send(null)
    }

}

async function createMessage(req,res){

    try {
        
        const new_message = await message.create({
            body: req.body.body
        })

        const my_chat = await chat.findOneAndUpdate({_id:req.body.id},
            {$push : {message : new_message._id}}
        )


        return res.status(201).send(new_message)
        
    } catch (error) {
        console.log(error)
        return res.status(400).send(null)
    }

}

async function getMessage(req,res){


}


module.exports = {
    createMessage,
    getMessage,
    createChat
}