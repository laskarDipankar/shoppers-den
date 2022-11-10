import React from "react";
// import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      {/* <Login /> */}
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
      />
    </>
  );
}

export default App;

//testing
