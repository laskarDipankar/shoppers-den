import React, { useState } from "react";
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
import { Grid, Box, Typography, Button } from "@mui/material";
import Pending from "../Component/ADmin/Pending";
import Verified from "../Component/ADmin/Verified";

const Admin = () => {
  const [pending, setpending] = useState<boolean>(false);
  const handleCLick = () => {
    setpending(!pending);
  };
  return (
    <>
      <BackgroundBody
        sx={{
          paddingRight: "10px",
        }}
      >
        <Grid item xs={12}>
          <Layout
            display={{
              xs: "none",
            }}
          >
            <Grid>
              <SideBar></SideBar>
            </Grid>
          </Layout>
        </Grid>
        <Grid>
          <Body
            display={{
              xs: "block",
            }}
          >
            <Grid>
              <BodyContent>
                <BodyHeader>
                  <Navbar
                  // sx={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   border: "2px solid red",
                  //   width: "96vw",
                  // }}
                  >
                    <AppbarContainer></AppbarContainer>
                  </Navbar>
                </BodyHeader>
                <BodyMain>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      //   border: "2px solid red",
                      display: "Grid",
                      //   alignItems: "center",
                      justifyContent: "center",
                      gridTemplateRows: "10vh 1fr",
                    }}
                  >
                    <Box
                      sx={{
                        height: "10vh",
                        width: "80vw",
                        // border: "2px solid red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        onClick={() => {
                          setpending(true);
                        }}
                        variant="outlined"
                        sx={{
                          marginRight: "10px",
                        }}
                      >
                        "Pending"
                      </Button>
                      <Button
                        size="small"
                        onClick={() => {
                          setpending(false);
                        }}
                        variant="outlined"
                      >
                        Verified
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        height: "64vh",
                        width: "80vw",
                        // border: "2px solid red",
                      }}
                    >
                      {pending ? <Pending /> : <Verified />}
                    </Box>
                  </Box>
                </BodyMain>
              </BodyContent>
            </Grid>
          </Body>
        </Grid>
      </BackgroundBody>
    </>
  );
};

export default Admin;
