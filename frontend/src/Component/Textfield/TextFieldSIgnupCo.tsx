import React from "react";
import { TextField, Box } from "@mui/material";
import { SignupProp } from "../../Model/Model";

interface Props {
  name: string;
  type: string;
  label: string;
  value: {};
  size: string;
  // variant: {};
  setsingupdata: React.Dispatch<React.SetStateAction<SignupProp>>;
}

const TextFieldSIgnupCo: React.FC<Props> = ({
  name,
  type,
  label,
  value,
  size,
  // variant,
  setsingupdata,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // flexDirection: "column",
        // justifyContent: "center",
      }}
    >
      <TextField
        // variant={variant}
        sx={{
          width: 400,
        }}
        name={name}
        type={type}
        label={label}
        value={value}
        size="medium"
        onChange={(e) =>
          setsingupdata((value) => ({ ...value, [name]: e.target.value }))
        }
      />
    </Box>
  );
};

export default TextFieldSIgnupCo;
