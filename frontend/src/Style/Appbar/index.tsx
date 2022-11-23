import { Box, color, display, fontWeight } from "@mui/system";
import { styled } from "@mui/system";
import { List, Typography } from "@mui/material";
interface TYpe {
  type: String;
}

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "8px",
  // justifyContent: "center",
  // background: "white",

  justifyContent: "space-between",
  alignItems: "center",
  width: "96%",
  height: "8vh",
  padding: "2px 8px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "10px",
  // borderBottom: "2px solid black",
  boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
  backgroundColor: " rgba(255, 255, 255, 0.45)",
  // backdropFilter: " blur(15px)",
  // boxShadow:
  //   " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  // borderLeft: "2px solid black",
  // borderRight: "2px solid black",
}));

export const AppHeader = styled(Typography)(() => ({
  padding: "4px",
  // flexGrow: 1,
  frontSize: "6em",
  fontWeight: "bolder",
  color: "black",
}));

export const Mylist = styled(List)(({ type }: TYpe) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionIconsMobile = styled(Box)(() => ({
  marginTop: "4px",
  display: "flex",
  position: "fixed",
  // top:'100%',

  // background: "#0D4C92",
  backgroundColor: " rgba(255, 255, 255, 0.45)",
  boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
  backdropFilter: " blur(px)",

  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
}));
