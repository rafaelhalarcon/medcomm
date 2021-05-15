const express = require("express");
const app = express();

//import route
const signUpRouter = require("./routes/signup");

app.use(express.json());

app.use("/signup", signUpRouter);


module.exports = app;