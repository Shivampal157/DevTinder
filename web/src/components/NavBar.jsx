import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { addFeed } from "../utils/feedSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(addFeed(null));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-200/80 backdrop-blur border-b border-base-300 px-4 md:px-8">
      <div className="flex-1">
        <Link
          to={user ? "/feed" : "/"}
          className="text-2xl font-extrabold italic text-primary"
        >
          DevTinder
        </Link>
      </div>

      {!user && (
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Login
          </Link>
          <Link to="/login?mode=signup" className="btn btn-primary btn-sm">
            Sign Up
          </Link>
        </div>
      )}

      {user && (
        <div className="flex items-center gap-3">
          <p className="hidden sm:block">Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/feed">Feed</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
