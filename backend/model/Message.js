require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
   
    conversationId:{ 
        type:String
    }, 
    sender:{ 
        type:String
    },
    text:{
        type: String,
     required: true
    }, 
    
  },
    {
    timestamps:true,
    }

)

module.exports = mongoose.model('Message', messageSchema,'message') 