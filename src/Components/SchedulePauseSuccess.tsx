import React,{useState} from 'react'
import ModalComponent from './CommonModal/ModalComponent';
import { Button } from "@mui/material";

function SchedulePauseSuccess() {

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}> Schedule Pause Success</Button>
      <ModalComponent
       openSuccess={openSuccess}
       handleClickOpen={handleClickOpen}
       handleCloseSuccess={handleCloseSuccess}

        btnName={"Scheduled Pause Success"}
        modal_name={"Schedule Pause modal success"}
        successModalTitle={"Card For Card - Scheduled Pause"}
        successModalMsg={"Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer"}
        btn={" Close"}
        scheduledSuccessModalTitle={"Card For Card - Scheduled Pause"}
        scheduledbtn={" Close"}

      />

    </div>
  )
}

export default SchedulePauseSuccess