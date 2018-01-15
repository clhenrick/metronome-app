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

  render() {
    const { handleChangeStart, handleChangeComplete, handleChange, tempo } = this.props;
    return (
      <div className="TempoSlider">
        <Slider
          min={0}
          max={250}
          orientation="horizontal"
          onChangeStart={handleChangeStart}
          onChange={value => handleChange(value)}
          onChangeComplete={handleChangeComplete}
          tooltip={false}
          value={tempo}
        />
      </div>
    );
  }
}

export default TempoSlider;
