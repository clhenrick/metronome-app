import { Component } from 'react';

interface TempoSliderProps {
  handleChange: (value: number) => void;
  tempo: number;
}

class TempoSlider extends Component<TempoSliderProps> {
  handleClick(value: string) {
    const { handleChange, tempo } = this.props;

    switch (value) {
      case 'increment':
        handleChange(tempo + 1);
        break;
      case 'decrement':
        handleChange(tempo - 1);
        break;
      default:
        break;
    }
  }

  render() {
    const { handleChange, tempo } = this.props;
    return (
      <div className="TempoSlider">
        <p className="title" id="tempo-label">Tempo</p>
        <fieldset className="tempo-slider__controls">
          <legend className="visually-hidden">Tempo controls</legend>
          <button aria-label="Decrease tempo" onClick={() => this.handleClick('decrement')}>
            –
          </button>
          <input
            aria-labelledby="tempo-label"
            aria-valuetext={`${tempo} BPM`}
            type="range"
            min={1}
            max={250}
            value={tempo}
            onChange={(e) => handleChange(parseInt(e.target.value, 10))}
          />
          <button aria-label="Increase tempo" onClick={() => this.handleClick('increment')}>
            +
          </button>
        </fieldset>
      </div>
    );
  }
}

export default TempoSlider;
