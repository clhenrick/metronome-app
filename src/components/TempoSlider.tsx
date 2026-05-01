interface TempoSliderProps {
  handleChange: (value: number) => void;
  tempo: number;
}

function TempoSlider({ handleChange, tempo }: TempoSliderProps) {
  function handleClick(action: 'increment' | 'decrement') {
    handleChange(action === 'increment' ? tempo + 1 : tempo - 1);
  }

  return (
    <div className="TempoSlider">
      <fieldset className="tempo-slider__controls">
        <legend className="visually-hidden">Tempo controls</legend>
        <button aria-label="Decrease tempo" onClick={() => handleClick('decrement')}>
          –
        </button>
        <input
          aria-label="tempo"
          aria-valuetext={`${tempo} BPM`}
          type="range"
          min={1}
          max={250}
          value={tempo}
          onChange={(e) => handleChange(parseInt(e.target.value, 10))}
        />
        <button aria-label="Increase tempo" onClick={() => handleClick('increment')}>
          +
        </button>
      </fieldset>
    </div>
  );
}

export default TempoSlider;
