const mongoose = require('mongoose');

const DB_URL = process.env.MongoDb;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`mongoose is connected to Db ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
