require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conversationSchema = new Schema({

    participants:{ 
        type:Array,
    },
   
},
{
    timestamps:true,
}
)

module.exports = mongoose.model('Conversation', conversationSchema, 'conversation')