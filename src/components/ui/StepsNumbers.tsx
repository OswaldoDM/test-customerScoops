import './stepsnumbers.css';

interface Props {
  step: number;
}

function StepsNumbers({ step }: Props) {
  return (
    <div className='steps_numbers'>
      <span>0{step}</span>
      <span>06</span>
    </div>
  );
}

export default StepsNumbers;
