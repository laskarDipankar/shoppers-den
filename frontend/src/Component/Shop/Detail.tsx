import { RestaurantRounded } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontSize, fontWeight } from "@mui/system";
interface Props {
  shopDetail: any;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D4C92",
    },
    secondary: {
      main: "#0D4C92",
    },
  },
  typography: {
    // fontFamily: ["Vollkorn"].join(","),

    h4: {
      fontFamily: ["Bebas Neue"].join(","),
      color: "black",
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: ["Bebas Neue", "cursive"].join(","),
      // fontFamily: 'Vollkorn',
      color: "black",
      fontSize: "1.3rem",
      fontWeight: "bold",
    },

    button: {
      textTransform: "none",
      // background: "#0D4C92",
      variant: "outlined",
      color: "white",
      borderRadius: "10px",
      // padding: "10px",
      display: "flex",
      justifyContent: "center",
      // width: "100%",
      "&:hover": {
        background: "#0D4C92",
        color: "white",
      },
    },
  },
});

const Detail = ({ shopDetail }: Props) => {
  console.log(shopDetail);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {shopDetail.type ? ( */}
        <Box
          sx={{
            height: "100%",
            width: "80vw",
            border: "2px solid red",
            //   boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
            paddingRight: "5%",
            paddingLeft: "5%",
            // marginRight: "10rem",
            borderRadius: "20px",
            background: "rgba( 255, 255, 255, 0.4 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: " blur( 11.5px )",

            // border: "1px solid rgba( 255, 255, 255, 0.18 )",
            WebkitBackdropFilter: " blur( 11.5px )",
            marginLeft: {
              // xl:"5rem"
              // xs: "0.3rem",
              sm: "0rem",
            },
            display: "flex",
            justifyContent: "center",
            marginRight: {
              // xs: "18vw",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Grid container>
              <Grid item xs={12} lg={6} xl={6}>
                <Box
                  sx={{
                    height: "100vh",

                    width: {
                      xl: "40vw",
                      lg: "40vw",
                      md: "80vw",
                      sm: "96%",
                      xs: "100vw",
                    },

                    marginLeft: {
                      // xs: "10rem",
                      // lg: "10rem",
                    },

                    // border: "2px solid blue",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",

                        justifyContent: {
                          xl: "flex-start",
                          lg: "flex-start",
                          md: "space-between",
                          xs: "space-between",
                        },
                        alignItems: "center",
                        marginTop: "2rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        gap: { xl: "4rem", xs: "1rem" },
                        height: "100%",
                        // border: "2px solid red",
                      }}
                    >
                      {/* <Typography
                        // variant="subtitle"
                        component="span"
                        sx={{
                          borderRadius: "50%",
                          height: "7vh",
                          border: "2px solid red",
                          width: "5vw",
                        }}
                      > */}
                      <img
                        src={shopDetail?.shopDetails?.gallery?.shopLogo}
                        alt="logo"
                        style={{
                          fontSize: "10px",
                          height: "5rem",
                          width: "5rem",
                          borderRadius: "50%",
                          objectFit: "cover",
                          transition: "all 0.3s ease-in-out",
                          boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.55)",

                          // hover: {
                          //   transform: "scale(1.05)",
                          //   boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.55)",
                          // },
                        }}
                      />
                      {/* </Typography> */}
                      {shopDetail.shopName.toUpperCase()}
                    </Typography>
                    {/* <Box
                    sx={{
                      display: "flex",
                      border: "2px solid red",
                    }}
                  > */}
                    <Box
                      sx={{
                        marginTop: "5rem",
                        padding: "2rem",
                        display: "flex",
                        alignItems: {
                          xl: "flex-start",
                          lg: "flex-start",
                          md: "center",
                          xs: "center",
                        },
                        flexDirection: "column",
                        gap: "1.3rem",
                        // width: "100%",
                        // border: "2px solid red",
                      }}
                    >
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                            // display: "flex",
                            // border: "2px solid red",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Address :
                        <Typography variant="h6" component="span">
                          {shopDetail?.shopDetails.address}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                            // display: "flex",
                            // border: "2px solid red",
                            // width: "10rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        city :
                        <Typography variant="h6" component="span">
                          {shopDetail?.city}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                            // display: "flex",
                            // width: "10rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        state :
                        <Typography variant="h6" component="span">
                          {shopDetail?.state}
                        </Typography>
                      </Typography>

                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                            // width: "100%",
                            // border: "2px solid red",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Landmark :{" "}
                        <Typography variant="h6" component="span">
                          {shopDetail?.shopDetails.landmark}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Pincode :
                        <Typography variant="h6" component="span">
                          {shopDetail?.shopDetails.pincode}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Closing time :{" "}
                        <Typography variant="h6" component="span">
                          {shopDetail?.shopDetails?.timings?.closingTime}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Opening time :{" "}
                        <Typography variant="h6" component="span">
                          {shopDetail?.shopDetails?.timings?.openingTime}
                        </Typography>
                      </Typography>
                      {shopDetail?.category === "fitness" ? (
                        ""
                      ) : (
                        <Typography
                          sx={{
                            marginLeft: "2rem",
                            display: "flex",
                          }}
                          variant="h6"
                          component="span"
                        >
                          Delivery :{" "}
                          <Typography variant="h6" component="span">
                            {shopDetail?.shopDetails.delivery ? "Yes" : "No"}
                          </Typography>
                        </Typography>
                      )}

                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Phone Number :
                        <Typography variant="h6" component="span">
                          {shopDetail?.phoneNumber}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={
                          {
                            // marginLeft: "2rem",
                          }
                        }
                        variant="h6"
                        component="span"
                      >
                        Category :
                        <Typography variant="h6" component="span">
                          {shopDetail?.category}
                        </Typography>
                      </Typography>
                    </Box>
                    {/* </Box> */}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} xl={6}>
                {/* <Box
                sx={{
                  height: "100vh",
                  width: {
                    // xl: "40vw",
                    // lg: "40vw",
                    // md: "100%",
                    // sm: "96%",
                    // xs: "100vw",
                  },

                  border: "2px solid blue",
                }}
              > */}
                <Box
                  sx={{
                    marginTop: {
                      xs: "4rem",
                      md: "2rem",
                      xl: "2rem",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      height: "7.5vh",
                      //   border: "2px solid red",
                    }}
                  >
                    OWNER
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "6rem",
                      display: "flex",

                      alignItems: "flex-start",
                      //   flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      sx={{
                        marginLeft: "1rem",
                      }}
                      variant="h6"
                      component="span"
                    >
                      {shopDetail.userID.firstName +
                        " " +
                        shopDetail.userID.lastName}
                    </Typography>
                    <Typography
                      sx={{
                        marginLeft: "2rem",
                      }}
                      variant="h6"
                      component="span"
                    >
                      Owner Phone :
                      <Typography variant="h6" component="span">
                        {shopDetail?.shopDetails.phone}
                      </Typography>
                    </Typography>
                    <Typography
                      sx={{
                        marginLeft: "2rem",
                      }}
                      variant="h6"
                      component="span"
                    >
                      Email :
                      <Typography variant="h6" component="span">
                        {shopDetail.shopDetails.email}
                      </Typography>
                    </Typography>
                    <Card
                      sx={{
                        margin: "2rem",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={shopDetail.shopImage}
                        height="500"
                      />
                    </Card>

                    {/* <Box
                      sx={{
                        marginTop: "2rem",
                        backgroundImage: `url(${shopDetail?.shopImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        border: "2px solid red",
                        height: "80%",
                        width: "80%",
                        // height: {
                        //   xl: "30rem",
                        //   lg: "20rem",
                        //   md: "20rem",
                        //   sm: "20rem",
                        //   xs: "20rem",
                        // },
                        // width: {
                        //   xl: "60rem",
                        //   lg: "40rem",
                        //   md: "40rem",
                        //   sm: "40rem",
                        //   xs: "20rem",
                        // },

                        // marginLeft: {
                        //   xl: "2rem",
                        //   lg: "2rem",
                        //   md: "2rem",
                        //   sm: "2rem",
                        //   xs: "0",
                        // },
                      }}
                    ></Box> */}
                  </Box>
                </Box>
                {/* </Box> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Detail;
