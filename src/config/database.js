const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error("DATABASE_URL is missing in .env");
  }

  // Local Docker Mongo listens on 27018 for this project
  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 8000,
  });
  console.log("MongoDB connected");
};

module.exports = connectDB;
