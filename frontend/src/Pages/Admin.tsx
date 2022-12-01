import React, { useState, useEffect } from "react";
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
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import {
  Grid,
  Box,
  Typography,
  Button,
  MenuItem,
  TextField,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { api } from "../lib/Axios";
import BasicModal from "../Component/ADmin/Modal";
import { boolean } from "yup/lib/locale";

// const [userToken, setUserToken] = useState(() =>
//   getTokenFromLocalStorage("usertoken")
// );

const Admin = () => {
  const [pending, setpending] = useState<boolean>(false);
  const [verified, setverified] = useState<any>();
  const [shopId, setShopId] = useState<any>();
  const [open, setOpen] = React.useState(false);
  console.log(open);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCLick = () => {
    setpending(true);
  };
  const handlpending = () => {
    setpending(false);
  };
  const type = "pending";

  useEffect(() => {
    api
      .get(`/shops?verified=${pending}`)
      .then((res) => {
        setverified(res.data.data);
        console.log(res.data.data);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pending, shopId]);
  // console.log(verified.city);

  const handleVerify = (id: any) => {
    const token: string = JSON.parse(localStorage.getItem("admintoken") || "");
    api
      .patch(
        `/admin/shop/${id}`,
        {
          verify: true,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setShopId("done");
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = (id: any) => {
    const token: string = JSON.parse(localStorage.getItem("admintoken") || "");
    api
      .delete(`/admin/shop/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setShopId("done");
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!verified ? (
        "no shop is pending"
      ) : (
        <Grid
          container
          xl={12}
          sx={{
            display: "flex",
            marginLeft: "5%",
            // width: "95%",
            width: "88%",
            justifyContent: "center",
            // border: "1px solid black",
          }}
        >
          <Grid item xs={12} xl={12}>
            <BackgroundBody
              sx={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
              }}
              // position="fixed"
            >
              <Box
                sx={{
                  height: "80vh",
                  width: "88vw",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",

                  overflow: "scroll",
                  overflowX: "clip",
                }}
              >
                <Box
                  sx={{
                    height: "10vh",
                    width: "28vw",

                    marginTop: "2rem",
                  }}
                >
                  <TextField select fullWidth>
                    {/* <MenuItem onClick={handleCLick} value="All">
                    All
                  </MenuItem> */}
                    <MenuItem onClick={handleCLick} value="Verified">
                      Verified
                    </MenuItem>
                    <MenuItem onClick={handlpending} value="Pending">
                      Pending
                    </MenuItem>
                  </TextField>
                </Box>
                <Grid item xs={12} xl={12}>
                  <Box
                    sx={{
                      height: "60vh",
                      width: "80vw",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",

                      // display: "flex",
                      // justifyContent: "center",
                    }}
                  >
                    {verified.length < 1 ? (
                      "no shop is pending"
                    ) : (
                      <>
                        {verified?.map((item: any) => {
                          return (
                            <>
                              <Grid container xs={12}>
                                <Grid item xs={12} xl={6}>
                                  <Card
                                    sx={{
                                      width: "20vw",
                                      // height: "30vh",
                                      margin: "1rem",
                                      backgroundColor: "rgb(255,232,185)",
                                    }}
                                    // onClick={() => {
                                    //   setOpen(true);
                                    // }}
                                  >
                                    <CardMedia
                                      sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                      component="img"
                                      height="240"
                                      image={item.governmentIDImage}
                                      alt="green iguana"
                                    />
                                    <CardHeader
                                      title={item.shopName}
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}
                                    />

                                    <CardActions
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      {!pending ? (
                                        <Button
                                          onClick={() => {
                                            handleVerify(item._id);
                                          }}
                                          sx={{
                                            bgcolor:
                                              item.verified === "true"
                                                ? "greenyellow"
                                                : "yellow",
                                            color: "black",
                                          }}
                                        >
                                          verify
                                        </Button>
                                      ) : (
                                        ""
                                      )}
                                      <Button
                                        sx={{
                                          bgcolor: "orange",
                                        }}
                                        onClick={() => {
                                          handleReject(item._id);
                                        }}
                                      >
                                        Delete
                                      </Button>

                                      <BasicModal
                                        open={open}
                                        id={item._id}
                                        setOpen={setOpen}
                                        type={type}
                                        handleOpen={handleOpen}
                                        handleClose={handleClose}
                                      />
                                    </CardActions>
                                  </Card>
                                </Grid>
                              </Grid>
                            </>
                          );
                        })}
                      </>
                    )}
                  </Box>
                </Grid>
              </Box>
            </BackgroundBody>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Admin;
