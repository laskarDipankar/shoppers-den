import React from "react";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import TextFIeldCO from "../Component/Textfield/TextFIeldCO";
import { Button, Box, Grid, InputLabel } from "@mui/material";
import { useState } from "react";
import bg4 from "../img/bg4.jpg";
import bg3 from "../img/bg3.json";
import Lottie from "lottie-react";
import { Value } from "../Model/Model";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import rocket from "../img/rocket.json";

interface MyFormValues {
  email: string;
  password: string;
}

const Login = ({ email, password }: MyFormValues) => {
  const [edit, setedit] = useState<boolean>(false);
  const [valueL, setvaluesL] = useState<MyFormValues>({
    email: "",
    password: "",
  });

  // const initialValues: MyFormValues = { email: "", password: "" };

  console.log(valueL);
  return (
    <>
      {/* <Box
        
      > */}
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          sx={{
            marginRight: "100px",
          }}
          position="fixed"
        >
          <BackgroundBody
            sx={{
              textAlign: "center",
              border: "2px solid blue",
            }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  height: "94vh",
                  width: "97vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Grid item xs={12}> */}
                <Box
                  sx={{
                    // margin: "auto",
                    minWidth: "30%",
                    minHeight: 400,
                    border: "2px solid grey",
                    backdropFilter: "blur(23px)",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginRight: "48px",
                    // zIndex: 1,
                    borderRadius: "5%",
                  }}
                >
                  {" "}
                  <Lottie
                    style={{
                      height: "150px",
                      marginBottom: "auto",
                    }}
                    animationData={rocket}
                    loop={true}
                  />
                  <Formik
                    initialValues={valueL}
                    onSubmit={(valueL, resetForm) => {
                      console.log(valueL, resetForm);
                    }}
                  >
                    <Form>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",

                          marginBottom: "25%",
                        }}
                      >
                        <TextFIeldCO
                          edit={edit}
                          value={valueL.email}
                          setvaluesL={setvaluesL}
                          type="email"
                          name="email"
                          label="email"
                        />

                        <TextFIeldCO
                          edit={edit}
                          value={valueL.password}
                          setvaluesL={setvaluesL}
                          name="password"
                          type="password"
                          label="password"
                        />
                        <Box>
                          <Button
                            variant="contained"
                            size="small"
                            type="submit"
                          >
                            Login
                          </Button>
                        </Box>
                      </Box>
                    </Form>
                  </Formik>
                  {/* <Button onClick={() => setedit(!edit)}>EDIT</Button> */}
                </Box>
                {/* </Grid> */}
              </Box>
            </Grid>
          </BackgroundBody>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

//
