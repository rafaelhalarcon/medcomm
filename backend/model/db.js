const mongoose = require("mongoose");
require("dotenv").config();

// const localMongoUrl = "mongodb://localhost:27017"

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.once("open", (_) => console.log("MongoDB is now connected:"));
db.on("error", (err) => console.error("MongoDB connection error!", err));

module.exports = mongoose;
