const express = require("express");
const bcrypt = require("bcrypt");
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const {
  validateEditProfileData,
  validatePasswordChange,
} = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    const requestBody = req.body || {};
    const incomingFields = Object.keys(requestBody);

    if (incomingFields.length === 0) {
      throw new Error("No profile fields provided to edit");
    }

    if (
      incomingFields.includes("password") ||
      incomingFields.includes("oldPassword") ||
      incomingFields.includes("newPassword") ||
      incomingFields.includes("emailId")
    ) {
      throw new Error("These fields cannot be edited here");
    }

    if (!validateEditProfileData(req)) {
      throw new Error("Invalid edit request");
    }

    const loggedInUser = req.user;
    incomingFields.forEach((key) => {
      loggedInUser[key] = requestBody[key];
    });

    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your profile has been updated successfully!`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { oldPassword, newPassword } = req.body || {};

    validatePasswordChange(oldPassword, newPassword);

    const isOldPasswordValid = await loggedInUser.validatePassword(oldPassword);
    if (!isOldPasswordValid) {
      throw new Error("Invalid old password");
    }

    loggedInUser.password = await bcrypt.hash(newPassword, 10);
    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your password has been updated successfully!`,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = profileRouter;
