import React from 'react'
import { Stack } from "@mui/system";
import ModalComponent from './CommonModal/ModalComponent';

function SurrogateSelection() {
  return (
    <Stack>
        <ModalComponent 
         title={"Card For Card - Pause"}
         pause_content={"You can Assignor remove surrogate."}
         scheduledPause_content={"Please choose a date range to perform a scheduled pause."}
         normalPause={"Assign Surrogate"}
         scheulePause={"Remove Surrogate"}
         close={"Close"}
         submit={"Submit"}
         modal_name={"Surrogate selection"}
        />
    </Stack>
  )
}

export default SurrogateSelection