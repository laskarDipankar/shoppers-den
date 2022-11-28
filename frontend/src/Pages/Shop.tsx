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
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
  Select,
  Menu,
} from "@mui/material";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { useState, useEffect } from "react";
import { Category } from "../Data/Dummy/Category";

import high from "../img/high.json";
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
import Switch from "@mui/material/Switch";
import SelectField from "../Component/Select/SelectField";

const label = { inputProps: { "aria-label": "Switch demo" } };

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
  // category: Yup.string().required("Required"),
  governmentID: Yup.string().required("Required"),
  // governmentIDImage: Yup.string().required("Required"),
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
  const [shopDetail, setshop] = useState<any>();
  const [edit, setEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [online, setOnline] = useState<boolean>(false);
  const [cat, setcategory] = useState<any>({
    Delivery: "",
    CCat: "",
  });
  const [dialog, setdialog] = useState<boolean>(false);
  const [selectedfiles, setSelected] = useState<any>();
  const [selectedidImage, setSelectedImage] = useState<any>();
  const [mapLoc, setmapLoc] = useState<any>({
    lat: 0,
    lng: 0,
  });

  const page = "shop";
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));
  // console.log(userId.shop, params.id);

  console.log({ shopDetail });
  const handleClose = () => {
    setdialog(false);
  };

  const getData = (data: any) => {
    console.log(data, "categor");
    setcategory({ ...cat, CCat: data });
  };

  console.log(cat.typeCat, "cat.typeCat");

  // getData(data)

  useEffect(() => {
    api
      .get(`/shop/${params.id ? params.id : userId.shop}`)
      .then((res) => {
        console.log(res.data.data);
        setshop(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [params.id, userId.shop, dialog]);

  const handleImageChange = (e: any) => {
    // console.log(e.target.name);

    console.log(e.target.files[0]);
    let file = e.target.files[0];
    const reader = new FileReader();

    console.log(reader.result);

    console.log(e.target.name);
    reader.onloadend = () => {
      if (e.target.name === "shopLogo") {
        setSelectedImage(reader.result);
      }

      setSelected(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const coordinates = {
    lat: shopDetail?.shopDetails?.location?.lat,
    lng: shopDetail?.shopDetails?.location?.lng,
  };
  console.log(setSelected);

  const formik = useFormik({
    // validationSchema: myvalidationSchema,
    initialValues: {
      shopName: shopDetail?.shopName || "",
      state: shopDetail?.State || "",
      city: shopDetail?.city || "",
      isActive: false || "",
      landmark: shopDetail?.shopDetails?.landmark || "",
      pincode: shopDetail?.shopDetails?.pincode || "",
      address: shopDetail?.shopDetails?.address || "",
      phone: shopDetail?.shopDetails?.phone || "",
      email: shopDetail?.shopDetails?.email || "",
      shopLogo: shopDetail?.shopDetails?.gallery?.shopLogo || "",
      shopServicesImage:
        shopDetail?.shopDetails?.gallery?.shopServicesImage || "",
      openingTime: shopDetail?.shopDetails?.timings?.openingTime || "",
      closingTime: shopDetail?.shopDetails?.timings?.closingTime || "",
      type: shopDetail?.type || "",
      category: shopDetail?.category || "",
      governmentID: shopDetail?.governmentID || "",
      governmentIDImage: shopDetail?.governmentIDImage || "",
      shopImage: shopDetail?.shopImage || "",
      userID: shopDetail?.userID || "",
      verified: shopDetail?.verified || "",
      delivery: shopDetail?.shopDetails?.delivery || "",
    },
    onSubmit: (values) => {
      // console.log(JSON.stringify(values, null, 2));
      patchShopData(values);
    },
  });

  // console.log(shopDetail.shopDetails.isActive);

  const getCoords = (data: any) => {
    setmapLoc({
      lat: data.lat,
      lng: data.lng,
    });
  };

  const handleActive = () => {
    const token: string = JSON.parse(localStorage.getItem("usertoken") || "");
    api
      .patch(
        `/shop/active/${params.id}`,
        {
          shopImage: "https://source.unsplash.com/random?Departmental",
          shopDetails: {
            isActive: !shopDetail?.shopDetails?.isActive,
            landmark: shopDetail?.shopDetails?.landmark,
            pincode: shopDetail?.shopDetails?.pincode,
            address: shopDetail?.shopDetails?.address,
            phone: shopDetail?.shopDetails?.phone,
            email: shopDetail?.shopDetails?.email,
            gallery: {
              shopServicesImage:
                shopDetail?.shopDetails?.gallery?.shopServicesImage,
              shopLogo: shopDetail?.shopDetails?.gallery?.shopLogo,
            },
            timings: {
              openingTime: shopDetail?.shopDetails?.timings.openingTime,
              closingTime: shopDetail?.shopDetails?.timings.closingTime,
            },
            location: {
              lat: shopDetail?.shopDetails?.location?.lat,
              lng: shopDetail?.shopDetails?.location?.lng,
            },
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.shop);
          setdialog(false);
          alert(
            `have a great time ahead,you are know ${
              shopDetail?.shopDetails?.isActive === true ? "offline" : "online"
            }`
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const shopDelete = () => {
    const token: string = JSON.parse(localStorage.getItem("usertoken") || "");

    api
      .delete(`/shop/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (shopDetail?.verified === "false") {
    console.log("first");
  }
  console.log("cat", cat);

  const patchShopData = (values: any) => {
    console.log(values);
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
            delivery: cat.Delivery,
            gallery: {
              shopServicesImage: selectedfiles,
              shopLogo: selectedidImage,
            },
            timings: {
              openingTime: values.openingTime,
              closingTime: values.closingTime,
            },
            location: {
              lat:
                shopDetail.shopDetails.location.lat === 0
                  ? mapLoc.lat
                  : shopDetail.shopDetails.location.lat,
              lng:
                shopDetail.shopDetails.location.lng === 0
                  ? mapLoc.lng
                  : shopDetail.shopDetails.location.lng,
            },
          },

          type: values.type,
          category: cat.CCat,
          governmentID: values.governmentID,
          governmentIDImage: values.governmentIDImage,
          shopImage: values.shopImage,
          verified: values.verified,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.shop);

          window.location.reload();
          console.log(res);
        }
      });
  };
  console.log(selectedidImage, "data");

  const handleSwicth = () => {
    setOnline(!online);
    setdialog(true);
  };

  return !shopDetail ? (
    <h1>Loading....</h1>
  ) : (
    <>
      {shopDetail?.verified === "false" ? (
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
            <BackgroundBody>
              <Box
                sx={{
                  height: "80vh",
                  width: "60vw",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",

                  gap: "3rem",
                }}
              >
                <Typography variant="h4">
                  {shopDetail.shopName.toUpperCase()}
                </Typography>

                <Typography variant="h6">
                  {shopDetail.userID.firstName +
                    " " +
                    shopDetail.userID.lastName}

                  <Typography variant="subtitle2">
                    Thank you for choosing us , your shop is being Verified.
                  </Typography>
                </Typography>

                <Lottie
                  style={{
                    height: "150px",
                  }}
                  animationData={high}
                  loop={true}
                />
                <Typography>verifying.....</Typography>
              </Box>
            </BackgroundBody>
          </Grid>
        </Box>
      ) : (
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
            <Dialog
              open={dialog}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {/* {"Use Google's location service?"} */}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {online
                    ? "let your customers know you are online"
                    : "Are you sure you want to go offline?"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleActive} color="primary">
                  Change Status
                </Button>
                {/* <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus> */}
                {/* Agree
                </Button> */}
              </DialogActions>
            </Dialog>
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
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      {shopDetail?.shopDetails?.location?.lat && !edit ? (
                        <Button
                          size="small"
                          variant="outlined"
                          sx={{
                            background: " rgb(255,232,185)",

                            border: "2px solid rgb(255,232,185)",
                          }}
                          onClick={() => {
                            setOpen(true);
                            getCoords({
                              lat: shopDetail.shopDetails.location.lat,
                              lng: shopDetail.shopDetails.location.lng,
                              shopName: shopDetail.shopName,
                            });
                          }}
                        >
                          View Location
                        </Button>
                      ) : (
                        ""
                      )}
                      {shopDetail._id === userId.shop ? (
                        <>
                          <Switch
                            {...label}
                            defaultChecked={shopDetail.shopDetails.isActive}
                            // defaultChecked={
                            //   shopDetail.shopDetails.isActive === "true"
                            //     ? true
                            //     : false
                            // }
                            checked={shopDetail.shopDetails.isActive}
                            onChange={handleSwicth}
                          />
                        </>
                      ) : (
                        ""
                      )}
                      <Button
                        variant="outlined"
                        sx={{
                          background: " rgb(255,232,185)",
                          border: "2px solid rgb(255,232,185)",
                        }}
                        size="small"
                        onClick={() => setgallery(true)}
                      >
                        Gallery
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          background: " rgb(255,232,185)",
                          border: "2px solid rgb(255,232,185)",
                        }}
                        size="small"
                        onClick={() => setgallery(false)}
                      >
                        Detail
                      </Button>
                      {shopDetail._id === userId.shop ? (
                        <>
                          {edit ? (
                            <Button
                              variant="outlined"
                              sx={{
                                background: " rgb(255,232,185)",

                                border: "2px solid rgb(255,232,185)",
                              }}
                              // background=" rgb(255,232,185)"
                              size="small"
                              onClick={() => setOpen(true)}
                            >
                              Set-shop-location
                            </Button>
                          ) : (
                            ""
                          )}
                        </>
                      ) : (
                        ""
                      )}

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
                                      ""
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
                                        Owner:
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
                                          {shopDetail.userID.firstName +
                                            " " +
                                            shopDetail.userID.lastName}
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
                                          {shopDetail.userID.email}
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
                                    {/* <Box></Box> */}

                                    {edit ? (
                                      <Button
                                        sx={{
                                          minWidth: "240px",
                                        }}
                                        size="small"
                                        variant="outlined"
                                        component="label"
                                      >
                                        Upload shop logo
                                        <input
                                          name="shopLogo"
                                          accept="image/*"
                                          onChange={handleImageChange}
                                          type="file"
                                          hidden
                                        />
                                      </Button>
                                    ) : (
                                      ""
                                    )}
                                    {edit ? (
                                      <Button
                                        sx={{
                                          minWidth: "240px",
                                        }}
                                        size="small"
                                        variant="outlined"
                                        component="label"
                                      >
                                        Upload service image
                                        <input
                                          name="shopServiceImage"
                                          accept="image/*"
                                          onChange={handleImageChange}
                                          type="file"
                                          hidden
                                        />
                                      </Button>
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
                                          {
                                            shopDetail.shopDetails.timings
                                              ?.openingTime
                                          }
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
                                          {
                                            shopDetail.shopDetails.timings
                                              ?.closingTime
                                          }
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
                                        // helperText={formik.errors.type}
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
                                      <SelectField
                                        type="text"
                                        label="Type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        name="type"
                                        helperText={formik.errors.category}
                                        error={
                                          formik.touched.type &&
                                          Boolean(formik.errors.type)
                                        }
                                        getData={getData}
                                      ></SelectField>
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
                                    {/* {edit ? (
                                      <>
                                        <Select
                                          sx={{
                                            width: {
                                              lg: "600px",
                                              xs: "300px",
                                            },
                                          }}
                                        >
                                          {Category.map((category: string) => {
                                            return (
                                              <MenuItem
                                                value={category}
                                                onClick={(e: any) => {
                                                  setcategory({
                                                    [cat.typeCat]: category,
                                                  });
                                                }}
                                              >
                                                {category}
                                              </MenuItem>
                                            );
                                          })}
                                        </Select>
                                      </>
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
                                    )} */}
                                    {edit ? (
                                      <TextField
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                          marginBottom: "20px",
                                        }}
                                        select
                                        type="text"
                                        label="delivery"
                                        value={formik.values.delivery}
                                        onChange={formik.handleChange}
                                        name="delivery"
                                        // helperText={formik.errors.delivery}
                                        error={
                                          formik.touched.delivery &&
                                          Boolean(formik.errors.delivery)
                                        }
                                      >
                                        <MenuItem
                                          onClick={() => {
                                            setcategory({
                                              ...cat,
                                              Delivery: false,
                                            });
                                          }}
                                          value="false"
                                        >
                                          No
                                        </MenuItem>
                                        <MenuItem
                                          onClick={() => {
                                            setcategory({
                                              ...cat,
                                              Delivery: true,
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
                                          {shopDetail.shopDetails.delivery ===
                                          true
                                            ? "yes"
                                            : "No"}
                                        </Typography>
                                      </Typography>
                                    )}

                                    {!userId ? (
                                      ""
                                    ) : shopDetail._id === userId.shop ? (
                                      <Box
                                        sx={{
                                          display: "flex",
                                          // backgroundColor: "green",
                                          marginBottom: "4rem",
                                        }}
                                      >
                                        <Button type="submit">submit</Button>
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
                                            // type="submit"
                                            onClick={() => {
                                              setEdit(true);
                                              formik.setValues({
                                                ...shopDetail,
                                                ...shopDetail.shopDetails,
                                                ...shopDetail.shopDetails
                                                  .timings,
                                                ...shopDetail.shopDetails
                                                  .gallery,
                                              });
                                            }}
                                          >
                                            edit
                                          </Button>
                                        )}
                                        <Button
                                          size="small"
                                          onClick={shopDelete}
                                        >
                                          Delete
                                        </Button>
                                      </Box>
                                    ) : (
                                      ""
                                    )}
                                  </Box>
                                </>
                              </Form>
                            </FormikProvider>
                          </>
                        ) : (
                          <>
                            <Box>
                              <img
                                src={
                                  shopDetail.shopDetails.gallery
                                    .shopServicesImage
                                }
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
