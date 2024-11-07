import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;  
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;  
}

function StepSix({
  step,  
  nextStep,
  prevStep,
  formState,
  resetSteps,  
}: Props) {  

  return (
    <div className='step_wrapper step_6'>
      <LogoDesktop />
      <h2>
        Muchas Gracias
        <p>por querer ser parte de la familia Scoopers.</p>
      </h2>
      <h3>Nos vemos pronto!</h3>
      <StepsButtons
        label='Finalizar'
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        formState={formState}
        resetSteps={resetSteps}
      />
    </div>
  );
}

export default StepSix;
