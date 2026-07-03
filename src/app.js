const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("database can not be connected");
  });