import reducer, { defaultState } from '../src/reducers';
import * as types from '../src/constants';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isPlaying: false,
      tempo: 120.0,
      meter: 4,
      masterVolume: 0.5,
      accentVolume: 1,
      quarterVolume: 0.7,
      eighthVolume: 0,
      sixteenthVolume: 0,
      tripletVolume: 0,
    });
  });

  it('should handle TOGGLE_PLAY_PAUSE', () => {
    expect(
      reducer(defaultState, {
        type: types.TOGGLE_PLAY_PAUSE,
      })
    ).toEqual({
      ...defaultState,
      isPlaying: true,
    });
  });

  it('should handle SET_TEMPO', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_TEMPO,
        tempo: 150,
      })
    ).toEqual({
      ...defaultState,
      tempo: 150,
    });
  });

  it('should handle SET_METER', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_METER,
        meter: 5,
      })
    ).toEqual({
      ...defaultState,
      meter: 5,
    });
  });

  it('should handle SET_MASTER_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_MASTER_VOLUME,
        masterVolume: 0.8,
      })
    ).toEqual({
      ...defaultState,
      masterVolume: 0.8,
    });
  });

  it('should handle SET_ACCENT_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_ACCENT_VOLUME,
        accentVolume: 0.5,
      })
    ).toEqual({
      ...defaultState,
      accentVolume: 0.5,
    });
  });

  it('should handle SET_QUARTER_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_QUARTER_VOLUME,
        quarterVolume: 0,
      })
    ).toEqual({
      ...defaultState,
      quarterVolume: 0,
    });
  });

  it('should handle SET_EIGTH_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_EIGTH_VOLUME,
        eighthVolume: 0.4,
      })
    ).toEqual({
      ...defaultState,
      eighthVolume: 0.4,
    });
  });

  it('should handle SET_SIXTEENTH_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_SIXTEENTH_VOLUME,
        sixteenthVolume: 0.6,
      })
    ).toEqual({
      ...defaultState,
      sixteenthVolume: 0.6,
    });
  });

  it('should handle SET_TRIPLET_VOLUME', () => {
    expect(
      reducer(defaultState, {
        type: types.SET_TRIPLET_VOLUME,
        tripletVolume: 0.3,
      })
    ).toEqual({
      ...defaultState,
      tripletVolume: 0.3,
    });
  });
});
