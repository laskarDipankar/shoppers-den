import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { api } from "../../lib/Axios";
import { BackgroundBody } from "../CurvedBody/BackgroundBody";
import { Card, CardMedia, Grid } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  id: string;
  setOpen: any;
  type: string;
  handleOpen: any;
  handleClose: any;
}

export default function BasicModal({
  open,
  id,
  setOpen,
  handleClose,
  handleOpen,
  type,
}: Props) {
  const [shop, setShop] = React.useState<any>([]);

  // const handleOpen = () => setOpen(true);

  // console.log(type);

  useEffect(() => {
    api
      .get(
        `/shop/${id}?${type === "pending" ? "verified=false" : "verified=true"}`
      )
      .then((res) => {
        setShop(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  //   console.log(props)

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          {/* <Box */}
          {/* sx={{
              padding: "20px",
              backgroundColor: "black",
            }}
          > */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "70vw",
                height: "70vh",
                margin: "auto",
                backgroundColor: "black",
              }}
            >
              <Box sx={{}}>
                <img
                  src={shop.governmentIDImage}
                  alt="shop"
                  style={{
                    width: "20%",
                    height: "20%",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  color="white"
                  sx={{ mt: 2 }}
                >
                  {shop.shopName}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  color="white"
                >
                  {shop.governmentID}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  color="white"
                >
                  {/* {shop.userID.firstName} {shop.userID.lastName} */}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              // sx={{ width: "100%", mt: 2 }}
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </Button>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Modal>
    </div>
  );
}
