import { Box } from "@mui/system";
import styled from "@emotion/styled";

export const Layout = styled(Box)({
  minWidth: "10vw",
  height: "90vh",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  //   border: "2px solid red",
  bgcolor: "rgba(178, 237, 215 ,0.2)",
});

export const SideBar = styled(Box)({
  height: "90vh",
  width: "10vw",
  borderRadius: "5%",
  // backgroundColor: "rgba(193, 209, 214,0.3)",
  marginRight: "0",
  marginBottom: "20px",
  border: "2px solid rgba(193, 209, 214,0.3)",
  // bgcolor: "transparent",
  backDropFilter: "blur(10px)",
  marginLeft: "20px",
});

export const Body = styled(Box)({
  minWidth: "78vw",
  height: "90vh",
  //   border: "2px solid red",
  marginRight: "35px",
});

export const BodyContent = styled(Box)({
  display: "grid",
  gridTemplateRows: "18% 1fr",
});

export const BodyHeader = styled(Box)({
  // border: "2px solid grey",
  height: "15vh",
  width: "96vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Navbar = styled(Box)({
  height: "10vh",
  width: "80vw",
  // border: "2px solid purple",
});

export const BodyMain = styled(Box)({
  // border: "2px solid grey",
  height: "73.4vh",
});

export const ActionIconsMobile = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  // top:'100%',

  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  // borderTop: "1px solid yellow",
  // border: "2px solid red",
}));

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  // marginTop: 4,
  marginBottom: 32,
  // justifyContent: "center",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  justifyContent: "space-around",
  alignItems: "center",
  height: "10vh",
  width: "100%",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",

  // padding : '2px 8px'
  backgroundColor: "rgba(233, 198, 20,0.8)",
}));
