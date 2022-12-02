import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { AppbarContainer, AppHeader, Mylist } from "../../Style/Appbar/index";
import SearchIcon from "@mui/icons-material/Search";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import Actions from "../Appbar/Action";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { WindowTwoTone } from "@mui/icons-material";

const type = "shop";

interface Props {
  matches: boolean;
}

interface TYpe {
  type: String;
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

const navItem = [
  { name: "FEED", link: "/home" },

  { name: "REGISTER-SHOP", link: "/signup" },
  // { name: "CONTACT", link: "/" },
  // { name: "BLOG", link: "/" },
];

const AppbarPC = ({ matches }: Props) => {
  const [userId, setUserId] = useState(() => getUserFromLocalStorage("user"));
  const location = useLocation();

  // if(MouseEvent("click"){
  //   console.log("clicked")
  // }

  return (
    <>
      <AppbarContainer>
        <AppHeader
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <img className="logo" src={logo} alt="BigCo Inc. logo" /> */}
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.1rem",
              marginRight: "10px",
            }}
            to="/"
          >
            SHOPPERS-DEN
          </NavLink>
        </AppHeader>

        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};

export default AppbarPC;
