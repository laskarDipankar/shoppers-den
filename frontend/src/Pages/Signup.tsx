import React from "react";
import {
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import TextFieldSIgnupCo from "../Component/Textfield/TextFieldSIgnupCo";
import { SignupProp } from "../Model/Model";
import { useState } from "react";
let state: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];
let Cities: string[] = [
  "Dhuburi",
  "Dibrugarh",
  "Dispur",
  "Guwahati",
  "Jorhat",
  "Nagaon",
  "Sivasagar",
  "Silchar",
  "Tezpur",
  "Tinsukia",
];

const Signup = ({
  firstName,
  lastName,
  email,
  shopName,
  State,
  City,
  pincode,
  phoneNumber,
  password,
  confirmPassword,
  dateOfBirth,
}: SignupProp) => {
  // const [sstate, setstate] = useState<string>("");
  const [singupdata, setsingupdata] = useState<SignupProp>({
    firstName: "",
    lastName: "",
    email: "",
    shopName: "",
    State: "",
    City: "",
    pincode: 0,
    phoneNumber: 0,
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  console.log(singupdata);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",

              height: "100vh",
              paddingleft: "12px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              // border: "2px solid red",
            }}
          >
            <Box
              sx={{
                minHeight: 700,
                width: 550,
                border: "2px solid black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {/* <label>First Name</label> */}
                <TextFieldSIgnupCo
                  //  sx={{width: "45%"}}
                  setsingupdata={setsingupdata}
                  type="text"
                  name="firstName"
                  label="First Name"
                  value={singupdata.firstName}
                  size="small"
                  // variant={"standard"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {/* <label>First Name</label> */}
                <TextFieldSIgnupCo
                  // sx={{
                  //   width: "45%",
                  // }}
                  setsingupdata={setsingupdata}
                  type="text"
                  name="lastName"
                  label="Last Name"
                  value={singupdata.lastName}
                  size="small"
                  // variant={"standard"}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  // marginLeft: "40px",
                  marginTop: "20px",
                  justifyContent: "center",
                  // border: "2px solid black",
                }}
              >
                {/* <label>Email</label> */}
                <TextFieldSIgnupCo
                  // sx={{
                  //   width: "45%",
                  // }}
                  setsingupdata={setsingupdata}
                  type="email"
                  name="email"
                  label="Email"
                  value={singupdata.email}
                  size="medium"
                  // variant={"standard"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {/* <label>First Name</label> */}
                <TextFieldSIgnupCo
                  // sx={{
                  //   width: "45%",
                  // }}
                  setsingupdata={setsingupdata}
                  type="text"
                  name="shopName"
                  label="Shop Name"
                  value={singupdata.shopName}
                  size="small"
                  // variant={"standard"}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    marginTop: "20px",
                  }}
                >
                  <InputLabel>Select State</InputLabel>
                  <Select
                    sx={{
                      width: 200,
                      // marginTop: "20px",
                    }}
                    value={singupdata.State}
                  >
                    {state.map((item: string) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            setsingupdata({ ...singupdata, State: item });
                            // setstate(item);
                          }}
                          value={item}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Box>
                <Box
                  sx={{
                    width: 200,
                    marginTop: "20px",
                  }}
                >
                  <InputLabel>Select City</InputLabel>
                  <Select
                    sx={{
                      width: 200,
                      // marginTop: "20px",
                    }}
                    value={singupdata.City}
                  >
                    {Cities.map((item: string) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            setsingupdata({ ...singupdata, City: item });
                            // setstate(item);
                          }}
                          value={item}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
