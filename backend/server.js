// const express = require("express"); //import package
//const app = express(); //execute package
// const db = require('./model/db');
const server = require("./app")



// Port that the webserver listens to
const port = process.env.PORT || 4000



server.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
}); 