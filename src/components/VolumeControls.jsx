import React from 'react';
import PropTypes from 'prop-types';

import VolumeSlider from './VolumeSlider';

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
  setMasterVolume,
}) => (
  <div className="VolumeControls">
    <h3 className="title">Volume</h3>
    <VolumeSlider title="Master" volume={masterVolume} handleChange={setMasterVolume} />
    <VolumeSlider title="Accent" volume={accentVolume} handleChange={setAccentVolume} />
    <VolumeSlider title="Quarter" volume={quarterVolume} handleChange={setQuarterVolume} />
    <VolumeSlider title="Eigth" volume={eighthVolume} handleChange={setEigthVolume} />
    <VolumeSlider title="Sixteenth" volume={sixteenthVolume} handleChange={setSixteenthVolume} />
    <VolumeSlider title="Triplet" volume={tripletVolume} handleChange={setTripletVolume} />
  </div>
);

VolumeControls.propTypes = {
  accentVolume: PropTypes.number.isRequired,
  quarterVolume: PropTypes.number.isRequired,
  eighthVolume: PropTypes.number.isRequired,
  sixteenthVolume: PropTypes.number.isRequired,
  tripletVolume: PropTypes.number.isRequired,
  masterVolume: PropTypes.number.isRequired,
  setTempo: PropTypes.func.isRequired,
  tempo: PropTypes.number.isRequired,
  togglePlayPause: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setAccentVolume: PropTypes.func.isRequired,
  setQuarterVolume: PropTypes.func.isRequired,
  setEigthVolume: PropTypes.func.isRequired,
  setSixteenthVolume: PropTypes.func.isRequired,
  setTripletVolume: PropTypes.func.isRequired,
  setMasterVolume: PropTypes.func.isRequired,
};

export default VolumeControls;
