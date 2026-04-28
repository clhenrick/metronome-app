import React from 'react';

import VolumeSlider from './VolumeSlider';
import { AppProps } from '../types';

const VolumeControls = ({
  accentVolume,
  quarterVolume,
  eighthVolume,
  sixteenthVolume,
  tripletVolume,
  masterVolume,
  setAccentVolume,
  setQuarterVolume,
  setEigthVolume,
  setSixteenthVolume,
  setTripletVolume,
  setMasterVolume
}: AppProps) => (
  <div className="VolumeControls">
    <h3 className="title">Volume</h3>
    <VolumeSlider title="Master" volume={masterVolume} handleChange={setMasterVolume} />
    <VolumeSlider title="Accent" volume={accentVolume} handleChange={setAccentVolume} />
    <VolumeSlider title="Quarter Note" volume={quarterVolume} handleChange={setQuarterVolume} />
    <VolumeSlider title="Eighth Note" volume={eighthVolume} handleChange={setEigthVolume} />
    <VolumeSlider
      title="Sixteenth Note"
      volume={sixteenthVolume}
      handleChange={setSixteenthVolume}
    />
    <VolumeSlider title="Triplet" volume={tripletVolume} handleChange={setTripletVolume} />
  </div>
);

export default VolumeControls;
