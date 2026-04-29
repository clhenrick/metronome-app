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
        <h3 className="title">Tempo</h3>
        <div className="tempo-slider__controls">
          <button onClick={() => this.handleClick('decrement')}>–</button>
          <input
            type="range"
            min={1}
            max={250}
            value={tempo}
            onChange={(e) => handleChange(parseInt(e.target.value, 10))}
          />
          <button onClick={() => this.handleClick('increment')}>+</button>
        </div>
      </div>
    );
  }
}

export default TempoSlider;
