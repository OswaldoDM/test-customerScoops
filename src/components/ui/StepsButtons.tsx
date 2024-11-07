import arrow from "../../assets/left-arrow.svg";
import "./stepsbuttons.css";

interface Props {  
  step: number;
  label: string;
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
}

function StepsButtons({ label, step, formState, prevStep, nextStep, resetSteps }: Props) {

  const {username, position, challenge, crm, industry} = formState

  const handleClick = () => {
    if(step === 1 && username) nextStep();
    if(step === 2 && position) nextStep();
    if(step === 3 && challenge) nextStep();
    if(step === 4 && crm) nextStep();
    if (step === 5 && industry) {
      nextStep();
      console.log(formState);
    }
    if(step === 6) resetSteps();   
  }

  return (
    <div className='btn_wrapper'>
      <button className={`arrow_btn ${(step === 1 || step === 6) ? 'arrow_none' : ''}`} onClick={prevStep}>
        <img src={arrow} alt='arrow' />
      </button>
      <button onClick={handleClick} className='primary_btn'>
        {label}
      </button>
    </div>
  );
}

export default StepsButtons;
