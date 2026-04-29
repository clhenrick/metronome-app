interface TempoDisplayProps {
  tempo: number;
}

const TempoDisplay = ({ tempo }: TempoDisplayProps) => (
  <div className="TempoDisplay">
    <p>
      <span>{tempo}</span> bpm
    </p>
  </div>
);

export default TempoDisplay;
