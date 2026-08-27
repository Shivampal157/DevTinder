const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";

const getCookieOptions = () => ({
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  expires: new Date(Date.now() + 8 * 60 * 60 * 1000),
});

module.exports = {
  USER_SAFE_DATA,
  getCookieOptions,
};
