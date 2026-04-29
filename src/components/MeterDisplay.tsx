interface MeterDisplayProps {
  meter: number;
}

const MeterDisplay = ({ meter }: MeterDisplayProps) => (
  <div className="MeterDisplay">
    <p>
      {meter} <span>/ 4</span>
    </p>
  </div>
);

export default MeterDisplay;
