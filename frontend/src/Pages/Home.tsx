import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Modal,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { shops } from "../Data/Dummy/DUmmyjson";
import React, { useEffect, useState } from "react";
import MapModal from "../Component/MapModal/MapModal";
import SearchIcon from "@mui/icons-material/Search";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { api } from "../lib/Axios";

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

const Home = () => {
  const [search, setInputSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [shop, setShop] = useState<any>();
  const [age, setAge] = useState("all");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const [coordinates, setCoordinates] = useState<any>({
    lat: 0,
    lng: 0,
    shopName: "",
  });
  const getCoords = (data: any) => {
    setCoordinates({
      lat: data.lat,
      lng: data.lng,
    });
  };
  const [filter, setFilter] = useState<any>({
    available: ``,
    SStatic: "",
    Nonstatic: "",
    delivery: ``,
  });

  const [ram, setram] = useState<string>(``);
  // hopDetails.isActive=${
  //   filter.available ? true : false || ""
  // }
  console.log(filter.available);
  useEffect(() => {
    api
      .get(`/shops?verified=true&${ram}`)
      .then((res) => {
        setShop(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ram]);

  console.log(filter);
  const page = "home";

  console.log(coordinates);

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Box
          sx={{
            height: "89vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: " 8px",
          }}
        >
          <Box
            sx={{
              height: "10vh",
              width: "100%",
              // border: "1px solid black",
              display: "flex",
              gap: "2.4vw",
              justifyContent: "space-around",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Select
              size="small"
              value={age}
              onChange={handleChange}
              sx={{
                width: "14rem",
              }}
            >
              <MenuItem onClick={() => setram("")} value="all">
                All
              </MenuItem>
              <MenuItem
                onClick={() => setram("shopDetails.isActive=true")}
                value="available"
              >
                Available
              </MenuItem>
              <MenuItem onClick={() => setram("type=static")} value="Time">
                Static
              </MenuItem>
              <MenuItem
                onClick={() => setram("type=Non-static")}
                value="Non-static"
              >
                Non-Static
              </MenuItem>
              <MenuItem
                onClick={() => setram("shopDetails.delivery=false")}
                value="Filter"
              >
                Delivery-Available
              </MenuItem>
              {/* <MenuItem value="Filter">static</MenuItem> */}
            </Select>
            <TextField
              // variant="standard"
              sx={{
                // borderBottom: "1px solid black",
                minWidth: "15%",
                // border: "1px solid black",
                borderRadius: "10px 10px 0px 0px ",
              }}
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Search shops"
              variant="outlined"
              size="small"
            >
              {/* <SearchIcon /> */}
            </TextField>
          </Box>
          {shop?.length > 0 ? (
            <>
              {/* <h1>hello{shop.length}</h1> */}
              <Box
                sx={{
                  marginTop: "2rem",
                  height: "70vh",
                  // overflow: "scroll",
                }}
              >
                <Grid
                  sx={{
                    textAlign: "center",
                  }}
                  container
                  spacing={2}
                >
                  {shop
                    .filter((item: any) => {
                      if (
                        item.shopName
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((item: any) => {
                      return (
                        <>
                          <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Box
                              sx={{
                                maxWidth: 365,
                                marginLeft: "auto",
                                marginRight: "auto",
                                padding: "1rem",
                                // borderTop: "4px solid rgb(109,80,153)",
                                // borderRight: "4px solid rgb(109,80,153)",
                                // borderBottom: "4px solid rgb(109,80,153)",
                                // borderLeft: "4px solid rgb(109,80,153)",
                                marginBottom: "2rem",
                                // backgroundColor: " rgba(255, 255, 255, 0.45)",
                                background: " rgb(255,232,185)",
                                backgroundImage:
                                  "linear-gradient(75deg, rgba(255,232,185,1) 27%, rgba(238,238,238,1) 100%, rgba(220,233,166,1) 100%, rgba(230,241,230,0.7315301120448179) 100%)",

                                // boxShadow:
                                //   " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                                borderRadius: "10px",
                                boxShadow:
                                  " 2px 3px 5px 0px rgba(29, 28, 31,0.75)",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                },
                              }}
                            >
                              <Card
                                sx={{
                                  maxWidth: 345,
                                  marginTop: "1rem",
                                  boxShadow: "none",
                                  // backgroundClor: "#f9f9f9",
                                  // backgroundImage:
                                  //   "linear-gradient(132deg, #f9f9f9 0%, #a062c5 50%, #f2f2f2 100%)",
                                  transition: "all 0.3s ease-in-out",
                                  background: " rgb(255,232,185)",
                                  backgroundImage:
                                    "linear-gradient(75deg, rgba(255,232,185,1) 27%, rgba(238,238,238,1) 100%, rgba(220,233,166,1) 100%, rgba(230,241,230,0.7315301120448179) 100%)",
                                }}
                              >
                                <CardMedia
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                  component="img"
                                  height="240"
                                  image={item.shopImage}
                                  alt="green iguana"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                  <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      gap: "1rem",
                                      fontSize: "1.0rem",
                                    }}
                                  >
                                    {item.shopName.toUpperCase()}
                                    {item.shopDetails.isActive ? (
                                      <Typography
                                        sx={{
                                          color: "green",
                                        }}
                                      >
                                        ONLINE
                                      </Typography>
                                    ) : (
                                      <Typography
                                        sx={{
                                          color: "red",
                                        }}
                                      >
                                        OFFLINE
                                      </Typography>
                                    )}
                                  </Typography>
                                  <Typography>{item.category}</Typography>
                                </CardContent>
                                <CardActions
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                      color: "black",
                                    }}
                                    onClick={() => {
                                      setOpen(true);
                                      getCoords({
                                        lat: item.shopDetails.location.lat,
                                        lng: item.shopDetails.location.lng,
                                        shopName: item.shopName,
                                      });
                                    }}
                                  >
                                    View location
                                    {/* {console.log(
                                      item.shopDetails.location.lat,
                                      item.shopDetails.location.lng
                                    )} */}
                                  </Button>
                                  <MapModal
                                    setOpen={setOpen}
                                    coordinates={coordinates}
                                    open={open}
                                    page={page}
                                    getCoords={getCoords}
                                  />
                                  <NavLink
                                    style={{
                                      textDecoration: "none",
                                    }}
                                    to={{
                                      pathname: `/shop/${item._id}`,
                                    }}
                                  >
                                    <Button
                                      variant="outlined"
                                      sx={{
                                        color: "black",
                                      }}
                                      size="small"
                                    >
                                      Detail
                                    </Button>
                                  </NavLink>
                                </CardActions>
                              </Card>
                            </Box>
                          </Grid>
                        </>
                      );
                    })}
                </Grid>
              </Box>
            </>
          ) : (
            <Box
              sx={{
                marginTop: "2rem",
                height: "70vh",
                // overflow: "scroll",
              }}
            >
              <Grid
                container
                sx={{
                  textAlign: "center",
                }}
              >
                {shops.shops
                  .filter((item) => {
                    if (
                      item.shopName.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item) => {
                    return (
                      <>
                        <Grid item xs={12} sm={6} md={4} lg={3} pl={4} pr={3}>
                          <Box
                            sx={{
                              maxWidth: 365,
                              marginLeft: "auto",
                              marginRight: "auto",
                              padding: "2rem",
                              marginBottom: "2rem",
                              // backgroundColor: " rgba(255, 255, 255, 0.45)",
                              bgcolor: "black",
                              boxShadow:
                                " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                              borderRadius: "10px",
                            }}
                          >
                            <Card
                              sx={{
                                maxWidth: 345,
                                marginTop: "1rem",
                                boxShadow: "none",
                                backgroundColor: " rgba(255, 255, 255, 0.45)",
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="240"
                                image={item.shopImage}
                                alt="green iguana"
                              />
                              <CardContent>
                                <NavLink
                                  style={{ textDecoration: "none" }}
                                  to={`/shop/${item.id}`}
                                >
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                  >
                                    {item.shopName}
                                    {item.online ? (
                                      <Typography
                                        variant="subtitle2"
                                        color="green"
                                      >
                                        Online
                                      </Typography>
                                    ) : (
                                      <Typography
                                        variant="subtitle2"
                                        color="error"
                                      >
                                        Offline
                                      </Typography>
                                    )}
                                  </Typography>
                                </NavLink>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {item.shopCategory}
                                </Typography>
                              </CardContent>
                              <CardActions
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <NavLink
                                  style={{
                                    textDecoration: "none",
                                    // color: "blue",
                                  }}
                                  to={`/shop/${item.id}`}
                                >
                                  <Button size="small">Detail</Button>
                                </NavLink>

                                <Button
                                  onClick={() => {
                                    {
                                      setOpen(true);
                                    }
                                    {
                                      setCoordinates({
                                        lat: item.location.lat,
                                        lng: item.location.lng,
                                        shopName: item.shopName,
                                      });
                                    }
                                  }}
                                  size="small"
                                >
                                  Map
                                </Button>
                              </CardActions>
                              <MapModal
                                setOpen={setOpen}
                                coordinates={coordinates}
                                open={open}
                                page={page}
                                getCoords={getCoords}
                              />
                            </Card>
                          </Box>
                        </Grid>
                      </>
                    );
                  })}
              </Grid>
            </Box>
          )}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
