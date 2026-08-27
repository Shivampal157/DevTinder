import { useMemo, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL, getErrorMessage } from "../utils/constants";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(
    searchParams.get("mode") !== "signup"
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useMemo(
    () => (isLoginForm ? "Welcome back" : "Create account"),
    [isLoginForm]
  );

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data?.data || res.data));
      navigate("/feed");
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className="hero-glow min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-md bg-base-200 shadow-2xl">
        <div className="card-body items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-xl font-bold">
            DT
          </div>
          <h2 className="text-3xl font-extrabold mt-2">DevTinder</h2>
          <p className="opacity-70">Connect with developers</p>
          <h3 className="text-2xl font-semibold mt-4">{title}</h3>
          <p className="opacity-70">
            {isLoginForm
              ? "Login to continue to DevTinder"
              : "Sign up to find your next coding partner"}
          </p>

          {!isLoginForm && (
            <>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </>
          )}

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              value={emailId}
              placeholder="xyz@example.com"
              className="input input-bordered w-full"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-12"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm opacity-70"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <p className="text-error w-full text-left">{error}</p>
          <button
            className="btn btn-success w-full mt-2"
            onClick={isLoginForm ? handleLogin : handleSignUp}
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer mt-3"
            onClick={() => {
              setError("");
              setIsLoginForm((value) => !value);
            }}
          >
            {isLoginForm ? (
              <>
                Don't have an account?{" "}
                <span className="text-primary font-semibold">Sign up</span>
              </>
            ) : (
              <>
                Existing User?{" "}
                <span className="text-primary font-semibold">Login Here</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
