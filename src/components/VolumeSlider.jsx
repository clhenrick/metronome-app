import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';

class VolumeSlider extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.handleChange(value);
  }

  render() {
    const { volume, title } = this.props;
    return (
      <div className="VolumeSlider">
        <h6>{title}</h6>
        <Slider
          min={0}
          max={1}
          orientation="horizontal"
          onChange={this.handleChange}
          step={0.01}
          tooltip={false}
          value={volume}
        />
      </div>
    );
  }
}

export default VolumeSlider;
