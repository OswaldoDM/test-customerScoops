import LogoDesktop from "../ui/LogoDesktop";
import StepsButtons from "../ui/StepsButtons";

interface Props {
  step: number;
  crm: string;  
  formState: FormState;
  prevStep: () => void;
  nextStep: () => void;
  resetSteps: () => void;
  setFormValue: (name: keyof FormState, value: string) => void;
}

function StepFour({
  step,  
  crm,
  nextStep,
  prevStep,
  formState,
  resetSteps,
  setFormValue,
}: Props) {
  
  const crms = [
    "SAP",
    "Microsoft Dynamics",
    "Salesforce",
    "Hubspot",
    "Zoho",
    "Netsuite (Oracle)",
    "Monday",
    "CRM Propio",
    "No tengo CRM",
  ];

  return (
    <div className='step_wrapper'>
      <LogoDesktop />
      <p>
        ¿Cuál CRM están utilizando en tu empresa? <br />
        CRM:
      </p>
      <div className='crms_grid'>
        {crms.map((item) => (
          <button
            key={item}
            className={`${crm === item ? "selected" : ""}`}
            onClick={() => setFormValue("crm", item)}
          >
            {item}
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

export default StepFour;
