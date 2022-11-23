import { TextField, Box } from "@mui/material";
import { getValue } from "@mui/system";
import { useState } from "react";

interface formData {
  value: string;
  onChange: any;
  name: string;
  helperText: any;
  error: any;
  label: string;
  type: string;
}

const TextFieldShopForm = ({
  value,
  onChange,
  name,
  helperText,
  error,
  label,
  type,
}: formData) => {
  return (
    <>
      <TextField
        sx={{
          width: {
            lg: "600px",
            xs: "300px",
          },
        }}
        // label="Shop Name"
        value={value}
        onChange={onChange}
        name={name}
        helperText={helperText}
        error={error}
        label={label}
        type={type}
      />
    </>
  );
};

export default TextFieldShopForm;
