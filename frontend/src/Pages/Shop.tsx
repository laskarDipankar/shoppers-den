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
import * as Yup from "yup";
import { api } from "../lib/Axios";

const Shop = () => {
  const params = useParams();
  const [gallery, setgallery] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  // console.log(state);
  console.log(Details[0].shopName);
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
          // backgroundColor: "red",
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
                  width: "90vw",
                  height: "90vh",
                  marginRight: "30px",

                  // marginTop: "20px",

                  // border: "1px solid black",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid black",
                    width: "100%",
                    height: "5vh",
                    marginTop: "20px",

                    // margin: "0,auto",
                    marginLeft: "20px",
                  }}
                >
                  <Button size="small" onClick={() => setgallery(!gallery)}>
                    Gallery
                  </Button>
                </Box>

                <Grid item xs={12}>
                  <BodyMain
                    sx={{
                      border: "1px solid black",
                      // marginRigth: "20px",
                      paddingBotton: "60px",
                      height: "80vh",
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
                                      gap: "5px",
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
                                      <Typography>{item.shopName}</Typography>
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
                                      <Typography>
                                        {item.shopDetails.address}
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
                                      <Typography>
                                        {item.shopDetails.email}
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
                                      <Typography>
                                        {item.shopDetails.phone}
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
                                      <Typography>
                                        {item.shopDetails.gallery.shopLogo}
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
                                      <Typography>
                                        {item.shopDetails.timings.openingTime}
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
                                      <Typography>
                                        {item.shopDetails.timings.closingTime}
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
                                      <Typography>
                                        {item.shopDetails.landmark}
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
                                      <Typography>{item.State}</Typography>
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
                                      <Typography>{item.city}</Typography>
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
                                      <Typography>{item.Type}</Typography>
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
                                      <Typography>{item.Category}</Typography>
                                    )}

                                    <Box
                                      sx={{
                                        display: "flex",
                                        // backgroundColor: "green",
                                      }}
                                    >
                                      <Button size="small" type="submit">
                                        Submit
                                      </Button>

                                      {edit ? (
                                        <Button onClick={() => setEdit(false)}>
                                          save
                                        </Button>
                                      ) : (
                                        <Button
                                          size="small"
                                          sx={{
                                            marginBottom: "20px",
                                          }}
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
