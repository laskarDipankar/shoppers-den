import React from "react";
import { TextField, Box } from "@mui/material";
import { SignupProp, UserSignup } from "../../Model/Model";

interface Props {
  name: string;
  type: string;
  label: string;
  value: {};
  size: string;
  user: string;
  // variant: {};
  setsingupdata: React.Dispatch<React.SetStateAction<SignupProp>>;
  setuserSignup: React.Dispatch<React.SetStateAction<UserSignup>>;
}

const TextFieldSIgnupCo: React.FC<Props> = ({
  name,
  type,
  label,
  value,
  size,
  setsingupdata,
  setuserSignup,
  user,
}) => {
  // console.log(user);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (user === "user") {
      setuserSignup((userSignup) => ({
        ...userSignup,
        [name]: e.target.value,
      }));
      console.log({ [name]: e.target.value });
    } else {
      setsingupdata((signupData) => ({
        ...signupData,
        [name]: e.target.value,
      }));
    }
  };

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
          width: 340,
        }}
        name={name}
        type={type}
        label={label}
        value={value}
        size="small"
        onChange={handleChange}
      />
    </Box>
  );
};

export default TextFieldSIgnupCo;
