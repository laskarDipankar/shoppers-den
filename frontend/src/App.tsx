import React from "react";
// import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Pages/Feed";

function App() {
  return (
    <>
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Signup
                firstName={""}
                lastName={""}
                email={""}
                shopName={""}
                State={""}
                City={""}
                pincode={0}
                phoneNumber={0}
                password={""}
                confirmPassword={""}
                dateOfBirth={""}
                filename={""}
                Gender={""}
                Id={0}
              />
            }
          />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//testing
