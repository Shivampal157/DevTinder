const express = require("express");
const bcrypt = require("bcrypt");
const authRouter = express.Router();

const { validateSignUpData } = require("../utils/validation");
const { getCookieOptions } = require("../utils/constants");
const User = require("../models/user");

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    res.cookie("token", token, getCookieOptions());
    res.status(201).json({
      message: "User added successfully!",
      data: savedUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body || {};
    if (!emailId || !password) {
      throw new Error("Email and password are required");
    }

    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const token = await user.getJWT();
    res.cookie("token", token, getCookieOptions());
    res.send(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authRouter.post("/logout", async (_req, res) => {
  res.cookie("token", null, {
    ...getCookieOptions(),
    expires: new Date(Date.now()),
  });
  res.json({ message: "Logout successful" });
});

module.exports = authRouter;
