const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const cors = require('cors')

//import routes
const signUpRouter = require("./routes/signup");

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/signup", signUpRouter);


module.exports = app;