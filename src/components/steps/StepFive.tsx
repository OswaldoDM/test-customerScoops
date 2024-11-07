import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;
  industry: string;  
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
  setFormValue: (name: keyof FormState, value: string) => void;
}

function StepFive({
  step,
  industry,  
  nextStep,
  prevStep,
  formState,
  resetSteps,
  setFormValue,
}: Props) {

  const industries = [
    "Tecnología",
    "Software",
    "Servicios",
    "Financiera",
    "Telecomunicaciones",
    " Producción / Fabricación",
    "Logística",
    "Consumo Masivo",
    "Mayorista",
    "Retail",
    "Otra",
  ];

  return (
    <div className='step_wrapper'>
      <LogoDesktop />
      <p>
        <strong>Ahora te vamos a sorprender...</strong>
        <br />
        ¿A cuál industria pertenece tu empresa?
      </p>
      <div className='industries_grid'>
        {industries.map((ind) => (
          <button
            key={ind}
            className={`${industry === ind ? "selected" : ""}`}
            onClick={() => setFormValue("industry", ind)}
          >
            {ind}
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

export default StepFive;
