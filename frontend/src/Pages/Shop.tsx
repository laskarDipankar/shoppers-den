import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";

import Switch from "@mui/material/Switch";
import { Form, FormikProvider, useFormik } from "formik";
import Lottie from "lottie-react";
import { useParams } from "react-router";
import * as Yup from "yup";
import { Body, BodyContent, BodyMain } from "../Component/Layout/Layout";
import MapModal from "../Component/MapModal/MapModal";
import SelectField from "../Component/Select/SelectField";
import TextFieldShopForm from "../Component/Textfield/TextFieldShopForm";
import high from "../img/high.json";
import LOADING from "../img/loADING.json";
import { api } from "../lib/Axios";
import VerificationLoader from "../Component/Shop/VerificationLoader";
import WaitVerify from "../Component/Shop/WaitVerify";
import Detail from "../Component/Shop/Detail";
import { useRecoilValue } from "recoil";
import { Owner } from "../Recoil/Localstorage";
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
  // shopImage: Yup.string().required("Required"),
  // userID: Yup.string().required("Required"),
  // verified: Yup.string().required("Required"),
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
  // const [user, setuser] = useRecoilValue<any>(Owner);
  const [cat, setcategory] = useState<any>({
    Delivery: "",
    CCat: "",
    type: "",
  });
  const [dialog, setdialog] = useState<boolean>(false);
  const [selectedfiles, setSelected] = useState<any>();
  const [selectedidImage, setSelectedImage] = useState<any>();
  const [mapLoc, setmapLoc] = useState<any>({
    lat: 0,
    lng: 0,
  });

  const recoil = useRecoilValue(Owner);

  console.log(recoil);

  const page = "shop";
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));

  const handleClose = () => {
    setdialog(false);
  };

  const getData = (data: any) => {
    setcategory({ ...cat, CCat: data });
  };

  // console.log("recoil", user);

  useEffect(() => {
    api
      .get(`/shop/${params.id ? params.id : userId.shop}`)
      .then((res) => {
        setshop(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [params.id, userId.shop, dialog]);

  const handleImageChange = (e: any) => {
    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (e.target.name === "shopLogo") {
        setSelectedImage(reader.result);
      }

      setSelected(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const coordinates = {
    lat: shopDetail?.shopDetails?.location?.lat || 26.1158,

    lng: shopDetail?.shopDetails?.location?.lng || 91.7086,
  };
  const getCoords = (data: any) => {
    setmapLoc({
      lat: data.lat,
      lng: data.lng,
    });
  };
  const formik = useFormik({
    validationSchema: myvalidationSchema,
    initialValues: {
      shopName: shopDetail?.shopName || "",
      state: shopDetail?.State || "",
      city: shopDetail?.city || "",
      // isActive: false || "",
      landmark: shopDetail?.shopDetails?.landmark || "",
      pincode: shopDetail?.shopDetails?.pincode || "",
      address: shopDetail?.shopDetails?.address || "",
      phone: shopDetail?.shopDetails?.phone || "",
      email: shopDetail?.shopDetails?.email || "",
      // shopLogo: shopDetail?.shopDetails?.gallery?.shopLogo || "",
      // shopServicesImage:
      //   shopDetail?.shopDetails?.gallery?.shopServicesImage || "",
      openingTime: shopDetail?.shopDetails?.timings?.openingTime || "",
      closingTime: shopDetail?.shopDetails?.timings?.closingTime || "",
      // type: shopDetail?.type || "",
      // category: shopDetail?.category || "",
      governmentID: shopDetail?.governmentID || "",
      governmentIDImage: shopDetail?.governmentIDImage || "",
      shopImage: shopDetail?.shopImage || "",
      // userID: shopDetail?.userID || "",
      // verified: shopDetail?.verified || "",
      // delivery: shopDetail?.shopDetails?.delivery || "",
    },
    onSubmit: (values) => {
      patchShopData(values);
      console.log({ values });
    },
  });

  const handleActive = () => {
    const token: string = JSON.parse(localStorage.getItem("usertoken") || "");
    api
      .patch(
        `/shop/active/${params.id}`,
        {
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
          setdialog((prev) => !prev);

          // window.location.reload();
        } else {
          alert("something went wrong");
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
        if (res.status === 200) {
          // location.removeItem("user");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(typeof shopDetail.shopDetails.location.lat);

  const patchShopData = async (values: any) => {
    console.log({ values }, "inside");
    const token: string = JSON.parse(localStorage.getItem("usertoken") || "");
    await api
      .patch(
        `/shop/${params.id}`,
        {
          shopName: values.shopName,
          state: values.state,
          city: values.city,
          shopDetails: {
            isActive: shopDetail?.shopDetails?.isActive,
            landmark: values.landmark,
            pincode: values.pincode,
            address: values.address,
            phone: values.phone,
            email: values.email,
            delivery: cat.Delivery,
            gallery: {
              shopServicesImage:
                shopDetail?.shopDetails?.gallery?.shopServicesImage ||
                selectedfiles,
              shopLogo:
                shopDetail?.shopDetails?.gallery?.shopLogo || selectedidImage,
            },
            timings: {
              openingTime: values.openingTime,
              closingTime: values.closingTime,
            },
            location: {
              lat: shopDetail?.shopDetails?.location?.lat || mapLoc.lat,
              lng: shopDetail?.shopDetails?.location?.lng || mapLoc.lng,
            },
          },
          type: cat.type,
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
          console.log(res.data.data);
          setEdit(false);

          // window.location.reload();
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSwicth = () => {
    setOnline(!online);
    setdialog(true);
  };

  return !shopDetail ? (
    <VerificationLoader />
  ) : (
    <>
      {shopDetail?.verified === "false" ? (
        <>
          <WaitVerify
            firstName={shopDetail.userID.firstName}
            lastName={shopDetail.userID.lastName}
            shopName={shopDetail.shopName}
          />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "10px",
            width: "100%",
          }}
          // position="fixed"
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
              </DialogActions>
            </Dialog>
            <Body>
              <Grid item xs={12}>
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
                      // marginLeft: "18vw",
                      display: "flex",
                      justifyContent: "space-around",
                      // gap: "50px",
                      // border: "2px solid red",
                    }}
                  >
                    {shopDetail?.shopDetails?.location?.lat && !edit ? (
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{
                          background: " rgb(255,232,185)",
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
                        // border: "2px solid rgb(255,232,185)",
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

                                    // marginLeft: "30px",
                                  }}
                                >
                                  {edit ? (
                                    <>
                                      <TextFieldShopForm
                                        label="Shop Name"
                                        type="text"
                                        value={formik.values.shopName}
                                        onChange={formik.handleChange}
                                        name="shopName"
                                        // helperText={formik.errors.shopName}
                                        // error={
                                        //   formik.touched.shopName &&
                                        //   Boolean(formik.errors.shopName)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        type="text"
                                        label="address"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        name="address"
                                        // helperText={formik.errors.address}
                                        // error={
                                        //   formik.touched.address &&
                                        //   Boolean(formik.errors.address)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        label="email"
                                        type="text"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        name="email"
                                        // helperText={formik.errors.email}
                                        // error={
                                        //   formik.touched.email &&
                                        //   Boolean(formik.errors.email)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        label="pincode"
                                        type="text"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange}
                                        name="pincode"
                                        // helperText={formik.errors.pincode}
                                        // error={
                                        //   formik.touched.pincode &&
                                        //   Boolean(formik.errors.pincode)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        label="phone"
                                        type="text"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        name="phone"
                                        // helperText={formik.errors.phone}
                                        // error={
                                        //   formik.touched.phone &&
                                        //   Boolean(formik.errors.phone)
                                        // }
                                      />
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
                                      <TextFieldShopForm
                                        label="openingTime"
                                        type="time"
                                        value={formik.values.openingTime}
                                        onChange={formik.handleChange}
                                        name="openingTime"
                                        // helperText={formik.errors.openingTime}
                                        // error={
                                        //   formik.touched.openingTime &&
                                        //   Boolean(formik.errors.openingTime)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        label="closingTime"
                                        type="time"
                                        value={formik.values.closingTime}
                                        onChange={formik.handleChange}
                                        name="closingTime"
                                        // helperText={formik.errors.closingTime}
                                        // error={
                                        //   formik.touched.shopName &&
                                        //   Boolean(formik.errors.closingTime)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        type="text"
                                        label="landmark"
                                        value={formik.values.landmark}
                                        onChange={formik.handleChange}
                                        name="landmark"
                                        // helperText={formik.errors.landmark}
                                        // error={
                                        //   formik.touched.landmark &&
                                        //   Boolean(formik.errors.landmark)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        type="text"
                                        label="State"
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                        name="state"
                                        // helperText={formik.errors.state}
                                        // error={
                                        //   formik.touched.state &&
                                        //   Boolean(formik.errors.state)
                                        // }
                                      />
                                      <TextFieldShopForm
                                        type="text"
                                        label="City"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        name="city"
                                        // helperText={formik.errors.city}
                                        // error={
                                        //   formik.touched.city &&
                                        //   Boolean(formik.errors.city)
                                        // }
                                      />

                                      <Select
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                        }}
                                        type="text"
                                        label="Type"
                                        value={cat.type}
                                        name="type"
                                      >
                                        <MenuItem
                                          onClick={(e: any) => {
                                            setcategory({
                                              ...cat,
                                              type: "Static",
                                            });
                                          }}
                                          value="Static"
                                        >
                                          Static
                                        </MenuItem>
                                        <MenuItem
                                          onClick={() => {
                                            setcategory({
                                              ...cat,
                                              type: "Non-static",
                                            });
                                          }}
                                          value="Non-static"
                                        >
                                          Non-Static
                                        </MenuItem>
                                      </Select>
                                      <SelectField getData={getData} />
                                      <Select
                                        sx={{
                                          width: {
                                            lg: "600px",
                                            xs: "300px",
                                          },
                                          marginBottom: "20px",
                                        }}
                                        value={cat.Delivery}
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
                                      </Select>
                                    </>
                                  ) : (
                                    <>
                                      <Detail shopDetail={shopDetail} />
                                    </>
                                  )}

                                  {!recoil ? (
                                    ""
                                  ) : shopDetail._id === recoil.shopid ? (
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
                                            type="submit"
                                            size="small"
                                            variant="outlined"
                                          >
                                            save
                                          </Button>
                                        </>
                                      ) : (
                                        <Button
                                          size="small"
                                          variant="outlined"
                                          // type="submit"
                                          onClick={() => {
                                            setEdit(true);
                                            formik.setValues({
                                              ...shopDetail,
                                              ...shopDetail.shopDetails,
                                              ...shopDetail.shopDetails.timings,
                                              ...shopDetail.shopDetails.gallery,
                                            });
                                          }}
                                        >
                                          edit
                                        </Button>
                                      )}
                                      <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={shopDelete}
                                        sx={{
                                          color: "red",
                                          marginLeft: "2rem",
                                        }}
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
                                shopDetail.shopDetails.gallery.shopServicesImage
                              }
                              className="image"
                            />
                          </Box>
                        </>
                      )}
                    </BodyMain>
                  </Grid>
                </BodyContent>
                {/* </BackgroundBody> */}
              </Grid>
            </Body>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Shop;
