import React, { Component } from 'react';
import Slider from 'react-rangeslider';

interface VolumeSliderProps {
  handleChange: (value: number) => void;
  title: string;
  volume: number;
}

class VolumeSlider extends Component<VolumeSliderProps> {
  constructor(props: VolumeSliderProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: number) {
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
