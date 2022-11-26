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
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

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
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));
  const type = "shop";

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
          {/* <Divider variant="middle" orientation="vertical" flexItem /> */}
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!userId ? (
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
                  <NavLink to={`/signup`}>SIgnup</NavLink>
                )}
              </NavLink>
            ) : userId.shop ? (
              <NavLink to={`/shop/${userId?.shop}`}>
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <StoreSharpIcon />
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
                </ListItemIcon>
              </NavLink>
            )}
          </ListItemButton>

          <Divider variant="middle" orientation="vertical" flexItem />

          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
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
                  marginTop: {
                    xs: "70vh",
                    sm: "70vh",
                    md: "1vh",
                    lg: "1vh",
                    xl: "1vh",
                  },

                  marginBottom: "2rem",
                }}
                // horizontal="bottom"
                id="basic-menu"
                // anchorEl={anchorEl}
                open={drawer}
                onClose={() => setType(false)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {!userId ? (
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
                ) : (
                  <MenuItem onClick={() => setType(false)}>
                    <NavLink to={`/profile/${userId.user}`}>Profile</NavLink>
                  </MenuItem>
                )}
                {/* <MenuItem onClick={() => setType(false)}>My account</MenuItem> */}
                {!userId ? (
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
                ) : (
                  <MenuItem
                    onClick={() => {
                      localStorage.removeItem("usertoken");
                      localStorage.removeItem("user");
                      window.location.href = "/";
                      {
                        setType(false);
                      }
                    }}
                  >
                    Logout
                  </MenuItem>
                )}
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
