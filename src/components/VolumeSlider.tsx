interface VolumeSliderProps {
  handleChange: (value: number) => void;
  id: string;
  title: string;
  volume: number;
}

function VolumeSlider({ handleChange, id, title, volume }: VolumeSliderProps) {
  return (
    <div className="VolumeSlider">
      <label htmlFor={id}>{title}</label>
      <input
        aria-valuetext={`${Math.round(volume * 100)}%`}
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(volume * 100)}
        onChange={(e) => handleChange(parseInt(e.target.value, 10) / 100)}
      />
    </div>
  );
}

export default VolumeSlider;
