import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;
  username: string;
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
  onInputChange: (e: ChangeEvent) => void;
}

function StepOne({
  step,
  username,
  onInputChange,
  nextStep,
  prevStep,
  formState,
  resetSteps,
}: Props) {
  
  return (
    <div className='step_wrapper'>
      <LogoDesktop />
      <p>
        Muchas gracias por tu interés en conocer <strong>customerScoops</strong>
        , que a través de Formularios Conversacionales Inteligente te ayudamos a
        aumentar el revenue y rentabilidad de tu negocio.
      </p>
      <p>Queremos conocerte, ¿cuál es tu nombre?</p>
      <input
        type='text'
        name='username'
        placeholder='Nombre'
        value={username}
        onChange={onInputChange}
      />
      <StepsButtons
        label='Comenzar'
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        formState={formState}
        resetSteps={resetSteps}
      />
    </div>
  );
}

export default StepOne;
