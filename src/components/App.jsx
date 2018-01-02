import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { init } from '../utils/metronome';

import TempoDisplay from './TempoDisplay';

class App extends Component {
  static propTypes = {
    tempo: PropTypes.number.isRequired,
    togglePlayPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    init();
  }

  handleClick() {
    this.props.togglePlayPause();
  }

  render() {
    const { isPlaying, tempo } = this.props;
    const label = isPlaying ? 'pause' : 'play';
    return (
      <div className="App">
        <TempoDisplay tempo={tempo} />
        <button onClick={this.handleClick}>{label}</button>
      </div>
    );
  }
}

export default App;
