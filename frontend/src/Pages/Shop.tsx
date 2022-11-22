import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { useState, useEffect } from "react";
import {
  Layout,
  SideBar,
  Body,
  BodyContent,
  BodyHeader,
  Navbar,
  BodyMain,
  AppbarContainer,
} from "../Component/Layout/Layout";
import { shops } from "../Data/Dummy/DUmmyjson";
import { useParams } from "react-router";
import { useFormik, FormikProvider, Form, useField } from "formik";
import { Details } from "../Data/Dummy/Detail";
import bg from "../img/bg.json";
import * as Yup from "yup";
import Lottie from "lottie-react";
import { api } from "../lib/Axios";

const Shop = () => {
  const params = useParams();
  const [gallery, setgallery] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  // console.log(state);
  // console.log(Details[0].shopName);
  // console.log(params.id);

  const formik = useFormik({
    initialValues: {
      shopName: `${Details[0].shopName}`,
      state: `${Details[0].State}`,
      city: `${Details[0].city}`,
      shopDetails: {
        isActive: false,
        landmark: `${Details[0].shopDetails.landmark}`,
        pincode: `${Details[0].shopDetails.pincode}`,
        address: `${Details[0].shopDetails.address}`,
        phone: `${Details[0].shopDetails.phone}`,
        email: `${Details[0].shopDetails.email}`,
        gallery: {
          shopLogo: "",
          shopServicesImage: "",
        },

        timings: {
          openingTime: `${Details[0].shopDetails.timings.openingTime}`,
          closingTime: `${Details[0].shopDetails.timings.closingTime}`,
        },
      },
      type: `${Details[0].Type}`,
      category: `${Details[0].Category}`,
      governmentID: `${Details[0].governmentID}`,
      governmentIDImage: `${Details[0].governmentIDImage}`,
      shopImage: `${Details[0].shopImage}`,
      userID: `${Details[0].userID}`,
      verified: `${Details[0].verified}`,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      shopName: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      shopDetails: Yup.object({
        isActive: Yup.boolean().required("Required"),
        landmark: Yup.string().required("Required"),
        pincode: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        gallery: Yup.object({
          shopLogo: Yup.string().required("Required"),
          shopServicesImage: Yup.string().required("Required"),
        }),
        timings: Yup.object({
          openingTime: Yup.string().required("Required"),
          closingTime: Yup.string().required("Required"),
        }),
      }),
      type: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
      governmentID: Yup.string().required("Required"),
      governmentIDImage: Yup.string().required("Required"),
      shopImage: Yup.string().required("Required"),
      userID: Yup.string().required("Required"),
      verified: Yup.string().required("Required"),
    }),
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12}>
          <Body>
            <Grid item xs={12}>
              <BodyContent
                sx={{
                  width: "92vw",
                  height: "90vh",
                  marginRight: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "5vh",
                    marginTop: "60px",

                    // margin: "0,auto",
                    marginLeft: "20px",
                  }}
                >
                  <Button size="small" onClick={() => setgallery(true)}>
                    Gallery
                  </Button>
                  <Button size="small" onClick={() => setgallery(false)}>
                    Detail
                  </Button>
                </Box>
                {/* <Box
                  sx={{
                    zIndex: -1,
                  }}
                > */}

                {/* </Box> */}

                <Grid item xs={12}>
                  <BodyMain
                    sx={{
                      // border: "1px solid black",
                      // display: "flex",
                      // justifyContent: "center",
                      // backgroundImage: `url(
                      //   <Lotti>
                      //   ${bg})`,

                      // backgroundRepeat: "no-repeat",
                      // backgroundSize: "cover",
                      // backgroundPosition: "center",
                      paddingBotton: "60px",

                      height: "60vh",
                    }}
                  >
                    {!gallery ? (
                      <>
                        <FormikProvider value={formik}>
                          <Form onSubmit={formik.handleSubmit}>
                            {Details.map((item) => {
                              return (
                                <>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      gap: "16px",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      // marginTop: "20px",

                                      marginLeft: "50px",
                                    }}
                                  >
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        // label="Shop Name"
                                        value={formik.values.shopName}
                                        onChange={formik.handleChange}
                                        name="shopName"
                                        helperText={formik.errors.shopName}
                                        error={
                                          formik.touched.shopName &&
                                          Boolean(formik.errors.shopName)
                                        }
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Shop Name:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopName}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="address"
                                        value={
                                          formik.values.shopDetails.address
                                        }
                                        onChange={formik.handleChange}
                                        name="shopDetails.address"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Address:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.address}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="email"
                                        value={formik.values.shopDetails.email}
                                        onChange={formik.handleChange}
                                        name="shopDetails.email"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Email:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.email}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="phone"
                                        value={formik.values.shopDetails.phone}
                                        onChange={formik.handleChange}
                                        name="shopDetails.phone"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Phone:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.phone}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        // type="file"
                                        label="shopLogo"
                                        value={
                                          formik.values.shopDetails.gallery
                                            .shopLogo
                                        }
                                        onChange={formik.handleChange}
                                        name="gallery.shopLogo"
                                      />
                                    ) : (
                                      ""
                                      // <Typography
                                      //   component="div"
                                      //   sx={{
                                      //     fontSize: "20px",
                                      //     fontWeight: "bold",
                                      //     // backgroundColor: "red",
                                      //     height: "100%",
                                      //     width: "88vw",
                                      //     display: "flex",
                                      //
                                      //   }}
                                      // >
                                      //   Shop Logo:{item.shopDetails.gallery.shopLogo}

                                      // </Typography>
                                    )}

                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="openingTime"
                                        type="time"
                                        value={
                                          formik.values.shopDetails.timings
                                            .openingTime
                                        }
                                        onChange={formik.handleChange}
                                        name="shopDetails.timings.openingTime"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Opening Time:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.timings.openingTime}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="closingTime"
                                        type="time"
                                        value={
                                          formik.values.shopDetails.timings
                                            .closingTime
                                        }
                                        onChange={formik.handleChange}
                                        name="shopDetails.timings.closingTime"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Closing Time:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.timings.closingTime}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="landmark"
                                        value={
                                          formik.values.shopDetails.pincode
                                        }
                                        onChange={formik.handleChange}
                                        name="landmark"
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Landmark:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.shopDetails.landmark}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="State"
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        name="state"
                                        helperText={formik.errors.state}
                                        error={
                                          formik.touched.state &&
                                          Boolean(formik.errors.state)
                                        }
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        State:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.State}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="City"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        name="city"
                                        helperText={formik.errors.city}
                                        error={
                                          formik.touched.city &&
                                          Boolean(formik.errors.city)
                                        }
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        City:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.city}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="Type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        name="type"
                                        helperText={formik.errors.type}
                                        error={
                                          formik.touched.type &&
                                          Boolean(formik.errors.type)
                                        }
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Type:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.Type}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        label="Category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                        name="category"
                                        helperText={formik.errors.category}
                                        error={
                                          formik.touched.category &&
                                          Boolean(formik.errors.category)
                                        }
                                      />
                                    ) : (
                                      <Typography
                                        component="div"
                                        sx={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          // backgroundColor: "red",
                                          height: "100%",
                                          width: "88vw",
                                          display: "flex",
                                          marginLeft: {
                                            xs: "7%",

                                            lg: "30%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Category:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "7%",

                                              lg: "30%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {item.Category}
                                        </Typography>
                                      </Typography>
                                    )}

                                    <Box
                                      sx={{
                                        display: "flex",
                                        // backgroundColor: "green",
                                        marginBottom: "4rem",
                                      }}
                                    >
                                      <Button size="small" type="submit">
                                        Submit
                                      </Button>

                                      {edit ? (
                                        <Button
                                          size="small"
                                          sx={
                                            {
                                              // marginBottom: "4rem",
                                            }
                                          }
                                          onClick={() => setEdit(false)}
                                        >
                                          save
                                        </Button>
                                      ) : (
                                        <Button
                                          size="small"
                                          sx={
                                            {
                                              // marginBottom: "20rem",
                                            }
                                          }
                                          onClick={() => setEdit(true)}
                                        >
                                          edit
                                        </Button>
                                      )}
                                    </Box>
                                  </Box>
                                </>
                              );
                            })}
                          </Form>
                        </FormikProvider>
                      </>
                    ) : (
                      <>
                        <Box>
                          <img src={Details[0].shopImage} className="image" />
                          {/* <img
                            src={Details[0].governmentIDImage}
                            className="image"
                          /> */}
                        </Box>
                      </>
                    )}
                  </BodyMain>
                </Grid>
              </BodyContent>
            </Grid>
          </Body>
        </Grid>
      </Box>
    </>
  );
};

export default Shop;
