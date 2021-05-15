const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });
const db =mongoose.connection;  
db.once('open', (_) =>
  console.log('MongoDB is now connected:'));
db.on('error', (err) => console.error('MongoDB connection error!', err));
  
module.exports = mongoose;