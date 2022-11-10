const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Project");
    console.log(`mongoose is connected to Db ${conn.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
