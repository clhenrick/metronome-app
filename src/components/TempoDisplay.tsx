interface TempoDisplayProps {
  tempo: number;
}

const TempoDisplay = ({ tempo }: TempoDisplayProps) => (
  <div aria-atomic="true" aria-live="polite" className="TempoDisplay">
    <p>
      <span>{tempo}</span> bpm
    </p>
  </div>
);

export default TempoDisplay;
