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
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { shops } from "../Data/Dummy/DUmmyjson";
import { useState } from "react";
import MapModal from "../Component/MapModal/MapModal";

const Home = () => {
  const [search, setInputSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<any>({
    lat: 0,
    lng: 0,
    shopName: "",
  });

  console.log(open);
  return (
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
          <Typography variant="h6">Available</Typography>
          <Typography variant="h6">Tme</Typography>
          <Typography variant="h6">Filter</Typography>
          <Typography variant="h6">Filter</Typography>
          <TextField
            sx={{
              borderBottom: "1px solid black",
              minWidth: "15%",
            }}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search shops"
            variant="outlined"
            size="small"
          ></TextField>
        </Box>
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
                    <Grid item xs={12} sm={6} md={4} lg={3} pl={4} pr={4}>
                      <Box
                        sx={{
                          maxWidth: 365,
                          marginLeft: "auto",
                          marginRight: "auto",
                          padding: "2rem",
                          marginBottom: "2rem",

                          boxShadow:
                            " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",

                          borderRadius: "10px",
                          // border: "1px solid black",
                        }}
                      >
                        <Card
                          sx={{
                            maxWidth: 345,
                            marginTop: "1rem",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
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
                                  <Typography variant="subtitle2" color="green">
                                    Online
                                  </Typography>
                                ) : (
                                  <Typography variant="subtitle2" color="error">
                                    Offline
                                  </Typography>
                                )}
                              </Typography>
                            </NavLink>
                            <Typography variant="body2" color="text.secondary">
                              {item.shopCategory}
                            </Typography>
                          </CardContent>
                          <CardActions
                            sx={{
                              border: "1px solid black",
                              paddingLeft: "34%",
                              paddingRight: "auto%",
                            }}
                          >
                            <NavLink
                              style={{
                                textDecoration: "none",
                                color: "blue",
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
                          />
                        </Card>
                      </Box>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
