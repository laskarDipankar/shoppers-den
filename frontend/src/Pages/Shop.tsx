import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  MenuItem,
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
// import { Radio } from "@mui/icons-material";

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

const getUserFromLocalStorage = (key: "user") => {
  try {
    const user = localStorage.getItem(key);
    if (user) return JSON.parse(user);
    return null;
  } catch (e) {
    return null;
  }
};

const Shop = () => {
  const params = useParams();
  const [gallery, setgallery] = useState<boolean>(false);
  const [shopDetail, setshop] = useState<any>({
    delivery: false,
  });
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
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));
  // console.log(userId.shop, params.id);

  useEffect(() => {
    api
      .get(`/shop/${!userId.shop ? params.id : userId.shop}`)
      .then((res) => {
        console.log(res.data.shop);
        setshop(res.data.shop);
      })
      .catch((err) => console.log(err));
  }, [params.id, userId.shop]);
  // console.log(shopDetail.shopName);

  const formik = useFormik({
    // validationSchema: myvalidationSchema,
    initialValues: {
      shopName: `${shopDetail.shopName}`,
      state: `${Details[0].State}`,
      city: `${Details[0].city}`,
      isActive: false,
      landmark: `${Details[0].landmark}`,
      pincode: `${Details[0].pincode}`,
      address: `${Details[0].address}`,
      phone: `${Details[0].phone}`,
      email: `${Details[0].email}`,
      shopLogo: "images",
      shopServicesImage: "images",
      openingTime: `${Details[0].openingTime}`,
      closingTime: `${Details[0].closingTime}`,
      type: `${Details[0].Type}`,
      category: `${Details[0].Category}`,
      governmentID: `${Details[0].governmentID}`,
      governmentIDImage: `${Details[0].governmentIDImage}`,
      shopImage: `${Details[0].shopImage}`,
      userID: `${Details[0].userID}`,
      verified: `${Details[0].verified}`,
      delivery: `${shopDetail.delivery}`,
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
  // console.log(mapLoc);
  // console.log(shopDetail.shopName);

  const patchShopData = (values: any) => {
    const token: string = JSON.parse(localStorage.getItem("usertoken") || "");
    api
      .patch(
        `/shop/${params.id}`,
        {
          shopName: values.shopName,
          state: values.state,
          city: values.city,
          shopDetails: {
            isActive: values.isActive,
            landmark: values.landmark,
            pincode: values.pincode,
            address: values.address,
            phone: values.phone,
            email: values.email,
            gallery: {
              shopServicesImage: values.shopServicesImage,
              shopLogo: values.shopLogo,
            },
            timings: {
              openingTime: values.openingTime,
              closingTime: values.closingTime,
            },
            location: {
              lat: mapLoc.lat,
              lng: mapLoc.lng,
            },
          },

          type: values.type,
          category: values.category,
          governmentID: values.governmentID,
          governmentIDImage: values.governmentIDImage,
          shopImage: values.shopImage,
          verified: values.verified,
          delivery: shopDetail.delivery,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
          alert("Shop Updated Successfully");
        }
        // console.log(res)
      });
  };

  console.log(shopDetail);
  return (
    <>
      {shopDetail.verified ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "10px",
            width: "100%",
          }}
          position="fixed"
        >
          <Grid item xs={12}>
            <Body>
              <Grid item xs={12}>
                <BackgroundBody overflow="scroll">
                  <BodyContent
                    sx={{
                      width: "92vw",
                      height: "90vh",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "5vh",
                        marginTop: "60px",
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
                                {/* {Details.map((item) => { */}
                                {/* return ( */}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopName}
                                        </Typography>
                                      </Typography>
                                    )}
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
                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.address}
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
                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.email}
                                        </Typography>
                                      </Typography>
                                    )}
                                    {edit ? (
                                      <TextFieldShopForm
                                        label="pincode"
                                        type="text"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange}
                                        name="pincode"
                                        helperText={formik.errors.pincode}
                                        error={
                                          formik.touched.pincode &&
                                          Boolean(formik.errors.pincode)
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
                                            lg: "45%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        pincode:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "10%",

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.pincode}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.phone}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {edit ? (
                                      <TextFieldShopForm
                                        type="text"
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

                                            lg: "45%",
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
                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {/* {
                                            shopDetail.shopDetails.timings
                                              .openingTime
                                          } */}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {/* {
                                            shopDetail.shopDetails.timings
                                              .closingTime
                                          } */}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.landmark}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.state}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.city}
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
                                        select
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
                                      >
                                        <MenuItem value="Static">
                                          Static
                                        </MenuItem>
                                        <MenuItem value="Non-static">
                                          Non-Static
                                        </MenuItem>
                                      </TextField>
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.type}
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

                                            lg: "45%",
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

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.category}
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
                                        select
                                        type="text"
                                        label="delivery"
                                        value={formik.values.delivery}
                                        onChange={formik.handleChange}
                                        name="delivery"
                                        helperText={formik.errors.delivery}
                                        error={
                                          formik.touched.delivery &&
                                          Boolean(formik.errors.delivery)
                                        }
                                      >
                                        <MenuItem
                                          onClick={() => {
                                            setshop({
                                              [shopDetail.delivery]: false,
                                            });
                                          }}
                                          value="false"
                                        >
                                          No
                                        </MenuItem>
                                        <MenuItem
                                          onClick={() => {
                                            setshop({
                                              [shopDetail.delivery]: true,
                                            });
                                          }}
                                          value="true"
                                        >
                                          Yes
                                        </MenuItem>
                                      </TextField>
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

                                            lg: "45%",
                                          },
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        Delivery:
                                        <Typography
                                          sx={{
                                            marginLeft: "auto",
                                            marginRight: {
                                              xs: "10%",

                                              lg: "45%",
                                            },
                                          }}
                                          component="span"
                                        >
                                          {shopDetail.shopDetails.delivery ==
                                          "true"
                                            ? "yes"
                                            : "no"}
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
                                      {edit ? (
                                        <>
                                          <Button
                                            size="small"
                                            onClick={() => setEdit(false)}
                                          >
                                            save
                                          </Button>
                                        </>
                                      ) : (
                                        <Button
                                          size="small"
                                          type="submit"
                                          onClick={() => setEdit(true)}
                                        >
                                          edit
                                        </Button>
                                      )}
                                    </Box>
                                  </Box>
                                </>
                              </Form>
                            </FormikProvider>
                          </>
                        ) : (
                          <>
                            <Box>
                              <img
                                src={Details[0].shopImage}
                                className="image"
                              />
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
      ) : (
        <BackgroundBody>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              flexGrow: 1,
            }}
          >
            <Typography>{shopDetail.shopName}</Typography>

            <Typography>Loading...</Typography>
          </Box>
        </BackgroundBody>
      )}
    </>
  );
};

export default Shop;

// <FormControl>
// <FormLabel id="demo-radio-buttons-group-label">
//   Gender
// </FormLabel>
// <RadioGroup
//   row
//   aria-labelledby="demo-radio-buttons-group-label"
//   defaultValue="female"
//   name="radio-buttons-group"
// >
//   <FormControlLabel
//     value="female"
//     control={<Radio />}
//     label="Female"
//   />
//   <FormControlLabel
//     value="male"
//     control={<Radio />}
//     label="Male"
//   />
//   <FormControlLabel
//     value="other"
//     control={<Radio />}
//     label="Other"
//   />
// </RadioGroup>
// </FormControl>
