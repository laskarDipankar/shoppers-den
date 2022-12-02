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
          <Box>
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
              {/* <Typography
                sx={{
                  color: "red",
                }}
                variant="h4"
              >
                {shopName.toUpperCase()}
              </Typography> */}

              <Typography variant="h4">
                {firstName.toUpperCase() + " " + lastName.toUpperCase()}

                <Typography
                  sx={{
                    color: "blue",
                    fontSize: "2.3rem",
                  }}
                  // variant="h5"
                >
                  Thank you for choosing us , your shop{" "}
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "2.3rem",
                    }}
                    component="span"
                    // variant="h5"
                  >
                    " {shopName.toUpperCase()} " {""}
                  </Typography>
                  is being Verified.{" "}
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
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default WaitVerify;
