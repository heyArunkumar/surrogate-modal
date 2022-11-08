
import React  from 'react';
import './App.css';


import PauseModal from './Components/PauseModal';  import PauseModalSucces from './Components/PauseModalSucces';
import ResumeModal from './Components/ResumeModal';
import ResumeModalSuccess from './Components/ResumeModalSuccess';
import SchedulePause from './Components/SchedulePause';
import SchedulePauseSuccess from './Components/SchedulePauseSuccess';
// import SurrogateSelection from './Components/SurrogateSelection';



function App() {


  return (
    <div>
      
       <PauseModal />
       <SchedulePause />
       <ResumeModal />
       
       <PauseModalSucces />
       <SchedulePauseSuccess />
       <ResumeModalSuccess />
      {/*  <SurrogateSelection /> */}
    </div>
  );//
}

export default App;
