import { Box, Grid, Typography } from "@mui/material";
import LOADING from "../../img/loADING.json";
import { BackgroundBody } from "../CurvedBody/BackgroundBody";
import Lottie from "lottie-react";

const VerificationLoader = () => {
  return (
    <div>
      {" "}
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
              <Lottie
                style={{
                  height: "150px",
                }}
                animationData={LOADING}
                loop={true}
              />
              <Typography>verifying.....</Typography>
            </Box>
          </BackgroundBody>
        </Grid>
      </Box>
    </div>
  );
};

export default VerificationLoader;
