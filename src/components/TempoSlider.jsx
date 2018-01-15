import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';

class TempoSlider extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    tempo: PropTypes.number.isRequired,
  };

  handleClick(value) {
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
          <Slider
            className="rangeslider__tempo"
            min={0}
            max={250}
            orientation="horizontal"
            onChange={value => handleChange(value)}
            tooltip={false}
            value={tempo}
          />
          <button onClick={() => this.handleClick('increment')}>+</button>
        </div>
      </div>
    );
  }
}

export default TempoSlider;
