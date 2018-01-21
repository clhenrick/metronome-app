import * as actions from '../src/actions';
import * as types from '../src/constants';

describe('actions', () => {
  it('should create an action to toggle play / pause', () => {
    const expectedAction = {
      type: types.TOGGLE_PLAY_PAUSE,
    };
    expect(actions.togglePlayPause()).toEqual(expectedAction);
  });

  it('should create an action to set tempo', () => {
    const tempo = 140;
    const expectedAction = {
      type: types.SET_TEMPO,
      tempo,
    };
    expect(actions.setTempo(tempo)).toEqual(expectedAction);
  });

  it('should create an action to set meter', () => {
    const meter = 3;
    const expectedAction = {
      type: types.SET_METER,
      meter,
    };
    expect(actions.setMeter(meter)).toEqual(expectedAction);
  });

  it('should create an action to set the master volume', () => {
    const masterVolume = 0.8;
    const expectedAction = {
      type: types.SET_MASTER_VOLUME,
      masterVolume,
    };
    expect(actions.setMasterVolume(masterVolume)).toEqual(expectedAction);
  });

  it('should create an action to set the accent volume', () => {
    const accentVolume = 1;
    const expectedAction = {
      type: types.SET_ACCENT_VOLUME,
      accentVolume,
    };
    expect(actions.setAccentVolume(accentVolume)).toEqual(expectedAction);
  });

  it('should create an action to set the quarter note volume', () => {
    const quarterVolume = 0.7;
    const expectedAction = {
      type: types.SET_QUARTER_VOLUME,
      quarterVolume,
    };
    expect(actions.setQuarterVolume(quarterVolume)).toEqual(expectedAction);
  });

  it('should create an action to set the eighth note volume', () => {
    const eighthVolume = 0.5;
    const expectedAction = {
      type: types.SET_EIGTH_VOLUME,
      eighthVolume,
    };
    expect(actions.setEigthVolume(eighthVolume)).toEqual(expectedAction);
  });

  it('should create an action to set the sixteenth note volume', () => {
    const sixteenthVolume = 0.4;
    const expectedAction = {
      type: types.SET_SIXTEENTH_VOLUME,
      sixteenthVolume,
    };
    expect(actions.setSixteenthVolume(sixteenthVolume)).toEqual(expectedAction);
  });

  it('should create an action to set the triplet note volume', () => {
    const tripletVolume = 0.2;
    const expectedAction = {
      type: types.SET_TRIPLET_VOLUME,
      tripletVolume,
    };
    expect(actions.setTripletVolume(tripletVolume)).toEqual(expectedAction);
  });
});
