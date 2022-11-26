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
  CardContent,
  CardActions,
} from "@mui/material";
import { api } from "../lib/Axios";
import { boolean } from "yup/lib/locale";

// const [userToken, setUserToken] = useState(() =>
//   getTokenFromLocalStorage("usertoken")
// );

const Admin = () => {
  const [pending, setpending] = useState<boolean>(false);
  const [verified, setverified] = useState<any>();
  const [shopId, setShopId] = useState<any>();

  const handleCLick = () => {
    setpending(true);
  };
  const handlpending = () => {
    setpending(false);
  };

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
  }, [pending]);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReject = (id: any) => {
    const token: string = JSON.parse(localStorage.getItem("admintoken") || "");
    api
      .delete(`/admin/shops/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
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
            >
              <Box
                sx={{
                  height: "100%",
                  width: "88vw",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "10vh",
                    width: "28vw",
                    marginTop: "2rem",
                    // border: "1px solid black",
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
                      display: "flex",
                      justifyContent: "center",
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
                                      height: "20vh",
                                      margin: "1rem",
                                    }}
                                  >
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
