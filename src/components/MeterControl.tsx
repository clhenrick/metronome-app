import { Icon } from './Icons';

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
      <button aria-label="Increase meter" onClick={() => handleClick('increment')}>
        <Icon name="arrowUp" width={50} height={50} fillColor="#f93bcf" />
      </button>
      <button aria-label="Decrease meter" onClick={() => handleClick('decrement')}>
        <Icon name="arrowDown" width={50} height={50} fillColor="#f93bcf" />
      </button>
    </div>
  );
};

export default MeterControl;
