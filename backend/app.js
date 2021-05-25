const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const conversationRoute = require('./routes/conversations')
const messageRoute = require('./routes/messages')
const signUpRouter = require("./routes/signup")


//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))




//Routes signup & login

app.use("/signup", signUpRouter);



//Routes for Conversations
app.use('/conversations', conversationRoute)

// Routes for Messages
app.use('/messages', messageRoute)


// Socket.io
// io.on("connection", (socket) => { 
//     socket.on('disconnect',() => {console.log('socket is disconnected')})
  
//     console.log('socket is connected')
//})

//socket.io local test run
//app.use('/',  express.static('./test'))


// // static page config to test socket.io
// const publicDirectoryPath = path.join(__dirname, './testSocket')

// app.use(express.static(publicDirectoryPath))




module.exports = app