import { Box, Grid, Typography } from "@mui/material";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { useState, useEffect } from "react";
import {
  Layout,
  SideBar,
  Body,
  BodyContent,
  BodyHeader,
  Navbar,
  BodyMain,
} from "../Component/Layout/Layout";
import { shops } from "../Data/Dummy/DUmmyjson";
import { useParams } from "react-router";
import { TypoShopDetail } from "../Component/Typography/TypographyCo";

const Shop = () => {
  const params = useParams();
  const [state, setstate] = useState<Number>();

  console.log(shops);

  return (
    <>
      {/* <Grid container xs={12}> */}
      <BackgroundBody>
        <Grid item xs={12}>
          <Layout>
            <Grid item xs={12}>
              <SideBar></SideBar>
            </Grid>
          </Layout>
        </Grid>
        <Grid item xs={12}>
          <Body>
            <Grid item xs={12}>
              <BodyContent>
                <Grid item xs={12}>
                  <BodyHeader>
                    <Navbar></Navbar>
                  </BodyHeader>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <BodyMain>
                    <Grid item xs={6} lg={6}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "60% 1fr",
                        }}
                      >
                        <Grid item xs={6}>
                          <Box
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              border: "2px solid red",
                              height: "74vh",
                            }}
                          >
                            {shops.shops.map((item) => {
                              if (String(item.id) === params.id) {
                                return (
                                  <>
                                    <TypoShopDetail variant="h1">
                                      {item.shopName}
                                    </TypoShopDetail>
                                    <TypoShopDetail variant="h1">
                                      {item.shopAddress}
                                    </TypoShopDetail>
                                    <TypoShopDetail variant="h1">
                                      {item.shopCategory}
                                    </TypoShopDetail>
                                    <TypoShopDetail variant="h1">
                                      {item.shopCity}
                                    </TypoShopDetail>
                                    <TypoShopDetail variant="h1">
                                      {item.shopOwnerName}
                                    </TypoShopDetail>
                                  </>
                                );
                              }
                            })}
                          </Box>
                        </Grid>
                        <Grid item xs={6} lg={6}>
                          <Box>
                            <Typography variant="h1">hello</Typography>
                          </Box>
                        </Grid>
                      </Box>
                    </Grid>

                    {/* <Typography>{params.id}</Typography> */}
                  </BodyMain>
                </Grid>
              </BodyContent>
            </Grid>
          </Body>
        </Grid>
      </BackgroundBody>
      {/* </Grid> */}
    </>
  );
};

export default Shop;
