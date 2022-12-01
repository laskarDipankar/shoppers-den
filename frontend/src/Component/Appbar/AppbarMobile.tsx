import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Person from "@mui/icons-material/Person2Outlined";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import {
  ActionIconsMobile,
  AppbarContainer,
  AppHeader,
} from "../../Style/Appbar/index";
import Actions from "../Appbar/Action";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

interface Props {
  matches: boolean;
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

const array = ["SETTINGS", "FEEDBACKS", "CONTACT", "CREATEDBY"];

const AppbarMobile = ({ matches }: Props) => {
  const type = "shop";
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));
  const [val, setopen] = useState(false);
  console.log(val);
  return (
    <>
      <AppbarContainer
        width={{
          xs: "100%",
        }}
        borderRadius={{
          xs: "0px",
        }}
        // overflow="show"
      >
        <AppHeader
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            SHOPPERS-DEN
          </NavLink>
        </AppHeader>
        {userId.shop ? (
          <>
            <NavLink state={type} to={`/shop/${userId.shop}`}>
              <IconButton>
                <StoreSharpIcon
                  sx={{
                    marginRight: "2rem",
                  }}
                />
              </IconButton>
            </NavLink>
          </>
        ) : (
          <NavLink state={type} to="/signup">
            <IconButton>
              <AddBusinessSharpIcon
                sx={{
                  marginRight: "2rem",
                }}
              />
            </IconButton>
          </NavLink>
        )}

        <Actions
          // className="glass"

          matches={matches}
        />
      </AppbarContainer>
    </>
  );
};

export default AppbarMobile;
