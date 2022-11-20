import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";
import { BackgroundBody } from "../Component/CurvedBody/BackgroundBody";
import { Box, Button, TextField } from "@mui/material";
import { api } from "../lib/Axios";
import { useNavigate } from "react-router";
import { unhover } from "@testing-library/user-event/dist/hover";

const AdminLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      api.post("/admin/login", values).then((res) => {
        try {
          console.log(res.data);
          if (res.status === 200) {
            if (res.data.token) {
              localStorage.setItem(
                "admintoken",
                JSON.stringify({
                  token: res.data.token,
                  adminlogin: true,
                })
              );
              window.location.reload();
              navigate("/admin");
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
      //   alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required"),
      password: Yup.string()
        .min(8, "minimumf 8 characters is required")
        .required("password is required"),
    }),
  });

  return (
    <>
      <BackgroundBody>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // border: "2px solid red",
                gap: "20px",
                height: "92vh",
                width: "94vw",
              }}
            >
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button type="submit">Submit</Button>
            </Box>
          </Form>
        </FormikProvider>
      </BackgroundBody>
    </>
  );
};

export default AdminLogin;
