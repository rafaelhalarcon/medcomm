// const express = require("express"); //import package
//const app = express(); //execute package
// const db = require('./model/db');
const app = require("./app");

const port = process.env.PORT || 4444
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
}); 