
import './progressbar.css';

interface Props {
    step: number;
}

function ProgressBar({step}:Props) {
  const maxSteps = 6;
  const progressWidth = `${(step / maxSteps) * 100}%`;

  return <div className='progress' style={{ width: progressWidth }}></div>;
}

export default ProgressBar;
