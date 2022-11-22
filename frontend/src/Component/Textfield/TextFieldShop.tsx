import React from "react";
import { TextField, Box } from "@mui/material";

interface Props {
  size: any;
  name: string;
  type: string;
  value: string;
  setShopInfo: React.Dispatch<any>;
  //   shopInfo: any;

  // shape:{}
}

const TextFieldShop = ({
  size,
  name,
  type,
  value,
  setShopInfo,
}: //   shopInfo,
// shape,
Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopInfo((value: any) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <TextField
        name={name}
        size={size}
        type={type}
        value={value}
        onChange={handleChange}

        // sx={shape}
      ></TextField>
    </>
  );
};

export default TextFieldShop;
