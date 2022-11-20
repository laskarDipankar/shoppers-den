import React, { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Pages/Feed";
import Shop from "./Pages/Shop";
import Admin from "./Pages/Admin";
import AdminLogin from "./Pages/AdminLogin";
import AppbarMain from "./Component/Appbar";
import Home from "./Pages/Home";
import "leaflet/dist/leaflet.css";

const user = JSON.parse(localStorage.getItem("admintoken") || "{}");
const ulogin = JSON.parse(localStorage.getItem("usertoken") || "{}");

function App() {
  // const [tokenadmin, settokenadmin] = React.useState(
  //   JSON.parse(localStorage.getItem("admintoken") || "{}")
  // );

  console.log(user, "admin");
  return (
    <>
      {/* <Login /> */}

      <BrowserRouter>
        {user.token ? <AppbarMain /> : <AppbarMain />}

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
                ufirstName={""}
                ulastName={""}
                uemail={""}
                shopName={""}
                State={""}
                City={""}
                pincode={0}
                phoneNumber={0}
                upassword={""}
                uconfirmPassword={""}
                dateOfBirth={""}
                filename={""}
                Gender={""}
                Id={0}
              />
            }
          />
          {ulogin.userlogin ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route
              path="/"
              element={<Login email={"email"} password={"password"} />}
            />
          )}
          <Route path="/shop/:id" element={<Shop />} />

          {user.adminlogin ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<AdminLogin />} />
          )}
          {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
          <Route path="/home" element={<Feed />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//testing
