require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conversationSchema = new Schema({

    participants:[{ 
        type:Schema.Types.ObjectId, ref: 'users',
    }],
    lastMessage:{
        type:String,
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = Conversation = mongoose.model('conversations', conversationSchema)