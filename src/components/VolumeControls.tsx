import { useMetronome } from '../context/MetronomeContext';
import VolumeSlider from './VolumeSlider';

const VolumeControls = () => {
  const {
    accentVolume,
    quarterVolume,
    eighthVolume,
    sixteenthVolume,
    tripletVolume,
    masterVolume,
    setAccentVolume,
    setQuarterVolume,
    setEighthVolume,
    setSixteenthVolume,
    setTripletVolume,
    setMasterVolume,
  } = useMetronome();

  return (
    <fieldset className="VolumeControls">
      <legend className="visually-hidden">Volume Controls</legend>
      <VolumeSlider
        id="master"
        title="Master"
        volume={masterVolume}
        handleChange={setMasterVolume}
      />
      <VolumeSlider
        id="accent"
        title="Accent"
        volume={accentVolume}
        handleChange={setAccentVolume}
      />
      <VolumeSlider
        id="quarter-note"
        title="Quarter Note"
        volume={quarterVolume}
        handleChange={setQuarterVolume}
      />
      <VolumeSlider
        id="eighth-note"
        title="Eighth Note"
        volume={eighthVolume}
        handleChange={setEighthVolume}
      />
      <VolumeSlider
        id="sixteenth-note"
        title="Sixteenth Note"
        volume={sixteenthVolume}
        handleChange={setSixteenthVolume}
      />
      <VolumeSlider
        id="triplet"
        title="Triplet"
        volume={tripletVolume}
        handleChange={setTripletVolume}
      />
    </fieldset>
  );
};

export default VolumeControls;
