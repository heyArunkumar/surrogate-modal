import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import logo from "../../assets/accept.png";
import { Stack } from "@mui/system";



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SuccessModalComponent(props:any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button onClick={handleClickOpen}>
        {props.btnName}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box style={{ maxWidth: "450px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
            component="img"
            src={logo}
            py={3}
            width={45}
          ></Box>
          <Typography fontWeight={700} align={"center"} pb={0} fontSize={16}>
            {props.successModalTitle}
          </Typography>
          <DialogContent sx={{ paddingTop: "10px" }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              px={4}
              align={"center"}
              fontSize={14}
              fontWeight={500}
              color="#1d1d1d"
            >
             {props.successModalMsg}
            </DialogContentText>
          </DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            pb={3}
            px={4}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                width: "30em",
                height: "3em",
              }}
            >
             {props.btn}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Stack>
  );
}

export default SuccessModalComponent;
