const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGODB connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB server issue ${error}`);
  }
};
module.exports = connectDB;
