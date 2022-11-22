import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShopDetails } from "../../Model/Model";
// import TextFieldShop from "../Textfield/TextFieldShop";
import TextFieldShop from "../Textfield/TextFieldShop";
// import { TypographyCo } from "../Typography/TypographyCo";
import { TypoShopDetail } from "../Typography/TyposhopDetails";

const ShopForm = (
  props: any,
  {
    id,
    shopName,
    // Address,
    phoneNumber,
    shopPhoneNumber,
    // shopImage,
    shopCategory,
    shopSubCategory,
    shopDescription,
    shopOwnerName,
    shopOwnerPhoneNumber,
    online,
    verfied,
  }: ShopDetails
) => {
  //   console.log(props.shop);
  const [shopInfo, setShopInfo] = useState<any>({
    shopName: "shopname",
    State: "Assam",
    City: "Guwahti",
    pincode: 0,
    landmark: "Near Central Mall",
    phoneNumber: 0,
    shopPhoneNumber: 0,
    // shopImage: [],
    shopCategory: "",
    shopSubCategory: "",
    shopDescription: "",
    shopOwnerName: "",
    shopOwnerPhoneNumber: 0,
    online: false,
    verfied: false,
  });
  const [edit, setEdit] = useState<boolean>(false);
  //   const [shop, setShop] = useState<any>(props.shop);
  //   const [address, setAddress] = useState<any>({
  //     State: "",
  //     City: "",
  //     pincode: 0,
  //     landmark: "",
  //   });

  // useEffect(() => {
  //   setShopInfo({
  //     shopName: props.shop.shopName,
  //   });
  // }, [shopInfo]);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setShopInfo({
  //     ...shopInfo,
  //     ...Address,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // console.log(shopInfo.Address.State);
  //   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setShopInfo((shopInfo: any) => ({
  //       ...shopInfo,
  //       ...Address[0],
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  return (
    <>
      <Formik
        initialValues={shopInfo}
        onSubmit={(values) => {
          console.log(values);
        }}
        enableReinitialize={true}
      >
        <Form>
          <Grid container>
            <Box
              sx={{
                width: "100%",
                height: "72vh",
                border: "2px solid red",
              }}
            >
              <Grid item xs={12}>
                <Box
                  sx={
                    {
                      // border: "2px solid red",
                      // display: "flex",
                    }
                  }
                >
                  <TypoShopDetail variant="subtitle1">
                    Shop Name :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopName"
                          type="text"
                          size="small"
                          value={shopInfo.shopName}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopName}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopOwnerName :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopOwnerName"
                          type="text"
                          size="small"
                          value={shopInfo.shopOwnerName}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopOwnerName}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopCategory :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopCategory"
                          type="text"
                          size="small"
                          value={shopInfo.shopCategory}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopCategory}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopSubCategory :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopSubCategory"
                          type="text"
                          size="small"
                          value={shopInfo.shopSubCategory}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopSubCategory}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopDescription :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopDescription"
                          type="text"
                          size="small"
                          value={shopInfo.shopDescription}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopDescription}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopPhoneNumber :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopPhoneNumber"
                          type="text"
                          size="small"
                          value={shopInfo.shopPhoneNumber}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopPhoneNumber}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    shopOwnerPhoneNumber :
                    {edit ? (
                      <>
                        <TextFieldShop
                          // label="Shop Name"
                          setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          name="shopOwnerPhoneNumber"
                          type="text"
                          size="small"
                          value={shopInfo.shopOwnerPhoneNumber}
                        />
                      </>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        {shopInfo.shopOwnerPhoneNumber}
                      </Typography>
                    )}
                  </TypoShopDetail>
                  <TypoShopDetail variant="subtitle1">
                    {edit ? (
                      <>
                        <TextField
                          // label="Shop Name"
                          //   setShopInfo={setShopInfo}
                          //   shopInfo={shopInfo}
                          // onChange={handleInput}
                          name="State"
                          type="text"
                          size="small"
                          //   value={shopInfo.Address[0].State}
                        >
                          {/* {shopInfo.Address[0].State} */}
                        </TextField>
                        {/* <TextField onChange={handleInput}></TextField> */}
                      </>
                    ) : (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {/* {console.log(shopInfo.Address[0], "1")} */}
                          <Typography>State: {shopInfo.State}</Typography>
                          <Typography>City: {shopInfo.City}</Typography>
                          <Typography>Pincode: {shopInfo.pincode}</Typography>
                          <Typography>landmark: {shopInfo.landmark}</Typography>
                        </Box>
                      </>
                    )}
                  </TypoShopDetail>
                </Box>
              </Grid>
              {!shopInfo.verified ? (
                <>
                  {!edit ? (
                    <Button type="submit" onClick={() => setEdit(true)}>
                      Edit
                    </Button>
                  ) : (
                    <Button onClick={() => setEdit(false)}>save</Button>
                  )}
                </>
              ) : (
                ""
              )}
            </Box>
          </Grid>
        </Form>
      </Formik>
    </>
  );
};

export default ShopForm;
