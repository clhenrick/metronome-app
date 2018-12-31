import * as types from '../src/constants';
import { metronomeMiddleware } from '../src/middleware';

jest.mock('../src/utils/worker.js');
jest.mock('../src/utils/metronome.js');
jest.useFakeTimers();

// fake redux implementation
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = action => metronomeMiddleware(store)(next)(action);
  return { store, next, invoke };
};

describe('middleware', () => {
  it('should invoke metronome.play on TOGGLE_PLAY_PAUSE', () => {
    const { next, invoke } = create();
    const action = { type: types.TOGGLE_PLAY_PAUSE, isPlaying: true };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setTempo on SET_TEMPO', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_TEMPO, tempo: 100 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setMasterVolume on SET_MASTER_VOLUME', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_MASTER_VOLUME, masterVolume: 1 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setAccentVolume on SET_ACCENT_VOLUME', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_ACCENT_VOLUME, accentVolume: 0.8 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setQuarterVolume on SET_QUARTER_VOLUME', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_QUARTER_VOLUME, quarterVolume: 1 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setSixteenthVolume on SET_SIXTEENTH_VOLUME', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_SIXTEENTH_VOLUME, sixteenthVolume: 1 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should invoke metronome.setTripletVolume on SET_TRIPLET_VOLUME', () => {
    const { next, invoke } = create();
    const action = { type: types.SET_TRIPLET_VOLUME, tripletVolume: 1 };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
