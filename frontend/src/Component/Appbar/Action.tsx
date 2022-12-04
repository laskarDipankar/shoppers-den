import {
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
              justifyContent: "center",
            }}
          >
            {!user.shopid ? (
              <NavLink
                to="/admin"
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {location.pathname === "/admin" ? (
                  <ListItemIcon>
                    <AdminPanelSettingsIcon />
                    <Button>DashBoard</Button>
                  </ListItemIcon>
                ) : (
                  <NavLink state={type} to={`/signup`}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button>Register your shop</Button>
                      <AddBusinessSharpIcon />
                    </ListItemIcon>
                  </NavLink>
                )}
              </NavLink>
            ) : !user.shopid ? (
              <NavLink state={type} to={`/signup`}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button>Register your shop</Button>
                  <AddBusinessSharpIcon />
                </ListItemIcon>
              </NavLink>
            ) : (
              <NavLink to={`/shop/${user.shopid}`}>
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
            )}
          </ListItemButton>

          <Divider variant="middle" orientation="vertical" flexItem />

          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
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
                      marginBottom: "84vh",
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
              </Menu>
            </ListItemIcon>
          </ListItemButton>
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
