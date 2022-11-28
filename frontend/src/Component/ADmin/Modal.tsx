import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { api } from "../../lib/Axios";

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
}

export default function BasicModal({ open, id, setOpen, type }: Props) {
  const [shop, setShop] = React.useState<any>([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(type);

  if (type === "pending") {
    useEffect(() => {
      api.get(`/shop/${id}?verified=false`).then((res) => {
        setShop(res.data.data);
        console.log(res.data.data);
      });
    }, []);
  } else {
    useEffect(() => {
      api.get(`/shop/${id}?verified=true`).then((res) => {
        setShop(res.data.data);
        console.log(res.data.data);
      });
    }, []);
  }

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
        <Box
          sx={{
            height: "70vh",
            width: "70vw",
            backgroundColor: "rgba(233,40,50,0.5)",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {shop.shopName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <img className="img" src={shop.shopImage} />
          <Button
            sx={{
              color: "white",
              marginBottom: "auto",
            }}
            onClick={handleClose}
          >
            Close Modal
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
