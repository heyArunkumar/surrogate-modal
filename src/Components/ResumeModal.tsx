import React,{useState} from 'react'
import { Button } from '@mui/material';
import ModalComponent from './CommonModal/ModalComponent'

function ResumeModal() {

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClickOpen = () => {
    setOpenSuccess(true);
  };
  
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  return (
    <div>
       
       <Button variant="outlined" onClick={handleClickOpen}>Resume modal</Button>
        <ModalComponent 

        openSuccess={openSuccess}
        handleClickOpen={handleClickOpen}
        handleCloseSuccess={handleCloseSuccess}
         
        title={"AQB - Resume Now"}
        pause_content={"You will be able to resume your paused surrogate here."}
        textarea_title={"Add Remarks"}
        dateRange_title={"Enter Date range"}
        maxLength={"Maximum of 500 words"}
        close={"Close"}
        submit={"Submit"}
        modal_name={"Resume Modal"}
        
      
        />
    </div>
  )
}

export default ResumeModal