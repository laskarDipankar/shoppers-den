import {
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsMobile,
  Mylist,
} from "../../Style/Appbar/index";
import Person from "@mui/icons-material/Person2Outlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import LogoutIcon from "@mui/icons-material/Logout";
// import Signupicon from "@mui/icons-material/Signup";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { api } from "../../lib/Axios";
import { Owner } from "../../Recoil/Localstorage";

interface Props {
  matches: boolean;
}
interface TYpe {
  type: string;
}

const getUserFromLocalStorage = (key: "user") => {
  try {
    const user = localStorage.getItem(key);
    if (user) return JSON.parse(user);
    return null;
  } catch (e) {
    return null;
  }
};

const Actions = ({ matches }: Props) => {
  const Components = matches ? ActionIconsMobile : ActionIconsContainerDesktop;
  const [drawer, setType] = useState<boolean>(false);
  const [userId, setUserId] = useState<any>(() =>
    getUserFromLocalStorage("user")
  );
  const type = "shop";
  const [shopId, setShopId] = useState<any>();

  // console.log(userId.user);

  const [user, setUser] = useRecoilState(Owner);

  // console.log("recoils", user);
  console.log("locstor", userId);

  const GetUser = () => {
    useEffect(() => {
      api.get(`/user/${userId.user}`).then((res) => {
        console.log("user", res.data.data);
        console.log(res);
        setUser((prev) => ({
          shopid: res.data.data.shop,
          userid: res.data.data._id,
        }));

        setShopId(res.data[0]);
      });
    }, []);
  };
  if (userId) {
    GetUser();
  }

  const location = useLocation();
  return (
    <>
      <Components>
        <Mylist
          type="row"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            justiyfContent: "center",
            // paddingLeft: "24px",
          }}
        >
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {!user.shopid ? (
              <>
                {location.pathname === "/admin" ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",

                      width: {
                        xs: "23rem",
                        sm: "35rem",
                        md: "20rem",
                        lg: "20rem",
                        xl: "20rem",
                      },
                    }}
                  >
                    <NavLink
                      to="/admin"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ListItemIcon>
                        <Button>
                          <AdminPanelSettingsIcon />
                          DashBoard
                        </Button>
                      </ListItemIcon>
                    </NavLink>
                    <NavLink
                      to="/admin"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ListItemIcon>
                        <Button
                          onClick={() => {
                            localStorage.removeItem("admintoken");
                            // localStorage.removeItem("user");
                            window.location.href = "/admin";
                          }}
                        >
                          <LogoutIcon />
                          Logout
                        </Button>
                      </ListItemIcon>
                    </NavLink>
                  </Box>
                ) : (
                  <>
                    {!userId ? (
                      <>
                        <NavLink to={`/signup`}>
                          <ListItemIcon
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button>Register yourself</Button>
                            {/* <AddBusinessSharpIcon /> */}
                          </ListItemIcon>
                        </NavLink>
                        <Divider
                          variant="middle"
                          orientation="vertical"
                          flexItem
                        />
                        {/* <ListItemIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          <Button
                            sx={{
                              textDecorations: "none",
                            }}
                            onClick={() => {
                              localStorage.removeItem("usertoken");
                              localStorage.removeItem("user");
                              setUser((prev) => ({
                                shopid: "",
                                userid: "",
                              }));

                              window.location.href = "/";
                            }}
                          >
                            <LogoutIcon />
                            Logout
                          </Button>
                        </ListItemIcon> */}
                      </>
                    ) : (
                      <>
                        <NavLink state={type} to={`/signup`}>
                          <ListItemIcon
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <AddBusinessSharpIcon />
                            <Button>Register your shop</Button>
                            {/* <AddBusinessSharpIcon /> */}
                          </ListItemIcon>
                        </NavLink>
                        <Divider
                          variant="middle"
                          orientation="vertical"
                          flexItem
                        />
                        <ListItemIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          <Button
                            sx={{
                              textDecorations: "none",
                            }}
                            onClick={() => {
                              localStorage.removeItem("usertoken");
                              localStorage.removeItem("user");
                              setUser((prev) => ({
                                shopid: "",
                                userid: "",
                              }));

                              window.location.href = "/";
                            }}
                          >
                            <LogoutIcon />
                            Logoutt
                          </Button>
                        </ListItemIcon>
                      </>
                    )}
                  </>
                )}
              </>
            ) : !user.shopid ? (
              !user.userid ? (
                <NavLink to={`/signup`}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: {
                        xs: "45rem",
                        sm: "45rem",
                        md: "45rem",
                        lg: "20rem",
                        xl: "20rem",
                      },
                    }}
                  >
                    <Button>
                      {/* <Signupicon />. */}
                      signup
                    </Button>
                    <AddBusinessSharpIcon />
                  </ListItemIcon>
                </NavLink>
              ) : (
                <NavLink state={type} to={`/signup`}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <AddBusinessSharpIcon />
                    <Button>Register your shop</Button>
                  </ListItemIcon>
                </NavLink>
              )
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",

                  width: {
                    xs: "23rem",
                    sm: "35rem",
                    md: "20rem",
                    lg: "20rem",
                    xl: "20rem",
                  },
                  // border: "5px solid black",
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/shop/${user.shopid}`}
                >
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Button
                      sx={{
                        textDecorations: "none",
                      }}
                    >
                      To your shop
                      <StoreSharpIcon />
                    </Button>
                  </ListItemIcon>
                </NavLink>
                <Divider variant="middle" orientation="vertical" flexItem />
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <Button
                    sx={{
                      textDecorations: "none",
                    }}
                    onClick={() => {
                      localStorage.removeItem("usertoken");
                      localStorage.removeItem("user");
                      setUser((prev) => ({
                        shopid: "",
                        userid: "",
                      }));

                      window.location.href = "/";
                    }}
                  >
                    <LogoutIcon />
                    Logout
                  </Button>
                </ListItemIcon>
              </Box>
            )}
          </ListItemButton>

          <Divider variant="middle" orientation="vertical" flexItem />

          {/* <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <ListItemIcon
              sx={{
                display: {
                  xl: "none",
                  lg: "none",
                  md: "none",
                  xs: "none",
                },
                justifyContent: "center",
              }}
            >
              <Person onClick={() => setType(!drawer)} />
              <Menu
                sx={{
                  marginLeft: {
                    xs: "65%",
                    md: "86%",
                    lg: "90%",
                    xl: "92%",
                  },

                  positon: "absolute",
                }}
                id="basic-menu"
                open={drawer}
                onClose={() => setType(false)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {!userId ? (
                  <>
                    <MenuItem>
                      <NavLink
                        to="/admin"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        dashBoard
                      </NavLink>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem("admintoken");
                        // localStorage.removeItem("user");
                        window.location.href = "/admin";
                        {
                          setType(false);
                        }
                      }}
                    >
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem
                    sx={{
                      // marginBottom: "84vh",
                      height: "4vh",
                      backgroundColor: "transparent",
                      // borderBottom: "1px solid black",
                      // position: "absolute",
                      // bottom: "100%",
                      // left: "0",
                    }}
                    onClick={() => {
                      localStorage.removeItem("usertoken");
                      localStorage.removeItem("user");
                      setUser((prev) => ({
                        shopid: "",
                        userid: "",
                      }));

                      window.location.href = "/";
                      {
                        setType(false);
                      }
                    }}
                  >
                    Logout
                  </MenuItem>
                )}
                {/* <MenuItem onClick={() => setType(false)}>My account</MenuItem> */}
          {/* </Menu>
            </ListItemIcon>
          </ListItemButton>
           */}

          {/* <Divider variant="middle" orientation="vertical" flexItem /> */}
        </Mylist>
      </Components>
    </>
  );
};

export default Actions;

// <MenuItem onClick={() => setType(false)}>
//   <NavLink to={`/profile/${userId.user}`}>Profile</NavLink>
// </MenuItem>
