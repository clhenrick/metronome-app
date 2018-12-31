import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';
import MeterControl from '../src/components/MeterControl';
import MeterDisplay from '../src/components/MeterDisplay';
import TempoDisplay from '../src/components/TempoDisplay';
import TempoSlider from '../src/components/TempoSlider';
import PlayPauseBtn from '../src/components/PlayPauseBtn';
import VolumeControls from '../src/components/VolumeControls';

import preventDoubleTapZoom from '../src/utils/helpers';
import { init } from '../src/utils/metronome';

configure({ adapter: new Adapter() });

jest.mock('../src/utils/worker.js');
jest.mock('../src/utils/metronome.js');
jest.mock('../src/utils/helpers.js');

jest.useFakeTimers();

describe('App', () => {
  const props = {
    meter: 4,
    setMeter: () => {},
    setTempo: () => {},
    setMasterVolume: () => {},
    setAccentVolume: () => {},
    setQuarterVolume: () => {},
    setEigthVolume: () => {},
    setSixteenthVolume: () => {},
    setTripletVolume: () => {},
    tempo: 100,
    togglePlayPause: () => {},
    isPlaying: false,
    masterVolume: 0.5,
    accentVolume: 1,
    quarterVolume: 0.7,
    eighthVolume: 0,
    sixteenthVolume: 0,
    tripletVolume: 0,
  };
  const app = mount(<App {...props} />);

  it('has correct props', () => {
    expect(app.props()).toHaveProperty('meter');
    expect(app.props()).toHaveProperty('tempo');
    expect(app.props()).toHaveProperty('isPlaying');
    expect(app.props()).toHaveProperty('setMeter');
    expect(app.props()).toHaveProperty('setTempo');
    expect(app.props()).toHaveProperty('togglePlayPause');
  });

  it('has the class name "App"', () => {
    expect(
      app
        .find('div')
        .first()
        .hasClass('App')
    ).toEqual(true);
  });

  it('has a top controls panel div', () => {
    expect(app.find('.top-controls-panel')).toHaveLength(1);
  });

  it('has a meter panel div', () => {
    expect(app.find('.meter-panel')).toHaveLength(1);
  });

  it('renders TempoDisplay', () => {
    expect(app.find(TempoDisplay)).toHaveLength(1);
  });

  it('renders MeterControl', () => {
    expect(app.find(MeterControl)).toHaveLength(1);
  });

  it('renders MeterDisplay', () => {
    expect(app.find(MeterDisplay)).toHaveLength(1);
  });

  it('renders TempoSlider', () => {
    expect(app.find(TempoSlider)).toHaveLength(1);
  });

  it('renders PlayPauseBtn', () => {
    expect(app.find(PlayPauseBtn)).toHaveLength(1);
  });

  it('renders VolumeControls', () => {
    expect(app.find(VolumeControls)).toHaveLength(1);
  });

  // eslint-disable-next-line
  xit('handles touch screen double taps', () => {
    // FIX ME: should show that a touchstart event causes preventDoubleTapZoom to be called
    // https://facebook.github.io/jest/docs/en/mock-functions.html
    app.find('.App').simulate('touchstart');
    expect(preventDoubleTapZoom).toBeCalled();
  });

  it("invokes metronome's init()", () => {
    expect(init).toBeCalled();
  });
});
