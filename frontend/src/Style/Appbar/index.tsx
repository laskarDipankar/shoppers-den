import { Box, color, display, fontWeight } from "@mui/system";
import { styled } from "@mui/system";
import { List, Typography } from "@mui/material";
interface TYpe {
  type: String;
}

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "8px",
  justifyContent: "space-between",

  alignItems: "center",
  width: "96%",
  height: "8vh",
  padding: "2px 8px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "10px",

  borderBottom: "2px solid black",
  // boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
  boxShadow: " 2px 3px 5px 0px rgba(29, 28, 31,0.75)",
  transition: "all 0.5s ease-in-out",
  // background: " rgb(255,232,185)",
  background: " rgba(255,255,255,0.6)",
}));

export const AppHeader = styled(Typography)(() => ({
  padding: "4px",
  // flexGrow: 1,
  frontSize: "8em",
  fontWeight: "bolder",
  color: "black",
  fontFamily: ["Bebas Neue", "cursive"],
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
  marginTop: "10px",
  display: "flex",
  position: "fixed",
  // position: "absolute",
  backgroundColor: " rgba(255, 255, 255, 0.45)",
  boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",

  backdropFilter: " blur(5px)",

  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",

  zIndex: 99,
}));
