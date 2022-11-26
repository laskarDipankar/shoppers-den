import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BackgroundBody = styled(Box)({
  // minWidth: "60%",
  width: "100%",
  height: "84vh",
  margin: "0 auto",
  bottom: "12px",
  borderRadius: "50px",
  marginTop: "30px",
  marginLeft: "10px",
  // marginRight: "30px",
  display: "grid",
  gridTemplateColumns: "15% 1fr",
  // justifyContent: "center",
  // alignItems: "center",
  textAlign: "center",
  zIndex: -1,
  backgroundColor: " rgba(255, 255, 255, 0.45)",
  // border: "2px solid blue",
  // bgcolor: "rgb(255, 255, 255)",
  border: "6px solid rgb(255,232,185)",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 30px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
});
