import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { shops } from "../Data/Dummy/DUmmyjson";
import Lottie from "lottie-react";
import logo1 from "../img/logo.json";
import { NavLink } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import {
  Layout,
  SideBar,
  Body,
  BodyContent,
  BodyHeader,
  Navbar,
  ActionIconsMobile,
  BodyMain,
  AppbarContainer,
} from "../Component/Layout/Layout";
import {
  TypographyCo,
  TypographyDetail,
  TypoLogo,
} from "../Component/Typography/TypographyCo";

const Feed = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [layout, setLayout] = useState<string>("");
  // const [search, setSearch] = useState<string>("");
  const [locationMap, setSearch] = useState<string>("");
  const [search, setInputSearch] = useState<string>("");

  useEffect(() => {
    matches ? setLayout("70% 1fr") : setLayout("1fr");
  }, [matches]);

  console.log(layout);

  const type = "shop";
  // console.log(shops);
  return (
    <Grid container>
      <Grid item xs={12} xl={12}>
        <BackgroundBody
          sx={
            {
              // bgcolor: "rgb(224, 242, 241)",
            }
          }
          className="example"
        >
          {matches ? (
            <>
              <Grid item xs={4} xl={12}>
                <Layout>
                  <SideBar>
                    <Box
                      sx={{
                        // border: "2px solid red",
                        height: "100%",
                        display: "grid",
                        gridTemplateRows: "16% 1fr",
                      }}
                    >
                      <Box
                        sx={{
                          // border: "2px solid red",
                          marginTtop: "20px",
                        }}
                      >
                        <Lottie
                          // height={60}
                          animationData={logo1}
                          loop={false}
                          style={{
                            height: "80px",
                            // marginRight: "auto",
                          }}
                        />
                        {/* <TypographyCo>
                          <NavLink
                            state={type}
                            style={{ textDecoration: "none", color: "black" }}
                            to="/"
                          >
                            Register your Shop
                          </NavLink>
                        </TypographyCo> */}
                      </Box>
                      <Box
                        sx={{
                          // border: "2px solid red",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <TypographyCo
                          sx={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            fontSize: "12px",
                          }}
                        >
                          FILTER YOUR SEARCH
                        </TypographyCo>
                        <Box
                          sx={{
                            // border: "2px solid red",
                            height: "30vh",
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <TypographyCo>Filter</TypographyCo>
                          <TypographyCo>Distance</TypographyCo>
                          <TypographyCo>Available</TypographyCo>
                          <TypographyCo>Category</TypographyCo>
                        </Box>
                      </Box>
                    </Box>
                  </SideBar>
                </Layout>
              </Grid>
            </>
          ) : (
            ""
          )}
          <Grid item xs={8} xl={12}>
            <Body>
              <Grid item xs={12}>
                <BodyContent>
                  <Grid item xs={12}>
                    <BodyHeader>
                      {/* <Navbar> */}
                      <AppbarContainer
                        sx={{
                          // border: "2px solid red",
                          paddingLeft: "30px",
                        }}
                      >
                        <TypoLogo
                          sx={{
                            marginLeft: "10%",
                          }}
                          color="yellow"
                        >
                          SHOPPERS-DEN
                        </TypoLogo>
                        <Box
                          sx={{
                            marginLeft: "auto",
                            // marginRight: "10%",
                            display: "flex",
                            gap: "10px",
                            // border: "2px solid red",
                            justifyContent: "space-around",
                            alignItems: "center",
                            width: "30%",
                          }}
                        >
                          <TextField
                            label="Search shops"
                            size="small"
                            sx={{
                              width: 300,
                            }}
                            onChange={(e) => setInputSearch(e.target.value)}
                          ></TextField>
                          <TypographyDetail
                            sx={{
                              height: "5vh",
                              width: "5vh",
                              bgcolor: "orange",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginRight: "20px",
                            }}
                          >
                            <NavLink
                              to="/"
                              state={type}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              User
                            </NavLink>
                          </TypographyDetail>
                        </Box>
                      </AppbarContainer>
                      {/* </Navbar> */}
                    </BodyHeader>
                  </Grid>
                  <Grid item xs={12}>
                    <BodyMain>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            height: "69vh",
                            width: "99%",
                            // border: "2px solid red",
                            marginTop: "20px",
                            marginLeft: "10px",
                            borderRadius: "10px",
                            // backgroundColor: "rgba(193, 245, 203,0.7)",
                          }}
                        >
                          <Grid item xs={12}>
                            <Box
                              sx={{
                                display: "grid",
                                // gridTemplateColumns: "70% 1fr",
                                gridTemplateColumns: `${layout}`,
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
                                    maxWidth: "50vw",
                                    // border: "2px solid red",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    // flexWrap: "wrap",
                                  }}
                                >
                                  <Grid item spacing={0} xs={12}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        maxWidth: "50vw",
                                        height: "68vh",

                                        textAlign: "center",
                                        marginLeft: "5px",
                                        scrollbarColor:
                                          "transparent transparent",
                                        scrollbarWidth: "none",
                                      }}
                                      overflow="scroll"
                                    >
                                      {shops.shops
                                        .filter((item) => {
                                          if (search === "") {
                                            return item;
                                          } else if (
                                            item.shopName
                                              .toLowerCase()
                                              .includes(search.toLowerCase())
                                          ) {
                                            return item;
                                          }
                                        })
                                        .map((item) => {
                                          return (
                                            <>
                                              <Grid
                                                // container
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
                                                  xs={12}
                                                  md={4}
                                                  lg={4}
                                                >
                                                  <Box
                                                    sx={{
                                                      height: "15em",
                                                      minWidth: "16vw",
                                                      margin: "0px",
                                                      boxShadow:
                                                        "rgba(148, 217, 126, 0.7) 0px 0px 16px",
                                                      // boxShadow:
                                                      //   "rgba(0, 0, 0, 0.2) 0px 11.3115px 40px 0px",
                                                      backgroundImage: `url(${item.shopImage})`,
                                                      backgroundSize: "cover",
                                                      backgroundPosition:
                                                        "center center",
                                                      backgroundRepeat:
                                                        "no-repeat",
                                                      paddingTop: "10px",
                                                    }}
                                                    onClick={(e) => {
                                                      setSearch(
                                                        `${item.shopName}`
                                                      );
                                                    }}
                                                  >
                                                    <TypographyDetail
                                                      sx={{
                                                        fontSize: "1.2rem",
                                                        // marginTop: "10px",
                                                      }}
                                                    >
                                                      {item.shopName}
                                                    </TypographyDetail>
                                                    <Box
                                                      sx={{
                                                        // border: "2px solid red",
                                                        height: 100,
                                                        display: "flex",
                                                        justifyContent:
                                                          "flex-start",
                                                        flexDirection: "column",
                                                        // alignItems: "flex-end",
                                                        marginTop: "100px",
                                                      }}
                                                    >
                                                      <TypographyDetail>
                                                        Address :{" "}
                                                        {item.shopAddress}
                                                      </TypographyDetail>
                                                      <TypographyDetail>
                                                        Phone Number :{" "}
                                                        {item.shopPhoneNumber}
                                                      </TypographyDetail>
                                                      <TypographyDetail>
                                                        Owner Name :
                                                        {item.shopOwnerName}
                                                      </TypographyDetail>
                                                      <NavLink
                                                        to={`/shop/${item.id}`}
                                                      >
                                                        <Button>Detail</Button>
                                                      </NavLink>
                                                    </Box>
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
                              {matches ? (
                                <Grid item xs={12}>
                                  <Box
                                    sx={{
                                      height: "69vh",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    {locationMap}
                                  </Box>
                                </Grid>
                              ) : (
                                ""
                              )}
                            </Box>
                          </Grid>
                        </Box>
                      </Grid>
                    </BodyMain>
                  </Grid>
                </BodyContent>
              </Grid>
            </Body>
          </Grid>
        </BackgroundBody>
      </Grid>
    </Grid>
  );
};

export default Feed;
