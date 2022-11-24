import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@mui/material";
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
import { useFormik, FormikProvider, Form, useField, getIn } from "formik";
import { Details } from "../Data/Dummy/Detail";
import bg from "../img/bg.json";
import * as Yup from "yup";
import Lottie from "lottie-react";
import { api } from "../lib/Axios";
import { fromValues } from "../Data/Dummy/formValues";
import TextFieldShopForm from "../Component/Textfield/TextFieldShopForm";
import MapModal from "../Component/MapModal/MapModal";

// import { Container } from "@mui/system";

const myvalidationSchema = Yup.object({
  shopName: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),

  // isActive: Yup.boolean().required("Required"),
  landmark: Yup.string().required("Required"),
  pincode: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().required("Required"),

  // shopLogo: Yup.string().required("Required"),
  shopServicesImage: Yup.string().required("Required"),

  // openingTime: Yup.date().required("Required"),
  // closingTime: Yup.date().required("Required"),

  type: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  governmentID: Yup.string().required("Required"),
  governmentIDImage: Yup.string().required("Required"),
  shopImage: Yup.string().required("Required"),
  userID: Yup.string().required("Required"),
  verified: Yup.string().required("Required"),
});

const Shop = () => {
  const params = useParams();
  const [gallery, setgallery] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [mapLoc, setmapLoc] = useState<any>({
    lat: 0,
    lng: 0,
  });
  const coordinates = {
    lat: 26.1913,
    lng: 91.7514,
  };
  const page = "shop";

  const formik = useFormik({
    // validationSchema: myvalidationSchema,
    initialValues: {
      shopName: `${Details[0].shopName}`,
      state: `${Details[0].State}`,
      city: `${Details[0].city}`,
      isActive: false,
      landmark: `${Details[0].landmark}`,
      pincode: `${Details[0].landmark}`,
      address: `${Details[0].address}`,
      phone: `${Details[0].phone}`,
      email: `${Details[0].email}`,
      shopLogo: "",
      shopServicesImage: "",
      openingTime: `${Details[0].openingTime}`,
      closingTime: `${Details[0].closingTime}`,
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
      patchShopData(values);
    },
  });

  const getCoords = (data: any) => {
    setmapLoc({
      lat: data.lat,
      lng: data.lng,
    });
  };
  console.log(mapLoc);

  const patchShopData = (values: any) => {
    // api.patch("shop/id",)
    // console.log()
  };

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
              <BackgroundBody
                overflow="scroll"
                sx={{
                  marginRight: "15px",
                }}
              >
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
                      marginLeft: "10px",
                    }}
                  >
                    <Button size="small" onClick={() => setgallery(true)}>
                      Gallery
                    </Button>
                    <Button size="small" onClick={() => setgallery(false)}>
                      Detail
                    </Button>
                    <Button size="small" onClick={() => setOpen(true)}>
                      Set-shop-location
                    </Button>

                    <MapModal
                      open={open}
                      setOpen={setOpen}
                      coordinates={coordinates}
                      page={page}
                      getCoords={getCoords}
                    />
                  </Box>
                  <Grid item xs={12}>
                    <BodyMain
                      // maxWidth="md"
                      sx={{
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
                                      // maxWidth="md"
                                      sx={{
                                        display: "flex",
                                        gap: "16px",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // marginTop: "20px",

                                        marginLeft: "30px",
                                      }}
                                    >
                                      {edit ? (
                                        <TextFieldShopForm
                                          label="Shop Name"
                                          type="text"
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
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.shopName}
                                          </Typography>
                                        </Typography>
                                      )}
                                      {/* {edit ? (
                                      <TextField value={mapLoc.lat}>
                                        {mapLoc.lat}
                                      </TextField>
                                       <TextField value={mapLoc.lat}>
                                       {mapLoc.lat}
                                     </TextField>
                                    ) : (
                                      <>
                                        <Typography>{mapLoc.lat}</Typography>
                                        <Typography>{mapLoc.lng}</Typography>
                                      </>
                                    )} */}

                                      {edit ? (
                                        <TextFieldShopForm
                                          type="text"
                                          label="address"
                                          value={formik.values.address}
                                          onChange={formik.handleChange}
                                          name="address"
                                          helperText={formik.errors.address}
                                          error={
                                            formik.touched.address &&
                                            Boolean(formik.errors.address)
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
                                          Address:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.address}
                                          </Typography>
                                        </Typography>
                                      )}

                                      {edit ? (
                                        <TextFieldShopForm
                                          label="email"
                                          type="text"
                                          value={formik.values.email}
                                          onChange={formik.handleChange}
                                          name="email"
                                          helperText={formik.errors.email}
                                          error={
                                            formik.touched.email &&
                                            Boolean(formik.errors.email)
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
                                          Email:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.email}
                                          </Typography>
                                        </Typography>
                                      )}
                                      {edit ? (
                                        <TextFieldShopForm
                                          label="phone"
                                          type="text"
                                          value={formik.values.phone}
                                          onChange={formik.handleChange}
                                          name="phone"
                                          helperText={formik.errors.phone}
                                          error={
                                            formik.touched.phone &&
                                            Boolean(formik.errors.phone)
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
                                          Phone:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.phone}
                                          </Typography>
                                        </Typography>
                                      )}

                                      {edit ? (
                                        <TextFieldShopForm
                                          type="file"
                                          label="shopLogo"
                                          value={formik.values.shopLogo}
                                          onChange={formik.handleChange}
                                          name="gallery.shopLogo"
                                          helperText={formik.errors.shopLogo}
                                          error={
                                            formik.touched.shopLogo &&
                                            Boolean(formik.errors.shopLogo)
                                          }
                                        />
                                      ) : (
                                        ""
                                      )}

                                      {edit ? (
                                        <TextFieldShopForm
                                          label="openingTime"
                                          type="time"
                                          value={formik.values.openingTime}
                                          onChange={formik.handleChange}
                                          name="openingTime"
                                          helperText={formik.errors.openingTime}
                                          error={
                                            formik.touched.openingTime &&
                                            Boolean(formik.errors.openingTime)
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
                                          Opening Time:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.openingTime}
                                          </Typography>
                                        </Typography>
                                      )}
                                      {edit ? (
                                        <TextFieldShopForm
                                          label="closingTime"
                                          type="time"
                                          value={formik.values.closingTime}
                                          onChange={formik.handleChange}
                                          name="closingTime"
                                          helperText={formik.errors.closingTime}
                                          error={
                                            formik.touched.shopName &&
                                            Boolean(formik.errors.closingTime)
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
                                          Closing Time:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.closingTime}
                                          </Typography>
                                        </Typography>
                                      )}

                                      {edit ? (
                                        <TextFieldShopForm
                                          type="text"
                                          label="landmark"
                                          value={formik.values.landmark}
                                          onChange={formik.handleChange}
                                          name="landmark"
                                          helperText={formik.errors.landmark}
                                          error={
                                            formik.touched.landmark &&
                                            Boolean(formik.errors.landmark)
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
                                          Landmark:
                                          <Typography
                                            sx={{
                                              marginLeft: "auto",
                                              marginRight: {
                                                xs: "10%",

                                                lg: "30%",
                                              },
                                            }}
                                            component="span"
                                          >
                                            {item.landmark}
                                          </Typography>
                                        </Typography>
                                      )}

                                      {edit ? (
                                        <TextFieldShopForm
                                          type="text"
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
                                                xs: "10%",

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
                                        <TextFieldShopForm
                                          type="text"
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
                                                xs: "10%",

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
                                        <TextFieldShopForm
                                          type="text"
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
                                                xs: "10%",

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
                                        <TextFieldShopForm
                                          type="text"
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
                                                xs: "10%",

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
                                        <Button size="small">Submit</Button>

                                        {edit ? (
                                          <Button
                                            type="submit"
                                            size="small"
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
                          </Box>
                        </>
                      )}
                    </BodyMain>
                  </Grid>
                </BodyContent>
              </BackgroundBody>
            </Grid>
          </Body>
        </Grid>
      </Box>
    </>
  );
};

export default Shop;
