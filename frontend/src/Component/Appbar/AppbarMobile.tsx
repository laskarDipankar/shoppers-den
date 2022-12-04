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
import { useRecoilValue } from "recoil";
import { Owner } from "../../Recoil/Localstorage";
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

  const recoil = useRecoilValue(Owner);

  console.log(recoil, "mobile");
  return (
    <>
      <AppbarContainer
        width={{
          xs: "94%",
          borderRaduis: "10px",
          marginLeft: "auto",
          marginRight: "auto",
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
        {recoil.shopid ? (
          <>
            <NavLink state={type} to={`/shop/${recoil.shopid}`}>
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

        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};

export default AppbarMobile;
