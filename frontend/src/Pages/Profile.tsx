import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { useParams } from "react-router";
import { api } from "../lib/Axios";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [shop, setshop] = useState<any>();
  const user = JSON.parse(localStorage.getItem("user") || "");

  console.log(user.shop);

  useEffect(() => {
    api
      .get(`/shop/${user.shop}`)
      .then((res: any) => {
        console.log(res.data.data);
        setshop(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingRigth: "5%",
        }}
        position="fixed"
      >
        <Grid item xs={12}>
          <BackgroundBody
            sx={{
              marginRigth: "5rem",
            }}
          >
            <Box
              sx={{
                height: "80vh",
                width: "80vw",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",

                gap: "3rem",
              }}
            >
              <Typography variant="h4">
                {" "}
                {shop?.userID?.firstName + " " + shop?.userID?.lastName}
              </Typography>

              <Typography variant="h6">
                <Typography variant="subtitle2">{shop.shopName}</Typography>
              </Typography>
              <Typography>verifying.....</Typography>
            </Box>
          </BackgroundBody>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
