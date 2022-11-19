import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerDesktop,
  ActionIconsMobile,
  Mylist,
} from "../../Style/Appbar/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person from "@mui/icons-material/Person2Outlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  matches: boolean;
}
interface TYpe {
  type: string;
}

const Actions = ({ matches }: Props) => {
  const Components = matches ? ActionIconsMobile : ActionIconsContainerDesktop;

  return (
    <>
      <Components>
        <Mylist
          type="row"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            justiyfContent: "center",
            paddingLeft: "24px",
          }}
        >
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
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>

          {/* <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{
              color: "red",
            }}
          />
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
              <Person />
            </ListItemIcon>
          </ListItemButton> */}

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
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider variant="middle" orientation="vertical" flexItem />
        </Mylist>
      </Components>
    </>
  );
};

export default Actions;
