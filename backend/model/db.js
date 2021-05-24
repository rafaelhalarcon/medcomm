const mongoose = require('mongoose');
require('dotenv').config();

const localMongoUrl = "mongodb://localhost:27017"

mongoose.connect( localMongoUrl, {
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true,//added useCreateIndex: true, cause i am using local DB for now.
})
const db =mongoose.connection;  
db.once('open', (_) =>
  console.log('MongoDB is now connected:'));
db.on('error', (err) => console.error('MongoDB connection error!', err));
  
module.exports = mongoose;