import { useState } from "react";
import { useForm } from "./hooks/useForm";
import { initialForm } from "./utils/initialForm";
import mobileHeader from "./assets/cs-mobHeader.png";
import logo from "./assets/cs-logo.png";
import desktopImg from "./assets/desktop-img.png";
import StepsNumbers from "./components/ui/StepsNumbers";
import StepOne from "./components/steps/StepOne";
import StepTwo from "./components/steps/StepTwo";
import StepThree from "./components/steps/StepThree";
import StepFour from "./components/steps/StepFour";
import StepFive from "./components/steps/StepFive";
import StepSix from "./components/steps/StepSix";
import ProgressBar from "./components/ui/ProgressBar";
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const {
    username,
    position,
    challenge,
    crm,
    industry,
    formState,
    setFormValue,
    onInputChange,
    onResetForm,
  } = useForm(initialForm);  

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const resetSteps = () => {
    setStep(1);
    onResetForm();
  };      

  return (
    <>
      <main>        
        <ProgressBar step={step}/>
        <StepsNumbers step={step} />
        <header className='mobile_header'>
          <img src={mobileHeader} alt='header' />
          <img src={logo} alt='logo' className='logo' />
          <StepsNumbers step={step} />
        </header>
        <div className={`container ${step === 6 && "full_green"}`}>
          {step === 1 && (
            <StepOne
             step={step}
             username={username}
             onInputChange={onInputChange}
             nextStep={nextStep}
             prevStep={prevStep}
             formState={formState}
             resetSteps={resetSteps}
            />
          )}          
          {step === 2 && (
            <StepTwo
            step={step}
            username={username}
            position={position}
            nextStep={nextStep}
            prevStep={prevStep}
            formState={formState}
            resetSteps={resetSteps}
            setFormValue={setFormValue}
           />
          )}          
          {step === 3 && (
            <StepThree
            step={step}            
            challenge={challenge}
            nextStep={nextStep}
            prevStep={prevStep}
            formState={formState}
            resetSteps={resetSteps}
            setFormValue={setFormValue}
           />
          )}          
          {step === 4 && (
            <StepFour
            step={step}            
            crm={crm}
            nextStep={nextStep}
            prevStep={prevStep}
            formState={formState}
            resetSteps={resetSteps}
            setFormValue={setFormValue}
           />
          )}          
          {step === 5 && (
            <StepFive
            step={step}            
            industry={industry}
            nextStep={nextStep}
            prevStep={prevStep}
            formState={formState}
            resetSteps={resetSteps}
            setFormValue={setFormValue}
           />
          )}          
          {step === 6 && (
            <StepSix
            step={step}            
            nextStep={nextStep}
            prevStep={prevStep}
            formState={formState}
            resetSteps={resetSteps}            
           />
          )}
          <div className='desktop_img_wrapper'>
            <img src={desktopImg} alt='customerScoops' />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
