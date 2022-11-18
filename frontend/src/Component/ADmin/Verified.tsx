import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { shops } from "../../Data/Dummy/DUmmyjson";

const Verified = () => {
  const [verified, setverified] = useState<any>();
  let arr: any[] = [];

  //   var Varray = [];
  // useEffect(() => {
  //   shops.shops.filter((shop) => {
  //     if (shop.verfied == true) {
  //       pushData(shop);
  //     }
  //   });
  // }, []);

  // function removeDuplicates(data: any) {
  //   return data.filter((item: any, index: any) => arr.indexOf(item) === index);
  // }

  // const pushData = (data: any) => {
  //   arr.push(data);
  //   // console.log(arr);
  //   setverified(removeDuplicates(arr));
  // };

  // console.log(verified, "verified");
  return (
    <>
      <Box>
        {shops.shops
          // .splice(0, 2)
          .filter((item) => {
            if (item.online) {
              return item;
            }
          })

          .map((item) => {
            return (
              <>
                <Box>
                  <h1>{item.online}</h1>
                  <h1>{item.shopName}</h1>
                </Box>
              </>
            );
          })}
      </Box>
    </>
  );
};

export default Verified;
