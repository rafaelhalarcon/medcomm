const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const socketio = require('socket.io')
const io = new socketio.Server(server)
const path = require('path')


//import routes
const signUpRouter = require("./routes/signup");

// Routes messages
const messages = require('./routes/messageRoutes')
app.use('/messages',messages)

// Socket.io
io.on("connection", (socket) => { 
    socket.on('disconnect',() => {console.log('socket is disconnected')})
  
    console.log('socket is connected')
})

//socket.io local test run
app.use('/',  express.static('./test'))


// static page config to test socket.io
const publicDirectoryPath = path.join(__dirname, './testSocket')

app.use(express.static(publicDirectoryPath))

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/signup", signUpRouter);





module.exports = server