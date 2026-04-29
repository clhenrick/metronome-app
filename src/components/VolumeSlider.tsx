import { ChangeEvent, Component } from 'react';

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

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.handleChange(parseInt(e.target.value, 10) / 100);
  }

  render() {
    const { volume, title } = this.props;
    return (
      <div className="VolumeSlider">
        <h6>{title}</h6>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(volume * 100)}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default VolumeSlider;
