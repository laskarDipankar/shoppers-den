import { Box, Grid, Typography } from "@mui/material";
import { BackgroundBody } from "../CurvedBody/BackgroundBody";
import Lottie from "lottie-react";
import high from "../../img/high.json";

interface Props {
  firstName: string;
  lastName: string;
  shopName: string;
}

const WaitVerify = ({ firstName, lastName, shopName }: Props) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10px",
          width: "100%",
        }}
        position="fixed"
      >
        <Grid item xs={12}>
          <BackgroundBody>
            <Box
              sx={{
                height: "80vh",
                width: "60vw",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",

                gap: "3rem",
              }}
            >
              <Typography
                sx={{
                  color: "red",
                }}
                variant="h4"
              >
                {shopName.toUpperCase()}
              </Typography>

              <Typography variant="h6">
                {firstName + " " + lastName}

                <Typography
                  sx={{
                    color: "blue",
                  }}
                  variant="subtitle2"
                >
                  Thank you for choosing us , your shop is being Verified.
                </Typography>
              </Typography>

              <Lottie
                style={{
                  height: "250px",
                }}
                animationData={high}
                loop={true}
              />
            </Box>
          </BackgroundBody>
        </Grid>
      </Box>
    </div>
  );
};

export default WaitVerify;
