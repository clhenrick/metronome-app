import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { init } from '../utils/metronome';

import TempoDisplay from './TempoDisplay';
import PlayPauseBtn from './PlayPauseBtn';

class App extends Component {
  static propTypes = {
    tempo: PropTypes.number.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    init();
  }

  render() {
    const { isPlaying, tempo } = this.props;
    const label = isPlaying ? 'pause' : 'play';
    return (
      <div className="App">
        <TempoDisplay tempo={tempo} />
        <PlayPauseBtn label={label} handleClick={this.props.togglePlayPause} />
      </div>
    );
  }
}

export default App;
