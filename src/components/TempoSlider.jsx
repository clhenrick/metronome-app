import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';

class TempoSlider extends Component {
  static propTypes = {
    handleChangeStart: PropTypes.func,
    handleChange: PropTypes.func,
    handleChangeComplete: PropTypes.func,
    tempo: PropTypes.number.isRequired,
  };

  static defaultProps = {
    handleChangeStart: () => {},
    handleChange: () => {},
    handleChangeComplete: () => {},
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.handleChange(value);
  }

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
    const { handleChangeStart, handleChangeComplete, handleChange, tempo } = this.props;
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
            onChangeStart={handleChangeStart}
            onChange={value => handleChange(value)}
            onChangeComplete={handleChangeComplete}
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
