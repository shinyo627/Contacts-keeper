const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGO_URI;

// Mongoose return promises
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
