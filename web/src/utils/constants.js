export const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:7777"
    : "/api";

export const getErrorMessage = (err) => {
  if (!err?.response) {
    return "Cannot reach server. Make sure backend is running on port 7777.";
  }
  const data = err.response.data;
  if (typeof data === "string") return data;
  return data?.message || "Something went wrong";
};
