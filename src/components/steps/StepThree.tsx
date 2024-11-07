import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;  
  challenge: string;
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
  setFormValue: (name: keyof FormState, value: string) => void;
}

function StepThree({
  step,  
  challenge,
  nextStep,
  prevStep,
  formState,
  resetSteps,
  setFormValue,
}: Props) {

  const challenges = [
    { char: "A", label: "Aumentar conversión de leads a clientes" },
    { char: "B", label: "Reducir customer churn" },
    { char: "C", label: "Implementar un programa VoC" },
    { char: "D", label: "Reducir costos en gestión de reclamos" },
    { char: "E", label: "Optimizar procesos comerciales" },
    { char: "F", label: "Optimizar procesos operativos" },
    { char: "G", label: "Otro" },
  ];

  return (
    <div className='step_wrapper'>
      <LogoDesktop />
      <p>¿Cuáles son tus principales desafíos para 2024?</p>
      <div className='challenges_grid'>
        {challenges.map(({ char, label }) => (
          <button
            key={char}
            className={`${challenge === label ? "selected" : ""}`}
            onClick={() => setFormValue("challenge", label)}
          >
            <div className='char_wrapper'>
              <span>{char}</span>
            </div>
            <span>{label}</span>
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

export default StepThree;
