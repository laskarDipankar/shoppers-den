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
import {
  ActionIconsMobile,
  AppbarContainer,
  AppHeader,
} from "../../Style/Appbar/index";
import Actions from "../Appbar/Action";

interface Props {
  matches: boolean;
}

const array = ["HOME", "PRODUCT", "CONTACT", "BLOG"];

const AppbarMobile = ({ matches }: Props) => {
  const [val, setopen] = useState(false);
  console.log(val);
  return (
    <>
      <AppbarContainer
        width={{
          xs: "100%",
        }}
        overflow="show"
      >
        <List
          sx={{
            // background: "yellow",
            width: "3rem",
          }}
        >
          <ListItem
            sx={{
              width: "5.4rem",
              //   background: "red",
              zIndex: 1,
            }}
            divider
          >
            <ListItemButton
              sx={{
                width: "20px",
                // background: "green",
              }}
              onClick={() => setopen(true)}
            >
              <ListItemIcon
                sx={{
                  width: "20px",
                  //   background: "blue",
                }}
                onClick={() => setopen(false)}
              >
                {<MenuIcon />}
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </ListItem>

          <Collapse in={val}>
            <List
              sx={{
                bgcolor: "grey",
                width: "300px",
              }}
            >
              {array.map((listELe, index) => (
                <ListItem
                  sx={{
                    width: "50px",
                    height: "20px",
                  }}
                  divider
                  key={index}
                >
                  <ListItemButton onClick={() => setopen(false)}>
                    <ListItemText primary={listELe} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        <AppHeader textAlign="center">SHOPPERS-DEN</AppHeader>
        <IconButton>
          <Person
            sx={{
              marginRight: "2rem",
            }}
          />
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
};

export default AppbarMobile;