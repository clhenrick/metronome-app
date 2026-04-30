interface MeterDisplayProps {
  meter: number;
}

const MeterDisplay = ({ meter }: MeterDisplayProps) => (
  <div aria-atomic="true" aria-live="polite" className="MeterDisplay">
    <p>
      {meter} <span>/ 4</span>
    </p>
  </div>
);

export default MeterDisplay;
