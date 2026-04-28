// metronome creates a Worker at module level; mock it so jsdom doesn't error
vi.mock('../src/utils/metronome', () => ({
  init: vi.fn(),
  play: vi.fn(),
  setTempo: vi.fn(),
  setMeter: vi.fn(),
  setMasterVolume: vi.fn(),
  setAccentVolume: vi.fn(),
  setQuarterVolume: vi.fn(),
  setEigthVolume: vi.fn(),
  setSixteenthVolume: vi.fn(),
  setTripletVolume: vi.fn(),
}));

import { reducer } from '../src/context/MetronomeContext';
import { defaultState } from '../src/types';

describe('reducer', () => {
  it('returns unchanged state for unknown action', () => {
    expect(reducer(defaultState, { type: 'TOGGLE_PLAY_PAUSE' })).not.toBe(defaultState);
    // confirm default values
    expect(defaultState).toMatchObject({
      isPlaying: false,
      tempo: 120,
      meter: 4,
      masterVolume: 0.5,
      accentVolume: 1,
      quarterVolume: 0.75,
      eighthVolume: 0,
      sixteenthVolume: 0,
      tripletVolume: 0,
    });
  });

  it('handles TOGGLE_PLAY_PAUSE', () => {
    expect(reducer(defaultState, { type: 'TOGGLE_PLAY_PAUSE' })).toEqual({
      ...defaultState,
      isPlaying: true,
    });
    expect(reducer({ ...defaultState, isPlaying: true }, { type: 'TOGGLE_PLAY_PAUSE' })).toEqual({
      ...defaultState,
      isPlaying: false,
    });
  });

  it('handles SET_TEMPO with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_TEMPO', tempo: 150 })).toEqual({
      ...defaultState,
      tempo: 150,
    });
    expect(reducer(defaultState, { type: 'SET_TEMPO', tempo: 300 })).toEqual({
      ...defaultState,
      tempo: 250,
    });
    expect(reducer(defaultState, { type: 'SET_TEMPO', tempo: -1 })).toEqual({
      ...defaultState,
      tempo: 1,
    });
  });

  it('handles SET_METER with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_METER', meter: 5 })).toEqual({
      ...defaultState,
      meter: 5,
    });
    expect(reducer(defaultState, { type: 'SET_METER', meter: 14 })).toEqual({
      ...defaultState,
      meter: 13,
    });
    expect(reducer(defaultState, { type: 'SET_METER', meter: 0 })).toEqual({
      ...defaultState,
      meter: 1,
    });
  });

  it('handles SET_MASTER_VOLUME with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_MASTER_VOLUME', masterVolume: 0.8 })).toEqual({
      ...defaultState,
      masterVolume: 0.8,
    });
    expect(reducer(defaultState, { type: 'SET_MASTER_VOLUME', masterVolume: 1.1 })).toEqual({
      ...defaultState,
      masterVolume: 1,
    });
    expect(reducer(defaultState, { type: 'SET_MASTER_VOLUME', masterVolume: -0.1 })).toEqual({
      ...defaultState,
      masterVolume: 0,
    });
  });

  it('handles SET_ACCENT_VOLUME with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_ACCENT_VOLUME', accentVolume: 0.5 })).toEqual({
      ...defaultState,
      accentVolume: 0.5,
    });
    expect(reducer(defaultState, { type: 'SET_ACCENT_VOLUME', accentVolume: 1.1 })).toEqual({
      ...defaultState,
      accentVolume: 1,
    });
    expect(reducer(defaultState, { type: 'SET_ACCENT_VOLUME', accentVolume: -1 })).toEqual({
      ...defaultState,
      accentVolume: 0,
    });
  });

  it('handles SET_QUARTER_VOLUME', () => {
    expect(reducer(defaultState, { type: 'SET_QUARTER_VOLUME', quarterVolume: 0 })).toEqual({
      ...defaultState,
      quarterVolume: 0,
    });
  });

  it('handles SET_EIGHTH_VOLUME with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_EIGHTH_VOLUME', eighthVolume: 0.4 })).toEqual({
      ...defaultState,
      eighthVolume: 0.4,
    });
    expect(reducer(defaultState, { type: 'SET_EIGHTH_VOLUME', eighthVolume: 1.2 })).toEqual({
      ...defaultState,
      eighthVolume: 1,
    });
    expect(reducer(defaultState, { type: 'SET_EIGHTH_VOLUME', eighthVolume: -0.4 })).toEqual({
      ...defaultState,
      eighthVolume: 0,
    });
  });

  it('handles SET_SIXTEENTH_VOLUME with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_SIXTEENTH_VOLUME', sixteenthVolume: 0.6 })).toEqual({
      ...defaultState,
      sixteenthVolume: 0.6,
    });
    expect(reducer(defaultState, { type: 'SET_SIXTEENTH_VOLUME', sixteenthVolume: 1.1 })).toEqual({
      ...defaultState,
      sixteenthVolume: 1,
    });
    expect(reducer(defaultState, { type: 'SET_SIXTEENTH_VOLUME', sixteenthVolume: -1.1 })).toEqual(
      {
        ...defaultState,
        sixteenthVolume: 0,
      }
    );
  });

  it('handles SET_TRIPLET_VOLUME with clamping', () => {
    expect(reducer(defaultState, { type: 'SET_TRIPLET_VOLUME', tripletVolume: 0.3 })).toEqual({
      ...defaultState,
      tripletVolume: 0.3,
    });
    expect(reducer(defaultState, { type: 'SET_TRIPLET_VOLUME', tripletVolume: 1.3 })).toEqual({
      ...defaultState,
      tripletVolume: 1,
    });
    expect(reducer(defaultState, { type: 'SET_TRIPLET_VOLUME', tripletVolume: -0.3 })).toEqual({
      ...defaultState,
      tripletVolume: 0,
    });
  });
});
