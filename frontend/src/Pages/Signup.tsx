import React from "react";
import {
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import TextFieldSIgnupCo from "../Component/Textfield/TextFieldSIgnupCo";
import { SignupProp } from "../Model/Model";
import { state } from "../Data/Array";
import { Cities } from "../Data/Array";
import { useState } from "react";
import { Formik, Form } from "formik";
import Lottie from "lottie-react";
import { useEffect } from "react";
import gg from "../img/gg.json";
// import SelectFIeld from "../Component/Textfield/Selectfield/SelectFIeld";
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
  Gender,
  Id,
}: SignupProp) => {
  // const [sstate, setstate] = useState<string>("");
  const [singupdata, setsingupdata] = useState<SignupProp>({
    firstName: "Mirza",
    lastName: "Galib",
    email: "MIrza@galib.com",
    shopName: "YENagma",
    State: "UP",
    City: "Lucknow",
    pincode: 0,
    phoneNumber: 0,
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    Gender: "male",
    filename: "",
    Id,
  });
  const [selectedfiles, setSelected] = useState<File>();
  const [selectedidImage, setSelectedImage] = useState<File>();

  const postData = (data: any) => {
    console.log(data, "data submitted successfully");
  };

  const gender = ["male", "female", "others"];

  useEffect(() => {
    setsingupdata((value) => ({
      ...value,
      [value.filename]: selectedfiles?.name,
    }));
  }, [selectedfiles]);
  // console.log(selectedfiles?.name);
  // console.log(singupdata);

  return (
    <>
      <Grid
        container
        sx={{
          textAlign: "center",
          // border: "2px solid green",
          inset: "0px",
        }}
      >
        <Grid
          sx={{
            textAlign: "center",
            // border: "2px solid blue",
          }}
          item
          xs={12}
        >
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",

              height: "100%",
              width: "100%",
              paddingleft: "12px",
              paddingRight: "10px",
              // paddingTop: "5px",
              // paddingBottom: "5px",
              // border: "2px solid red",
            }}
          >
            <Formik
              initialValues={singupdata}
              onSubmit={(values, actions) => {
                // console.log(values, "hello");
                postData(values);
              }}
              enableReinitialize={true}
            >
              <Form>
                <Box
                  sx={{
                    minHeight: 700,
                    width: 500,
                    border: "2px solid grey",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                    paddingBottom: "20px",

                    // marginLeft: 50,
                    // marginRight: 50,
                  }}
                >
                  <Lottie
                    style={{
                      height: "180px",
                    }}
                    animationData={gg}
                    loop={true}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
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
                      marginTop: "10px",
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
                      marginTop: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <InputLabel
                        sx={
                          {
                            // textAlign: "center",
                          }
                        }
                      >
                        Date of birth
                      </InputLabel>
                      <TextField
                        sx={{
                          width: 170,
                        }}
                        type="date"
                        onChange={(e) => {
                          setsingupdata({
                            ...singupdata,
                            dateOfBirth: e.target.value,
                          });
                        }}
                        name=" dateofBirth "
                        // label="Date of Birth"
                        value={singupdata.dateOfBirth}
                        size="small"
                        // variant={"standard"}
                      >
                        {singupdata.dateOfBirth}
                      </TextField>
                    </Box>
                    <Box>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        sx={{
                          width: 170,
                        }}
                        size="small"
                        value={singupdata.Gender}
                      >
                        {gender.map((item: string) => (
                          <MenuItem
                            onClick={(e) => {
                              setsingupdata({ ...singupdata, Gender: item });
                            }}
                            value={item}
                          >
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      // marginLeft: "40px",
                      marginTop: "10px",
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
                      marginTop: "10px",
                    }}
                  >
                    {/* <label>First Name</label> */}
                    <TextFieldSIgnupCo
                      // sx={{
                      //   width: "45%",
                      // }}
                      setsingupdata={setsingupdata}
                      type="password"
                      name="password"
                      label="password"
                      value={singupdata.password}
                      size="small"
                      // variant={"standard"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    {/* <label>First Name</label> */}
                    <TextFieldSIgnupCo
                      // sx={{
                      //   width: "45%",
                      // }}
                      setsingupdata={setsingupdata}
                      type="password"
                      name="confirmPassword"
                      label="confirmPassword"
                      value={singupdata.confirmPassword}
                      size="small"
                      // variant={"standard"}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
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
                      // display: "flex",
                      // border: "2px solid black",
                      display: "grid",
                      justifyContent: "center",
                      gridTemplateColumns: "1fr 1fr",
                      width: 340,
                    }}
                  >
                    <Box
                      sx={{
                        // width: 150,
                        marginTop: "10px",
                      }}
                    >
                      <InputLabel>Select State</InputLabel>
                      <Select
                        sx={{
                          width: 173,
                          // marginTop: "10px",
                        }}
                        value={singupdata.State}
                        size="small"
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
                        // width: 150,
                        marginTop: "10px",
                      }}
                    >
                      <InputLabel>Select City</InputLabel>
                      <Select
                        sx={{
                          width: 173,
                          // marginTop: "10px",
                        }}
                        value={singupdata.City}
                        size="small"
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
                  <Typography
                    sx={{
                      // border: "2px solid black",
                      marginTop: "10px",
                    }}
                  >
                    Verify your Shop
                  </Typography>
                  {/* <SelectFIeld
                    setsingupdata={setsingupdata}
                    state={state}
                    // type="text"
                    name="firstName"
                    label= "First Name"
                    value={singupdata.State}
                  /> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    {/* <label>First Name</label> */}
                    <TextFieldSIgnupCo
                      setsingupdata={setsingupdata}
                      type="text"
                      name="Id"
                      label="Enter your Government ID"
                      value={singupdata.Id}
                      size="small"
                      // variant={"standard"}
                    />
                    <Button
                      sx={{
                        marginTop: "4px",
                      }}
                      size="small"
                      variant="outlined"
                      component="label"
                    >
                      {selectedidImage?.name == undefined
                        ? "upload ID Image"
                        : selectedidImage?.name}
                      <input
                        accept="image/*"
                        onChange={(e) => setSelectedImage(e.target.files?.[0])}
                        type="file"
                        hidden
                      />
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        // border: "2px solid black",
                        marginTop: "10px",
                      }}
                    >
                      Upload your photo along with your shop
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "4px",
                        // width: 400,
                      }}
                    >
                      <Button
                        sx={{
                          width: "21.5rem",
                        }}
                        size="small"
                        variant="outlined"
                        component="label"
                      >
                        {selectedfiles?.name == undefined
                          ? "upload Image"
                          : selectedfiles?.name}
                        <input
                          accept="image/*"
                          onChange={(e) => setSelected(e.target.files?.[0])}
                          type="file"
                          hidden
                        />
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      bottom: "0px",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      // flexDirection: "column",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        marginBottom: "0px",
                      }}
                      size="small"
                      type="submit"
                    >
                      Signup
                    </Button>
                  </Box>
                </Box>
              </Form>
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
