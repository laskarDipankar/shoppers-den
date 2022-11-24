import {
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
import { NavLink } from "react-router-dom";

interface Props {
  matches: boolean;
}
interface TYpe {
  type: string;
}

const Actions = ({ matches }: Props) => {
  const Components = matches ? ActionIconsMobile : ActionIconsContainerDesktop;
  const [drawer, setType] = useState<boolean>(false);

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
              <Person onClick={() => setType(!drawer)} />
              <Menu
                sx={{
                  marginLeft: "32%",
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
                <MenuItem onClick={() => setType(false)}>
                  <NavLink to="/profile">Profile</NavLink>
                </MenuItem>
                <MenuItem onClick={() => setType(false)}>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    setType(false);
                  }}
                >
                  Logout
                </MenuItem>
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
