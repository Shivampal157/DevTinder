import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connections" element={<Connections />} />
          <Route path="requests" element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
