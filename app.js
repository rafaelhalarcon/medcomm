const express = require("express"); //import package
const app = express(); //execute package
const db = require('./db');

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
}); 