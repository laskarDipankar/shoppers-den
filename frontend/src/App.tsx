import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppbarMain from "./Component/Appbar";
import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";
import Feed from "./Pages/Feed";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Pic from "./Pages/Pic";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

const getTokenFromLocalStorage = (key: "usertoken" | "admintoken") => {
  try {
    const token = localStorage.getItem(key);
    if (token) return JSON.parse(token);
    return null;
  } catch (e) {
    return null;
  }
};

function App() {
  const [userToken, setUserToken] = useState(() =>
    getTokenFromLocalStorage("usertoken")
  );

  const [adminToken, setAdminToken] = useState(() =>
    getTokenFromLocalStorage("admintoken")
  );

  useEffect(() => {
    setUserToken(getTokenFromLocalStorage("usertoken"));
    setAdminToken(getTokenFromLocalStorage("admintoken"));
  }, []);

  // console.log({ userToken });
  // console.log({ adminToken });

  return (
    <>
      {/* <Login /> */}

      <BrowserRouter>
        {adminToken ? <AppbarMain /> : <AppbarMain />}

        {/* <AppbarMain /> */}

        <Routes>
          {/* <Route
            path="/login"
            element={<Login email={"email"} password={"password"} />}
          /> */}
          <Route
            path="/signup"
            element={
              <Signup
                shopName={""}
                State={""}
                City={""}
                phoneNumber={0}
                governmentIDImage={""}
                shopImage={""}
                governmentID={""}
              />
            }
          />
          {userToken ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route
              path="/"
              element={<Login email={"email"} password={"password"} />}
            />
          )}
          <Route path="/shop/:id" element={<Shop />} />

          {adminToken ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<AdminLogin />} />
          )}
          {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
          <Route path="/home" element={<Feed />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
          {userToken ? (
            <Route path="/profile/:id" element={<Profile />} />
          ) : (
            <Route
              path="/profile/:id"
              element={<Login email={"email"} password={"password"} />}
            />
          )}
          <Route path="/pic" element={<Pic />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset/:id/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//testing
