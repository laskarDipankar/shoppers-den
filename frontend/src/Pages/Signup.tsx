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
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { UserSignup } from "../Model/Model";
// import SelectFIeld from "../Component/Textfield/Selectfield/SelectFIeld";
const Signup = (
  {
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
  }: SignupProp,
  {
    fName,
    lName,
    email_id,
    Upassword,
    UconfirmPassword,
    UdateOfBirth,
    UGender,
  }: UserSignup
) => {
  // const [sstate, setstate] = useState<string>("");
  const [singupdata, setsingupdata] = useState<SignupProp>({
    firstName: "",
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

  const [userSignup, setuserSignup] = useState<UserSignup>({
    fName: "Mirza",
    lName: "Ghalib",
    email_id: "MirzaGhalib@gmail.com",
    Upassword: "",
    UconfirmPassword: "",
    UdateOfBirth: "",
    UGender,
  });
  const [sstate, setstate] = useState<string>("");
  const location = useLocation();
  const [selectedfiles, setSelected] = useState<File>();
  const [selectedidImage, setSelectedImage] = useState<File>();

  const postData = (data: any) => {
    console.log(data, "shop data submitted successfully");
  };

  const user = location.state;
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
          // inset: "0px",
          paddingBottom: "12px",
        }}
        position="fixed"
      >
        <Grid item xs={12}>
          <BackgroundBody
            sx={{
              border: "2px solid red",
              marginBottom: "12px",
              bottom: "10px",
              overflowX: "hidden",
              // height: "90vh",
            }}
            overflow="scroll"
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

                  height: "94vh",
                  width: "100vw",
                  paddingleft: "12px",
                  paddingRight: "10px",
                  // paddingTop: "5px",
                  // paddingBottom: "5px",
                  // border: "2px solid red",
                }}
              >
                <Formik
                  initialValues={
                    location.state === "shop" ? singupdata : userSignup
                  }
                  onSubmit={(values, actions) => {
                    var len = Object.keys(values).length;
                    if (len < 10) {
                      console.log(values, "user Data");
                    }

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
                        alignItems: "center",
                        // marginTop: "30px",
                        // paddingBottom: "20px",
                        marginLeft: "30px",
                        marginRight: "90px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          // justifyContent: "space-between",
                        }}
                      >
                        <Lottie
                          style={{
                            height: "150px",
                            marginRight: "auto",
                          }}
                          animationData={gg}
                          loop={true}
                        />
                        <Typography
                          sx={{
                            marginRight: "90px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#5A5953",
                          }}
                        >
                          Register
                          <Typography
                            variant="subtitle1"
                            component="span"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 200,
                              marginLeft: "6px",
                              color: "#42413F",
                            }}
                          >
                            {location.state === "shop"
                              ? "your shop"
                              : "as a user"}
                          </Typography>
                        </Typography>
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
                          //  sx={{width: "45%"}}
                          setsingupdata={setsingupdata}
                          setuserSignup={setuserSignup}
                          user={location.state === "shop" ? "shop" : "user"}
                          type="text"
                          name={
                            location.state === "shop" ? "firstName" : "fName"
                          }
                          label="First Name"
                          value={
                            location.state === "shop"
                              ? singupdata.firstName
                              : userSignup.fName
                          }
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
                          setsingupdata={setsingupdata}
                          setuserSignup={setuserSignup}
                          user={location.state === "shop" ? "shop" : "user"}
                          type="text"
                          name={
                            location.state === "shop" ? "lastName" : "lName"
                          }
                          label="Last Name"
                          value={
                            location.state === "shop"
                              ? singupdata.lastName
                              : userSignup.lName
                          }
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
                              location.state === "shop"
                                ? setsingupdata({
                                    ...singupdata,
                                    dateOfBirth: e.target.value,
                                  })
                                : setuserSignup({
                                    ...userSignup,
                                    UdateOfBirth: e.target.value,
                                  });
                            }}
                            name={
                              location.state === "shop"
                                ? "dateOfBirth"
                                : "UdateOfBirth"
                            }
                            // label="Date of Birth"
                            value={
                              location.state === "shop"
                                ? singupdata.dateOfBirth
                                : userSignup.UdateOfBirth
                            }
                            size="small"
                            // variant={"standard"}
                          >
                            {location.state === "shop"
                              ? singupdata.dateOfBirth
                              : userSignup.UdateOfBirth}
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
                                  location.state === "shop"
                                    ? setsingupdata({
                                        ...singupdata,
                                        Gender: item,
                                      })
                                    : setuserSignup({
                                        ...userSignup,
                                        UGender: item,
                                      });
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
                          setuserSignup={setuserSignup}
                          user={location.state === "shop" ? "shop" : "user"}
                          type="email"
                          name={
                            location.state === "shop" ? "email" : "email_id"
                          }
                          label="Email"
                          value={
                            location.state === "shop"
                              ? singupdata.email
                              : userSignup.email_id
                          }
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
                          setuserSignup={setuserSignup}
                          user={location.state === "shop" ? "shop" : "user"}
                          type="password"
                          name={
                            location.state === "shop" ? "password" : "Upassword"
                          }
                          label="password"
                          value={
                            location.state === "shop"
                              ? singupdata.password
                              : userSignup.Upassword
                          }
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
                          setuserSignup={setuserSignup}
                          user={location.state === "shop" ? "shop" : "user"}
                          type="password"
                          name="confirmPassword"
                          label="confirmPassword"
                          value={
                            location.state === "shop"
                              ? singupdata.confirmPassword
                              : userSignup.UconfirmPassword
                          }
                          size="small"
                          // variant={"standard"}
                        />
                      </Box>

                      {location.state === "shop" ? (
                        <>
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
                              setuserSignup={setuserSignup}
                              user={location.state === "shop" ? "shop" : "user"}
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
                                        setsingupdata({
                                          ...singupdata,
                                          State: item,
                                        });
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
                                        setsingupdata({
                                          ...singupdata,
                                          City: item,
                                        });
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
                              setuserSignup={setuserSignup}
                              user={location.state === "shop" ? "shop" : "user"}
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
                                onChange={(e) =>
                                  setSelectedImage(e.target.files?.[0])
                                }
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
                                  onChange={(e) =>
                                    setSelected(e.target.files?.[0])
                                  }
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
                              signup
                              {/* <NavLink to="#">Signup</NavLink> */}
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Button
                            sx={{
                              marginTop: "40px",
                            }}
                            type="submit"
                            variant="contained"
                          >
                            signup
                            {/* <NavLink to="">Signup</NavLink> */}
                          </Button>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "20px",
                            }}
                          >
                            <Typography>
                              Already have an account?
                              <NavLink to="/login">Login</NavLink>
                            </Typography>
                            {/* <Button>
                              <NavLink to="/login">Login</NavLink>
                            </Button> */}
                          </Box>
                        </>
                      )}
                    </Box>
                  </Form>
                </Formik>
              </Box>
            </Grid>
          </BackgroundBody>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
