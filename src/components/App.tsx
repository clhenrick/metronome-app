import React, { Component } from 'react';

import { init } from '../utils/metronome';
import { AppProps } from '../types';

import MeterControl from './MeterControl';
import MeterDisplay from './MeterDisplay';
import TempoDisplay from './TempoDisplay';
import TempoSlider from './TempoSlider';
import PlayPauseBtn from './PlayPauseBtn';
import VolumeControls from './VolumeControls';
import preventDoubleTapZoom from '../utils/helpers';

class App extends Component<AppProps> {
  app: HTMLDivElement | null = null;

  componentDidMount() {
    init();
    this.bindListeners();
  }

  componentWillUnmount() {
    this.unbindListeners();
  }

  bindListeners = () => {
    this.app?.addEventListener('touchstart', preventDoubleTapZoom);
  };

  unbindListeners = () => {
    this.app?.removeEventListener('touchstart', preventDoubleTapZoom);
  };

  createAppRef = (el: HTMLDivElement | null) => {
    this.app = el;
  };

  render() {
    const { isPlaying, meter, setMeter, setTempo, tempo, togglePlayPause } = this.props;
    return (
      <div className="App" ref={this.createAppRef}>
        <div className="top-controls-panel">
          <TempoDisplay tempo={tempo} />
          <PlayPauseBtn isPlaying={isPlaying} handleClick={togglePlayPause} />
        </div>
        <TempoSlider handleChange={setTempo} tempo={tempo} />
        <div className="meter-panel">
          <h3 className="title">Meter</h3>
          <div>
            <MeterDisplay meter={meter} />
            <MeterControl handleChange={setMeter} meter={meter} />
          </div>
        </div>
        <VolumeControls {...this.props} />
      </div>
    );
  }
}

export default App;
