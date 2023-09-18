import { Outlet } from 'react-router-dom';
import DesktopHeader from '../Pages/DesktopHeader/DesktopHeader';
import './index.css';
import { useState } from 'react';
import { StepContext } from '../context/theme';
function Root() {
  const [step, setStep] = useState('container')
  const stepTheme = {
    setStep
  }

console.log(step)
  return (
    <StepContext.Provider value={stepTheme} >
      <div id={step}>
        <DesktopHeader setStep={setStep} />
        <Outlet/>
      </div>
    </StepContext.Provider>
  )
}

export default Root