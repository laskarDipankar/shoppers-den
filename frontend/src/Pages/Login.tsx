import React from "react";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import TextFIeldCO from "../Component/Textfield/TextFIeldCO";
import { Button, Box, Grid, InputLabel } from "@mui/material";
import { useState } from "react";
import bg4 from "../img/bg4.jpg";
import bg3 from "../img/bg3.json";
import Lottie from "lottie-react";
import { Value } from "../Model/Model";
interface MyFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [edit, setedit] = useState<boolean>(false);
  const [value, setvalues] = useState<Value>({
    email: "",
    password: "",
  });

  const initialValues: MyFormValues = { email: "", password: "" };

  console.log(value);
  return (
    <>
      {/* <Box
        
      > */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "darken",
          textAlign: "center",
          paddingLeft: "40px",
          paddingRight: "40px",
          backdropFilter: "blur(10px)",
          // opacity: 0.5,
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              // bgcolor: "primary.main",
            }}
          >
            <Box
              sx={{
                // margin: "auto",
                minWidth: "30%",
                minHeight: 400,
                // bgcolor: "lightgreen",
                // backgroundColor: "rgba(32,32,32,0.2)",
                backdropFilter: "blur(23px)",
                display: "flex",
                justifyContent: "center",
                zIndex: 1,
                borderRadius: "5%",
                backgroundColor: "rgba(173,216,230,0.3)",
                boxShadow: "4px 2px 25px #202020",
                "&:hover": {
                  // boxShadow: "4px 2px 25px #202020",
                  backgroundColor: "rgba(173,216,230,0.7)",
                },
                // marginTop: "%",
              }}
            >
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log(values, actions);
                }}
              >
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "25%",
                      // backgroundColor: "red",
                      // padding: "5%",
                      // width: "25%",
                    }}
                  >
                    <TextFIeldCO
                      edit={edit}
                      value={value.email}
                      setvalues={setvalues}
                      type="email"
                      name="email"
                      label="email"
                    />

                    <TextFIeldCO
                      edit={edit}
                      value={value.password}
                      setvalues={setvalues}
                      name="password"
                      type="password"
                      label="password"
                    />
                    <Button type="submit">Login</Button>
                    <Lottie
                      style={{
                        height: "100px",
                      }}
                      animationData={bg3}
                      loop={true}
                    />
                  </Box>
                </Form>
              </Formik>
              {/* <Button onClick={() => setedit(!edit)}>EDIT</Button> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

//
