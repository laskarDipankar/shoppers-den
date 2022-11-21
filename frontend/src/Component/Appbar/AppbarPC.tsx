import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { AppbarContainer, AppHeader, Mylist } from "../../Style/Appbar/index";
import SearchIcon from "@mui/icons-material/Search";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import Actions from "../Appbar/Action";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

const type = "shop";

interface Props {
  matches: boolean;
}

interface TYpe {
  type: String;
}

const navItem = [
  { name: "FEED", link: "/home" },

  { name: "REGISTER-SHOP", link: "/signup" },
  // { name: "CONTACT", link: "/" },
  // { name: "BLOG", link: "/" },
];

const AppbarPC = ({ matches }: Props) => {
  const location = useLocation();
  return (
    <>
      <AppbarContainer
        sx={
          {
            // justifyContent: "center",
            // gap: "0.5rem",
            // background: "yellow",
            // border: "1px solid red",
          }
        }
      >
        <AppHeader
          sx={
            {
              // marginRight: "auto",
            }
          }
        >
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
        {/* <Mylist type="row"> */}
        {/*
          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <StoreSharpIcon />
            </ListItemIcon>
          </ListItemButton> */}

        <Actions matches={matches} />
        {/* </Mylist> */}
      </AppbarContainer>
    </>
  );
};

export default AppbarPC;
