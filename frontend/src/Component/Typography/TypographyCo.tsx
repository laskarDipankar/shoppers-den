import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TypographyCo = styled(Typography)({
  color: "black",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textAlign: "center",
  marginLeft: "5px",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
  hover: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
  // ":&:hover": "rgba(, 17, 26, 0.1) 0px 0px 26px",
});
export const TypographyDetail = styled(Typography)({
  color: "#4c4c4c",
  fontWeight: "bold",
  fontFamily: "Roboto",
  textAlign: "center",
  marginLeft: "5px",
});

export const TypoLogo = styled(Typography)({
  color: "#A33213",
  fontWeight: "bold",
  minFontSize: "40px",
  fontFamily: "Roboto",
  textAlign: "start",
  // marginLeft: "5px",
});

export const TypoShopDetail = styled(Typography)({
  color: "#4c4c4c",
  // fontWeight: "bold",
  fontFamily: "Roboto",
  textAlign: "center",
  marginLeft: "5px",
  fontSize: "1.2em",
});
