import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { shops } from "../Data/Dummy/DUmmyjson";
import Lottie from "lottie-react";
import logo from "../img/logo.json";

const Feed = () => {
  // console.log(shops);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            inset: 0,
            margin: 0,
            width: "99vw",
            height: "99vh",
            // border: "4px solid blue",
            // backgroundColor: "rgba(108, 153, 211 ,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // zIndex: -1,
          }}
          position="fixed"
        >
          <Grid item xl={12}>
            <Box
              sx={{
                minWidth: "60%",
                height: "96vh",
                // border: "2px solid red",
                // borderTopLeftRadius: "5%",
                borderRadius: "50px",
                margin: "30px",
                marginRight: "15px",
                display: "grid",
                gridTemplateColumns: "15% 1fr",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                bgcolor: "rgba(178, 237, 215 ,0.2)",
                // bgcolor: "C2D7C6",

                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 30px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <Grid item xs={4} xl={12}>
                <Box
                  sx={{
                    minWidth: "16vw",
                    height: "90vh",
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "10vw",
                      borderRadius: "5%",
                      // backgroundColor: "rgba(193, 209, 214,0.3)",
                      // bgcolor: "transparent",
                      backDropFilter: "blur(10px)",
                    }}
                    // position="fixed"
                  >
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          justifyItems: "center",
                        }}
                      >
                        {/* <Typography>SHOPPERS-DEN</Typography> */}
                        <Lottie
                          style={{
                            height: "140px",
                            // marginRight: "auto",
                          }}
                          animationData={logo}
                          loop={true}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: "center",
                              width: "10vw",
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "darkBlue",
                              "&:hover": {
                                boxShadow: "4px 2px 10px #C3D9E1",
                              },
                            }}
                          >
                            HOME
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              width: "10vw",
                              fontWeight: "bold",
                              fontSize: "18px",
                              color: "darkBlue",
                              "&:hover": {
                                boxShadow: "4px 2px 10px #C3D9E1",
                              },
                            }}
                          >
                            SETTINGS
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "18px",
                              fontWeight: "bold",
                              color: "darkBlue",
                              width: "10vw",
                              "&:hover": {
                                boxShadow: "4px 2px 10px #C3D9E1",
                              },
                            }}
                          >
                            ABOUT
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={8} xl={12}>
                <Box
                  sx={{
                    minWidth: "70vw",
                    height: "94vh",
                    // border: "2px solid red",
                    // bgcolor: "grey.300",
                    marginRight: "35px",
                  }}
                >
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateRows: "25% 1fr",
                        // gap: "10px",
                      }}
                    >
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            // border: "2px solid grey",
                            height: "100%",
                            width: "100%",
                          }}
                        >
                          <Grid item xs={12}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "15px",
                                borderRaduis: "15px",
                                width: "100%",
                                // boxShadow:
                                //   "rgba(0, 0, 0, 0.25) 0px 14px 30px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                              }}
                            >
                              <Grid item>
                                <Box
                                  sx={{
                                    height: "10vh",
                                    width: "100%",
                                    // border: "2px solid blue",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      //   justifyContent: "center",
                                      alignItems: "center",
                                      height: "10vh",
                                      width: "100%",
                                      borderRaduis: "10px",
                                      marginLeft: "10px",
                                      marginRight: "10px",
                                      color: "grey.700",
                                      borderTopRightRadius: "10px",
                                      borderTopLeftRadius: "10px",
                                      //   boxShadow:
                                      //     "rgba(0, 0, 0, 0.25) 0px 0px 30px, rgba(0, 0, 0, 0.22) 0px 0px 0px",

                                      // backgroundColor:
                                      // "rgba(193, 245, 203,0.7)",
                                    }}
                                  >
                                    {/* hello */}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item>
                                <Box
                                  sx={{
                                    height: "10vh",
                                    width: "100%",
                                    // border: "2px solid blue",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                      display: "flex",
                                      //   justifyContent: "center",
                                      alignItems: "center",
                                      height: "10vh",
                                      width: "100%",
                                      borderRaduis: "10px",
                                      marginLeft: "10px",
                                      marginRight: "10px",
                                      color: "grey.700",
                                      borderBottomRightRadius: "10px",
                                      borderBottomLeftRadius: "10px",

                                      // backgroundColor:
                                      // "rgba(193, 245, 203,0.7)",
                                    }}
                                  >
                                    {/* hello */}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Box>
                          </Grid>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            // border: "2px solid grey",
                            height: "70.4vh",
                          }}
                        >
                          <Grid item xs={12}>
                            <Box
                              sx={{
                                height: "69vh",
                                width: "99%",
                                // border: "2px solid red",
                                marginLeft: "10px",
                                borderRadius: "10px",
                                // backgroundColor: "rgba(193, 245, 203,0.7)",
                              }}
                            >
                              <Grid item xs={12}>
                                <Box
                                  sx={{
                                    display: "grid",
                                    gridTemplateColumns: "70% 1fr",
                                    // gap: "10px",
                                    height: "100%",
                                    width: "100%",
                                    // border: "2px solid green",
                                  }}
                                >
                                  <Grid item>
                                    <Box
                                      sx={{
                                        height: "69vh",
                                        maxWidth: "62vw",
                                        // border: "2px solid red",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        // flexWrap: "wrap",
                                      }}
                                      // overflow="hidden"
                                      //   overflow="scroll"
                                    >
                                      <Grid item spacing={0} xs={12}>
                                        <Box
                                          sx={{
                                            display: "flex",
                                            // flexDirection: "column",
                                            justifyContent: "center",
                                            flexWrap: "wrap",
                                            gap: "10px",
                                            maxWidth: "50vw",
                                            height: "68vh",
                                            // border: "2px solid blue",
                                            textAlign: "center",
                                            marginLeft: "5px",
                                          }}
                                          overflow="scroll"
                                        >
                                          {shops.shops.map((item) => {
                                            return (
                                              <>
                                                <Grid
                                                  container
                                                  item
                                                  spacing={0}
                                                  lg={4}
                                                  xs={10}
                                                  md={4}
                                                  m={0}
                                                  sx={{
                                                    marginBottom: "0px",
                                                  }}
                                                >
                                                  <Grid
                                                    item
                                                    // spacing={0}
                                                    m={0}
                                                    p={0}
                                                    xs={10}
                                                    md={4}
                                                    lg={4}
                                                  >
                                                    <Box
                                                      sx={{
                                                        height: "15em",
                                                        minWidth: "16vw",
                                                        margin: "0px",
                                                        // border:
                                                        // "2px solid black",
                                                        // bgcolor:
                                                        // "rgba(193, 245, 203,0.7)",
                                                        boxShadow:
                                                          "rgba(0, 0, 0, 0.2) 0px 11.3115px 40px 0px",
                                                      }}
                                                    >
                                                      <Typography
                                                        sx={
                                                          {
                                                            // border:
                                                            // "2px solid red",
                                                          }
                                                        }
                                                      >
                                                        {/* {item.shopName} */}
                                                      </Typography>
                                                    </Box>
                                                  </Grid>
                                                </Grid>
                                              </>
                                            );
                                          })}
                                        </Box>
                                      </Grid>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Box
                                      sx={{
                                        height: "69vh",
                                        width: "100%",
                                        // width: "100%",
                                        // border: "2px solid red",
                                      }}
                                    ></Box>
                                  </Grid>
                                </Box>
                              </Grid>
                            </Box>
                          </Grid>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Feed;
