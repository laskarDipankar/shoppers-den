import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BackgroundBody = styled(Box)({
  minWidth: "60%",
  height: "94vh",
  bottom: "12px",
  borderRadius: "50px",
  marginTop: "30px",
  marginLeft: "30px",
  marginRight: "30px",
  display: "grid",
  gridTemplateColumns: "15% 1fr",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  zIndex: -1,
  // backgroundColor: "rgba(193, 159, 214,0.3)",
  // border: "2px solid blue",
  // bgcolor: "rgb(57, 73, 171)",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 30px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
});
