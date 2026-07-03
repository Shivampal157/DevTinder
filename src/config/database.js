const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://namstedev:cJ1LC9sHuVIU9kX9@namstenode.toqy6sn.mongodb.net/devTinder"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    throw err;
  }
};

module.exports = connectDB;
