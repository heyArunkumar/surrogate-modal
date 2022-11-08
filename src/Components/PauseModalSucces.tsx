import React,{useState} from 'react'


import ModalComponent from './CommonModal/ModalComponent';
import { Button } from '@material-ui/core';

function PauseModalSucces() {

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };
  
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>

       <Button variant="outlined" onClick={handleClickOpen}>Pause modal Success</Button>
        <ModalComponent 

        openSuccess={openSuccess}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}

        modal_name={"Pause modal success"}
        successModalTitle={"Card For Card - Pause"}
        successModalMsg={" Your action of pausing - Card For Card Surrogate has been successully sent to the reviewer"}
        btn={" Close"}
        scheduledSuccessModalTitle={"Card For Card - Scheduled Pause"}
        scheduledSuccessModalMsg={" Your action of Scheduled Pause - Card For Card Surrogate From  DD/MM/YYYTo DD/MM/YYY is successfully sent to reviewer"}
        scheduledbtn={" Close"}
        resumeSuccessModalTitle={"AQB - Resume Now"}

      
        />
    </div>
  )
}

export default PauseModalSucces

