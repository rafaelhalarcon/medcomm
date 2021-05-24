require('./db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({
   
    conversation:{ 
        type:Schema.Types.ObjectId, ref: 'conversation',
    }, 
    fromUser:{ 
        type:Schema.Types.ObjectId, ref: 'users'
    },
    toUser:{ 
        
        type: Schema.Types.ObjectId, ref: 'users'
    },
    text:{
        type: String,
    required: true
    }, 
    date: {
        type: String,
        default: Date.now,
    },
},
    {
    timestamps:true,
    }

)

module.exports = Message = mongoose.model('messages', messageSchema)