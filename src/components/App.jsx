import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { init } from '../utils/metronome';

import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';
import VolumeSlider from './VolumeSlider';

class App extends Component {
  static propTypes = {
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

  componentDidMount() {
    init();
  }

  render() {
    const {
      isPlaying,
      setTempo,
      tempo,
      togglePlayPause,
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
    } = this.props;
    const label = isPlaying ? 'pause' : 'play';
    return (
      <div className="App">
        <TempoDisplay tempo={tempo} />
        <TempoSlider handleChange={setTempo} tempo={tempo} />
        <PlayPauseBtn label={label} handleClick={togglePlayPause} />
        <div className="volume-controls">
          <VolumeSlider
            title="Master Volume"
            volume={masterVolume}
            handleChange={setMasterVolume}
          />
          <VolumeSlider
            title="Accent Volume"
            volume={accentVolume}
            handleChange={setAccentVolume}
          />
          <VolumeSlider
            title="Quarter Volume"
            volume={quarterVolume}
            handleChange={setQuarterVolume}
          />
          <VolumeSlider title="Eigth Volume" volume={eighthVolume} handleChange={setEigthVolume} />
          <VolumeSlider
            title="Sixteenth Volume"
            volume={sixteenthVolume}
            handleChange={setSixteenthVolume}
          />
          <VolumeSlider
            title="Triplet Volume"
            volume={tripletVolume}
            handleChange={setTripletVolume}
          />
        </div>
      </div>
    );
  }
}

export default App;
