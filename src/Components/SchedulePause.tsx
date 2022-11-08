import { Button } from "@mui/material";
import React, { useState } from "react";
import ModalComponent from './CommonModal/ModalComponent'



function SchedulePause() {

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Schedule Pause modal</Button>
      <ModalComponent


        openSuccess={openSuccess}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}

        title={"Card For Card - Pause"}
        pause_content={"You can pause it or perform a scheduled pause."}
        scheduledPause_content={"Please choose a date range to perform a scheduled pause."}
        textarea_title={"Add Remarks"}
        normalPause={"Pause Now"}
        scheulePause={"Scheule Pause"}
        dateRange_title={"Enter Date range"}
        maxLength={"Maximum of 500 words"}
        close={"Close"}
        submit={"Submit"}
        modal_name={"Scheduled Pause Modal"}
        datepickerLabelStart={"Start Date and time"}
        datepickerLabelEnd={"End Date and time"}

      />
    </div>
  )
}

export default SchedulePause