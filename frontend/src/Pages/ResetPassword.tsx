import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { api } from "../lib/Axios";
import { useParams, useNavigate } from "react-router";

const theme = createTheme();

export default function ResetPassword() {
  const [message, setMessage] = React.useState("password reset");

  const [user, setUser] = React.useState<any>({
    data: [],
    user: false,
  });
  const Params = useParams();

  console.log(Params.id);
  const naviagte = useNavigate();

  React.useEffect(() => {
    api
      .get(`/?_id=${Params.id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.length);

          setUser({
            data: res.data,
            user: true,
          });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (data.get("confirm_password") !== data.get("new_password")) {
      alert("Passwords do not match");
      return;
    }

    api
      .patch(
        "/reset",
        {
          new_password: data.get("new_password"),
        },
        {
          headers: { Authorization: `Bearer ${Params.token}` },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          naviagte("/");
          alert("password changed");
        }
      })

      .catch((res) => {
        console.log(res.response.data.error);

        // console.log(res.data.message);
        setMessage(res.response.data.message);

        // alert(res.data.error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {!user.user ? (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              you have an invalid link
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>

            <Typography component="h1" variant="h5">
              {message}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              /> */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="new_password"
                label="new_password"
                type="password"
                id="password1"
                //   autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm_password"
                label="confirm_password"
                type="password"
                id="password"
                //   autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                change password
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
