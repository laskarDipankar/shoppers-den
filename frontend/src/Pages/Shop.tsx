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
  AppbarContainer,
} from "../Component/Layout/Layout";
import { shops } from "../Data/Dummy/DUmmyjson";
import { useParams } from "react-router";
import { TypoShopDetail, TypoLogo } from "../Component/Typography/TypographyCo";
import { NavLink } from "react-router-dom";
import { DetailBOx } from "../Component/ShopBody/ShopBody";
import ShopForm from "../Component/Shop/ShopForm";

const Shop = () => {
  const params = useParams();
  const [state, setstate] = useState<string>();
  const [shop, setShop] = useState<any>();
  useEffect(() => {
    shops.shops.map((Shop) => {
      if (String(Shop.id) == params.id) {
        setstate(Shop.shopName);
        setShop(Shop);
      } else {
        return null;
      }
    });
  }, []);
  console.log(state);
  console.log(params.id);

  return (
    <>
      {/* <Grid container xs={12}> */}
      <BackgroundBody>
        {/* <>Params : {params.id}</> */}
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
                    {/* <Navbar> */}
                    <AppbarContainer>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <TypoLogo
                          sx={{
                            marginLeft: "35px",
                          }}
                          variant="h6"
                        >
                          SHOPPERS-DEN
                        </TypoLogo>
                        <TypoShopDetail
                          sx={{
                            minWidth: "150px",
                          }}
                        >
                          {state?.toUpperCase()}
                        </TypoShopDetail>
                        <Typography
                          sx={{
                            marginRight: "15px",
                          }}
                        >
                          <NavLink to="/feed">Feed</NavLink>
                        </Typography>
                      </Box>
                    </AppbarContainer>
                    {/* </Navbar> */}
                  </BodyHeader>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <BodyMain>
                    <ShopForm shops={shop} />
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
