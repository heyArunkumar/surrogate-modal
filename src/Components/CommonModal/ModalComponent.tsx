import React, { useState } from "react";
import "../../App.css";
import { Button, Stack, Typography } from "@mui/material";
// import Dialog from '@mui/material/Dialog';
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import TextareaAutosize from "@mui/material/TextareaAutosize";

import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import Slide from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";
import Box from "@mui/material/Box";
import logo from "../../assets/accept.png";
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';
// import useStyles from "./Style";
import Grid from "@mui/material/Grid";
// import PauseModalSucces from "../PauseModalSucces";
// import { display } from "@mui/system";


// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });


function ModalComponent(props: any) {
  // const classess = useStyles();

  // const [open, setOpen] = useState(false);
  const [pauseStatus, setPauseStatus] = useState(props.normalPause);
  // console.log("open", open)
  const [value, setValue] = React.useState<Dayjs | null>(null);


  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);

  // };


  // const saveBtn = () => {

  //   setOpen(false);

  // }



console.log("props",props.handleClickOpen)
  return (
    <Stack className="App">
{/* 
      <Button onClick={handleOpen}>{props.modal_name}</Button> */}

      <Dialog
        open={props.openSuccess}
        onClose={props.handleCloseSuccess}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"

      >
        <Stack py={3} width={440} px={props.title ? 3 :0}>
          {props.title &&

            <Typography
              className="modal_title"
              component="h1"
              pt={0}
              pb={2}
              borderBottom="1px solid #36363624"
              fontSize={13}
              fontWeight={600}
              color="#555759"
            >
              {props.title}
            </Typography>
          }


          {props.successModalTitle &&
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              component="img"
              src={logo}

              pb={0}
              width={45}
            ></Box>
          }

          {props.successModalTitle &&
            <DialogContent sx={{ paddingTop: '18px', paddingBottom: '5px' }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                px={4}
                py={0}
                align={"center"}
                fontSize={16}
                fontWeight={600}
                color="#1d1d1d"
              >
                {props.successModalTitle}

              </DialogContentText>
            </DialogContent>
          }

          {props.successModalMsg &&

            <Typography fontWeight={700} align={"center"} pb={0} px={5} fontSize={12}>
              {props.successModalMsg}
            </Typography>

          }

          <Typography
            className="pause_content"
            pb={1}
            pt={2}
            fontSize={12}
            color={"#171717"}
            fontWeight={500}
          >
            {" "}
            {props.pause_content}
          </Typography>

          {props.normalPause && props.scheulePause && (
            <FormControl >
              <Stack pb={1}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={pauseStatus}
                  name="radio-buttons-group"
                  onChange={(e) => setPauseStatus(e.target.value)}
                >
                  <FormControlLabel

                    value={props.normalPause}
                    control={<Radio />}
                    label={props.normalPause}
                  />
                  <FormControlLabel
                    value={props.scheulePause}
                    control={<Radio />}
                    label={props.scheulePause}
                  />
                </RadioGroup>
              </Stack>
            </FormControl>
          )}

          {pauseStatus === props.scheulePause &&
            props.datepickerLabelStart &&
            props.datepickerLabelEnd && (
              <Stack>
                <Typography
                  className="pause_content"
                  pb={1}
                  pt={3}
                  fontSize={12}
                  color={"#171717"}
                  borderTop="1px solid #36363624"
                  fontWeight={500}
                >
                  {" "}
                  {props.scheduledPause_content}
                </Typography>

                <Typography
                  className="textarea_title"
                  fontWeight={600}
                  fontSize={12}
                  pt={1}
                  pb={1}
                >
                  {props.dateRange_title}
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack
                    className="Modal_datepicker"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingBottom: "16px",
                    }}
                  >
                    <DatePicker
                      className="datePicker_input"
                      toolbarPlaceholder="dd"
                      label={props.datepickerLabelStart}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}

                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />

                    <DatePicker
                      className="datePicker_input"
                      label={props.datepickerLabelEnd}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </Stack>
                </LocalizationProvider>
              </Stack>
            )}
          {props.textarea_title && (
            <Stack>
              <Typography className="textarea_title" fontWeight={600} fontSize={12}>
                {props.textarea_title}
              </Typography>

              <Grid container>
                <Grid container xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    style={{ width: 520, border: "1px solid #36363624" }}
                  />
                </Grid>
              </Grid>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginTop: "5px",
                }}
              >
                <Typography
                  className="textarea"
                  sx={{ float: "right", fontSize: "8px", color: "#b6b7b7" }} pb={2}
                >
                  {props.maxLength}
                </Typography>
              </Stack>
            </Stack>
          )}

          {/* <Stack sx={{display:'flex',flexDirection:'row'}}>
   <FormGroup >
    <Grid container >
      <Grid  xs={4}> <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /></Grid>
      <Grid  xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="Label" /></Grid>
      <Grid  xs={4}><FormControlLabel control={<Checkbox defaultChecked />} label="Label" /></Grid>

      <Grid  xs={4}><FormControlLabel control={<Checkbox  />} label="Label" /></Grid>
      <Grid  xs={4}><FormControlLabel control={<Checkbox  />} label="Label" /></Grid>
      <Grid  xs={4}><FormControlLabel control={<Checkbox  />} label="Label" /></Grid>
      </Grid>
    </FormGroup>
   </Stack> */}

          <Stack
            className="modal_buttons"
            sx={{
              flexDirection: "row",
              justifyContent: "flex-end",
              // marginTop: "15px",
            }}
          >

            {props.submit && <Button
              onClick={props.handleCloseSuccess}
              variant="outlined"
              sx={{
                fontSize: "11px",
                textTransform: "capitalize",
                border: "1px solid #36363624 ",
                color: "#363636",
                fontWeight: "600",

              }}

            >
              {props.close}
            </Button>
            }
            {props.submit &&
              <Button
                variant="contained"
                sx={{
                  fontSize: "11px",
                  marginLeft: "35px",
                  textTransform: "capitalize",
                  backgroundColor: "#0c4ca8",
                  fontWeight: "600",
                }}
                onClick={props.handleCloseSuccess}
              >
                {props.submit}{" "}
              </Button>
            }

            {props.btn &&
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                pb={0}
                px={4}
              >
                <Button
                  variant="contained"
                  onClick={props.handleCloseSuccess}
                  style={{
                    width: "30em",
                    height: "3em",
                    fontSize: '12px',
                    backgroundColor: '#0c4ca8'
                  }}
                >
                  {props.btn}
                </Button>
              </Box>
            }

          </Stack>

        </Stack>
      </Dialog>

      <Stack>

      </Stack>
    </Stack>
  );
}

export default ModalComponent;
