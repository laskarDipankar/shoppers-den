import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Box } from "@mui/material";
import { Value } from "../../Model/Model";

interface initialValues {
  email: string;
  password: string;
}

// type Value = {
//   email: string;
//   password: string;
// };

interface Props {
  edit: boolean;
  //   setedit: React.Dispatch<React.SetStateAction<boolean>>;
  value: {};
  setvalues: React.Dispatch<React.SetStateAction<Value>>;
  name: string;
  type: string;
  label: string;
}

const TextFIeldCO: React.FC<Props> = ({
  edit,
  setvalues,
  value,
  name,
  type,
  label,
}) => {
  const initialValues: initialValues = { email: "", password: "" };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
    // name: string
  ) => {
    setvalues((value) => ({ ...value, [name]: e.target.value }));
  };

  console.log(type);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{
            maxWidth: 300,
            border: "2px solid white",
            margin: "2%",
            color: "white",
            // color: "wheat",

            // marginTop: "4%",
          }}
          // disabled={!edit}
          onChange={handleChange}
          // name={name}
          // value=
          type={type}
          label={label}
        />
      </Box>
    </>
  );
};
export default TextFIeldCO;
