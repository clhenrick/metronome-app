import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { init } from '../utils/metronome';

import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';

class App extends Component {
  static propTypes = {
    setTempo: PropTypes.func.isRequired,
    tempo: PropTypes.number.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    init();
  }

  render() {
    const { isPlaying, setTempo, tempo, togglePlayPause } = this.props;
    const label = isPlaying ? 'pause' : 'play';
    return (
      <div className="App">
        <TempoDisplay tempo={tempo} />
        <TempoSlider handleChange={setTempo} tempo={tempo} />
        <PlayPauseBtn label={label} handleClick={togglePlayPause} />
      </div>
    );
  }
}

export default App;
