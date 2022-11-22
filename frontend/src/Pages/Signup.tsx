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
import { useNavigate } from "react-router";
import axios from "axios";
// import SelectFIeld from "../Component/Textfield/Selectfield/SelectFIeld";
const Signup = (
  {
    ufirstName,
    ulastName,
    uemail,
    shopName,
    State,
    City,
    pincode,
    phoneNumber,
    upassword,
    uconfirmPassword,
    dateOfBirth,
    Gender,
    Id,
  }: SignupProp,
  { firstName, lastName, email, password, confirmPassword }: UserSignup
) => {
  // const [sstate, setstate] = useState<string>("");

  const navigate = useNavigate();

  const [singupdata, setsingupdata] = useState<SignupProp>({
    ufirstName: "",
    ulastName: "Galib",
    uemail: "MIrza@galib.com",
    shopName: "YENagma",
    State: "UP",
    City: "Lucknow",
    pincode: 0,
    phoneNumber: 0,
    upassword: "",
    uconfirmPassword: "",
    dateOfBirth: "",
    Gender: "male",
    filename: "",
    Id,
  });

  const [userSignup, setuserSignup] = useState<UserSignup>({
    firstName: "",
    lastName: "Ghalib",
    email: "MirzaGhalib@gmail.com",
    password: "",
    confirmPassword: "",
  });
  const [sstate, setstate] = useState<string>("");
  const location = useLocation();
  const [selectedfiles, setSelected] = useState<File>();
  const [selectedidImage, setSelectedImage] = useState<File>();

  const postData = (data: any) => {
    // console.log(data, "shop data submitted successfully");
  };

  const UserPostData = (data: any) => {
    try {
      axios
        .post("http://localhost:5000/api/users/signup", {
          firstName: userSignup.firstName,
          lastName: userSignup.lastName,
          email: userSignup.email,
          password: userSignup.password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/login");

            console.log(res);
          } else {
            console.log(res);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const user = location.state;
  const gender = ["male", "female", "others"];

  // console.log(location.state, "location.state");

  useEffect(() => {
    setsingupdata((value) => ({
      ...value,
      [value.filename]: selectedfiles?.name,
    }));
  }, [selectedfiles]);

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
        {/* <Grid item xs={12}> */}
        {/* {/* <BackgroundBody */}
        {/* sx={{
              border: "2px solid red",
              marginBottom: "12px",
              bottom: "10px",
              overflowX: "hidden",
              height: "90vh",
            }}
            overflow="scroll"
          >  */}
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            width: "100%",
            marginLeft: "30px",
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

                height: "94vh",
                width: "100vw",
                paddingleft: "12px",
                paddingRight: "10px",
              }}
            >
              <Formik
                initialValues={
                  location.state === "shop" ? singupdata : userSignup
                }
                onSubmit={(values, actions) => {
                  var len = Object.keys(values).length;
                  console.log(len, "length");
                  if (len < 7) {
                    UserPostData(values);
                    console.log(len, "small");
                  } else {
                    console.log(len, "big");
                  }

                  // postData(values);
                }}
                enableReinitialize={true}
              >
                <Form>
                  <Box
                    sx={{
                      minHeight: 650,
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
                    {location.state !== "shop" ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          <TextFieldSIgnupCo
                            setsingupdata={setsingupdata}
                            setuserSignup={setuserSignup}
                            user={location.state === "shop" ? "shop" : "user"}
                            type="text"
                            name={
                              location.state === "shop"
                                ? "firstName"
                                : "firstName"
                            }
                            label="First Name"
                            value={
                              location.state === "shop"
                                ? singupdata.ufirstName
                                : userSignup.firstName
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
                              location.state === "shop"
                                ? "lastName"
                                : "lastName"
                            }
                            label="Last Name"
                            value={
                              location.state === "shop"
                                ? singupdata.ulastName
                                : userSignup.lastName
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
                          {/* <Box>
                              <InputLabel
                                
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
                           
                                value={
                                  location.state === "shop"
                                    ? singupdata.dateOfBirth
                                    : userSignup.UdateOfBirth
                                }
                                size="small"
                                
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
                            </Box> */}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",

                            marginTop: "10px",
                            justifyContent: "center",
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
                            name={location.state === "shop" ? "email" : "email"}
                            label="Email"
                            value={
                              location.state === "shop"
                                ? singupdata.uemail
                                : userSignup.email
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
                              location.state === "shop"
                                ? "password"
                                : "password"
                            }
                            label="password"
                            value={
                              location.state === "shop"
                                ? singupdata.upassword
                                : userSignup.password
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
                                ? singupdata.uconfirmPassword
                                : userSignup.confirmPassword
                            }
                            size="small"
                            // variant={"standard"}
                          />
                        </Box>
                      </>
                    ) : (
                      ""
                    )}

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
                            display: "flex",
                            justifyContent: "center",
                            // gridTemplateColumns: "1fr 1fr",
                            minWidth: "100%",
                            // border: "1px solid black",
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
                                minWidth: "9vw",
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
                                minWidth: "9vw",
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
                                minWidth: "240px",
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
                            marginTop: "20px",
                            gap: "10px",
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
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
                            {/* signup */}
                            <NavLink to="/feed">Signup</NavLink>
                          </Button>

                          <Typography>
                            Already have an account?
                            <NavLink to="/">Login</NavLink>
                          </Typography>
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
                            <NavLink to="/">Login</NavLink>
                          </Typography>
                        </Box>
                      </>
                    )}
                  </Box>
                </Form>
              </Formik>
            </Box>
          </Grid>
        </Box>
        {/* </BackgroundBody> */}
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export default Signup;
