import React from "react";
import { Box, Button } from "@mui/material";
import { shops } from "../../Data/Dummy/DUmmyjson";

const Pending = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {shops.shops
        .splice(0, 1)
        .filter((item) => {
          if (!item.online) {
            return item;
          }
        })
        .map((item) => {
          return (
            <>
              <Box>
                <h1>{item.online}</h1>
                <h1>{item.shopName}</h1>
                <Button size="small"> verify </Button>
              </Box>
            </>
          );
        })}
    </Box>
  );
};

export default Pending;
