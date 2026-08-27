const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body || {};

  if (!firstName || !lastName) {
    throw new Error("First name and last name are required");
  }
  if (firstName.length < 2 || firstName.length > 50) {
    throw new Error("First name must be between 2 and 50 characters");
  }
  if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  }
  if (!password || !validator.isStrongPassword(password)) {
    throw new Error(
      "Please enter a strong password (min 8 chars, uppercase, lowercase, number, symbol)"
    );
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const requestBody = req.body || {};
  if (Object.keys(requestBody).length === 0) {
    return false;
  }

  return Object.keys(requestBody).every((field) =>
    allowedEditFields.includes(field)
  );
};

const validatePasswordChange = (oldPassword, newPassword) => {
  if (!oldPassword || !newPassword) {
    throw new Error("Old password and new password are required");
  }
  if (oldPassword === newPassword) {
    throw new Error("New password cannot be same as old password");
  }
  if (!validator.isStrongPassword(newPassword)) {
    throw new Error(
      "Please enter a strong password (min 8 chars, uppercase, lowercase, number, symbol)"
    );
  }
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validatePasswordChange,
};
