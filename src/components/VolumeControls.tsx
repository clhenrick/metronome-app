import React from 'react';

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
    <div className="VolumeControls">
      <h3 className="title">Volume</h3>
      <VolumeSlider title="Master" volume={masterVolume} handleChange={setMasterVolume} />
      <VolumeSlider title="Accent" volume={accentVolume} handleChange={setAccentVolume} />
      <VolumeSlider title="Quarter Note" volume={quarterVolume} handleChange={setQuarterVolume} />
      <VolumeSlider title="Eighth Note" volume={eighthVolume} handleChange={setEighthVolume} />
      <VolumeSlider
        title="Sixteenth Note"
        volume={sixteenthVolume}
        handleChange={setSixteenthVolume}
      />
      <VolumeSlider title="Triplet" volume={tripletVolume} handleChange={setTripletVolume} />
    </div>
  );
};

export default VolumeControls;
