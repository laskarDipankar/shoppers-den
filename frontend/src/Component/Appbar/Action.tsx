import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  ActionIconsContainerDesktop,
  ActionIconsMobile,
  Mylist,
} from "../../Style/Appbar/index";
import Person from "@mui/icons-material/Person2Outlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";

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
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StoreSharpIcon />
            </ListItemIcon>
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
              <Person />
            </ListItemIcon>
          </ListItemButton>
          {/* <Divider variant="middle" orientation="vertical" flexItem /> */}
        </Mylist>
      </Components>
    </>
  );
};

export default Actions;
