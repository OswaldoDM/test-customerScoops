import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;
  username: string;
  position: string;
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
  setFormValue: (name: keyof FormState, value: string) => void;  
}

function StepTwo({
  step,
  username,
  position,  
  nextStep,
  prevStep,
  formState,
  resetSteps,
  setFormValue
}: Props) {

  const positions = [
    "Board member",
    "C-level",
    "Gerente",
    "Subgerente",
    "Jefe área",
    "Lider de área",
    "Ejecutivo / Analista",
    "Otro",
  ];

  return (
    <div className='step_wrapper'>
      <LogoDesktop />
      <p>
        <strong>Genial {username}</strong>, ahora nos gustaría tener cierta info
        para diseñar una gran propuesta de valor para ti:
      </p>
      <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>
      <div className='positions_grid'>
        {positions.map((pos) => (
          <button
            key={pos}
            className={`${position === pos ? "selected" : ""}`}
            onClick={() => setFormValue("position", pos)}
          >
            {pos}
          </button>
        ))}
      </div>
      <StepsButtons
        label='Siguiente'
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        formState={formState}
        resetSteps={resetSteps}
      />
    </div>
  );
}

export default StepTwo;
