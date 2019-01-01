import * as types from '../src/constants';
import { metronomeMiddleware, localStorageMiddleware } from '../src/middleware';

jest.mock('../src/utils/worker.js');
jest.mock('../src/utils/metronome.js');
jest.mock('../src/utils/localstorage.js');
jest.useFakeTimers();

const localstorage = require("../src/utils/localstorage");

// fake redux implementation
const create = (middleware) => () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = action => middleware(store)(next)(action);
  return { store, next, invoke };
};

const createMetronomeReduxMock = create(metronomeMiddleware);
const createLocalStorageReduxMock = create(localStorageMiddleware);

describe('middleware', () => {
  describe('metronome middleware', () => {
    it('should invoke metronome.play on TOGGLE_PLAY_PAUSE', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.TOGGLE_PLAY_PAUSE, isPlaying: true };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setTempo on SET_TEMPO', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_TEMPO, tempo: 100 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setMasterVolume on SET_MASTER_VOLUME', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_MASTER_VOLUME, masterVolume: 1 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setAccentVolume on SET_ACCENT_VOLUME', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_ACCENT_VOLUME, accentVolume: 0.8 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setQuarterVolume on SET_QUARTER_VOLUME', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_QUARTER_VOLUME, quarterVolume: 1 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setSixteenthVolume on SET_SIXTEENTH_VOLUME', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_SIXTEENTH_VOLUME, sixteenthVolume: 1 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  
    it('should invoke metronome.setTripletVolume on SET_TRIPLET_VOLUME', () => {
      const { next, invoke } = createMetronomeReduxMock();
      const action = { type: types.SET_TRIPLET_VOLUME, tripletVolume: 1 };
      invoke(action);
      expect(next).toHaveBeenCalledWith(action);
    });
  })

  describe('localStorage middleware', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should not call setSavedState with non-whitelisted actions', () => {
      const { invoke } = createLocalStorageReduxMock();
      const action = { type: types.TOGGLE_PLAY_PAUSE, isPlaying: true };
      invoke(action);
      expect(localstorage.setSavedState).not.toHaveBeenCalled();
    });

    it('should call setSavedState with whitelisted actions', () => {
      const { invoke } = createLocalStorageReduxMock();
      const action = { type: types.SET_TEMPO, tempo: 30 };
      invoke(action);
      expect(localstorage.setSavedState).toHaveBeenCalled();
    });
  })
});
