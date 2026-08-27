import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const PUBLIC_PATHS = ["/", "/login"];

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);

  useEffect(() => {
    const fetchUser = async () => {
      if (userData) return;
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(addUser(res.data?.data || res.data));
      } catch (err) {
        if (err?.response?.status === 401 && !PUBLIC_PATHS.includes(location.pathname)) {
          navigate("/login");
        }
      }
    };

    fetchUser();
  }, [dispatch, location.pathname, navigate, userData]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
