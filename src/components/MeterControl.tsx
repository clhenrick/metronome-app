import { ArrowDown, ArrowUp } from './Icons';

interface MeterControlProps {
  handleChange: (value: number) => void;
  meter: number;
}

const MeterControl = ({ meter, handleChange }: MeterControlProps) => {
  function handleClick(action: string) {
    switch (action) {
      case 'increment':
        handleChange(meter + 1);
        break;
      case 'decrement':
        handleChange(meter - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="MeterControl">
      <button onClick={() => handleClick('increment')}>
        <ArrowUp width={50} height={50} fillColor="#f93bcf" />
      </button>
      <button onClick={() => handleClick('decrement')}>
        <ArrowDown width={50} height={50} fillColor="#f93bcf" />
      </button>
    </div>
  );
};

export default MeterControl;
