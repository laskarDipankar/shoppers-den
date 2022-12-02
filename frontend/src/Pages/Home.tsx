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
  CircularProgress,
  InputLabel,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { shops } from "../Data/Dummy/DUmmyjson";
import React, { useEffect, useState } from "react";
import MapModal from "../Component/MapModal/MapModal";
import SearchIcon from "@mui/icons-material/Search";
import { Category } from "../Data/Dummy/Category";
import Pagination from "../Component/Pagination/Pagination";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { api } from "../lib/Axios";
import VerificationLoader from "../Component/Shop/VerificationLoader";
import { throttle } from "throttle-debounce";

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
  const [shop, setShop] = useState<any>([]);
  const [age, setAge] = useState("all");
  const [value, setvalue] = useState("all");
  const [pagein, setpagination] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [firstRender, setFistRender] = useState<boolean>(true);
  let pages: number;
  const limit = 8;

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleCategory = (event: any) => {
    setvalue(event.target.value);
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
  const [hanuman, sethanuman] = useState<string>(``);
  // hopDetails.isActive=${
  //   filter.available ? true : false || ""
  // }

  const [skip, setskip] = useState<number>(0);
  console.log(filter.available);
  useEffect(() => {
    setLoading(true);

    api
      .get(
        `/shops?verified=true&search=${search}&${ram}&${hanuman}&limit=${limit}&skip=${skip}`
      )
      .then((res) => {
        setLoading(false);

        setShop(res.data.data || []);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFistRender(false);
      });

    api
      .get(`/shops?verified=true&${ram}&${hanuman}`)
      .then((res) => {
        setLoading(false);
        setpagination(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFistRender(false);
      });
  }, [ram, skip, search, hanuman]);

  pages = Math.floor(pagein / limit);
  console.log("pages", pages);

  console.log(skip);
  const page = "home";

  console.log(ram);

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
            {/* <InputLabel></InputLabel> */}
            <TextField
              select
              size="small"
              value={age}
              label="Filter by"
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
              <MenuItem onClick={() => setram("type=Static")} value="Time">
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
            </TextField>
            <TextField
              select
              size="small"
              label="category"
              value={value}
              onChange={handleCategory}
              sx={{
                width: "14rem",
              }}
            >
              <MenuItem onClick={() => sethanuman("")} value="all">
                All
              </MenuItem>
              {Category.map((item) => {
                return (
                  <MenuItem
                    onClick={() => sethanuman(`category=${item}`)}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
              <MenuItem onClick={() => setram("type=Static")} value="Time">
                Static
              </MenuItem>
            </TextField>

            <TextField
              variant="standard"
              sx={{
                // borderBottom: "1px solid black",
                minWidth: "15%",
                // border: "1px solid black",
                borderRadius: "10px 10px 0px 0px ",
              }}
              onChange={(e) => setInputSearch(e.target.value)}
              // onChange={(e) => setram(`shopName=${e.target.value}`)}
              placeholder="Search shops"
              // variant="outlined"
              size="small"
            ></TextField>
          </Box>
          {loading && (
            <Box
              sx={{
                display: "flex",
                height: "70vh",
                width: "60vw",
                justifyContent: "center",
                alignItems: "center",
                // border: "2px solid black",
                marginLeft: "20vw",
              }}
            >
              {/* <VerificationLoader /> */}
              <CircularProgress
                sx={{
                  color: "black",
                }}
              />
            </Box>
          )}
          {!loading && shop.length === 0 && !firstRender && (
            <Typography
              style={{
                fontSize: "35px",
                fontWeight: "bold",
                marginTop: "80px",
              }}
            >
              No items found for this filter. Try another one.
            </Typography>
          )}
          {shop?.length > 0 && !loading && (
            <>
              <Box
                sx={{
                  marginTop: "2rem",
                  height: "70vh",
                  textAlign: "center",
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
                  {shop.map((item: any) => {
                    return (
                      <>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                          <Box
                            sx={{
                              maxWidth: 335,
                              // height: 405,
                              marginLeft: "auto",
                              marginRight: "auto",
                              padding: "1rem",
                              marginBottom: "2rem",
                              background: "rgba(255,255,255,0.4)",
                              backdropFilter: "blur(15px)",
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
                                maxWidth: 335,
                                marginTop: "1rem",
                                boxShadow: "none",
                                transition: "all 0.3s ease-in-out",
                                background: "rgba(255,255,255,0.4)",
                                // backdropFilter: "blur(15px)",
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
                              {item.type ? (
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
                              ) : (
                                <CardActions
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  <Button disabled>
                                    {item.shopName} <br /> (Coming Soon)
                                  </Button>
                                  {/* <Button
                                      size="small"
                                      variant="outlined"
                                      disabled
                                      sx={{
                                        color: "black",
                                      }}
                                    >
                                      View location
                                    </Button>

                                    <Button
                                      variant="outlined"
                                      sx={{
                                        color: "black",
                                      }}
                                      disabled
                                      size="small"
                                    >
                                      Detail
                                    </Button> */}
                                </CardActions>
                              )}
                            </Card>
                          </Box>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
                <Box
                  sx={{
                    // marginTop: "15vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pagination
                    setskip={setskip}
                    limit={limit}
                    skip={skip}
                    pages={pages + 1}
                  />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
