// Redux Middleware configuration
// see: https://redux.js.org/docs/advanced/Middleware.html
import logger from 'redux-logger';
import {
  play,
  setTempo,
  setMeter,
  setMasterVolume,
  setAccentVolume,
  setQuarterVolume,
  setEigthVolume,
  setSixteenthVolume,
  setTripletVolume,
} from './utils/metronome';
import {
  TOGGLE_PLAY_PAUSE,
  SET_TEMPO,
  SET_METER,
  SET_MASTER_VOLUME,
  SET_ACCENT_VOLUME,
  SET_QUARTER_VOLUME,
  SET_EIGTH_VOLUME,
  SET_SIXTEENTH_VOLUME,
  SET_TRIPLET_VOLUME,
  SAVE_APP_STATE_ACTIONS
} from './constants';
import {setSavedState} from "./utils/localstorage"

// all Redux middleware will be exported within this array, aka the "middleware chain"
const middleware = [];

// this middleware passes redux state updates to relevant metronome logic
// there's probably a more elegant or less redundant way of doing this!
export const metronomeMiddleware = store => next => action => {
  // intercept whatever action is being passed to redux, and then get parts of state to pass to the metronome
  // here state reflects changes already made by the reducer as the action is dispatched via next(action)
  const result = next(action);
  const {
    isPlaying,
    tempo,
    meter,
    masterVolume,
    accentVolume,
    quarterVolume,
    eighthVolume,
    sixteenthVolume,
    tripletVolume,
  } = store.getState();

  switch (action.type) {
    case TOGGLE_PLAY_PAUSE:
      play(isPlaying);
      break;

    case SET_TEMPO:
      setTempo(tempo);
      break;

    case SET_METER:
      setMeter(meter);
      break;

    case SET_MASTER_VOLUME:
      setMasterVolume(masterVolume);
      break;

    case SET_ACCENT_VOLUME:
      setAccentVolume(accentVolume);
      break;

    case SET_QUARTER_VOLUME:
      setQuarterVolume(quarterVolume);
      break;

    case SET_EIGTH_VOLUME:
      setEigthVolume(eighthVolume);
      break;

    case SET_SIXTEENTH_VOLUME:
      setSixteenthVolume(sixteenthVolume);
      break;

    case SET_TRIPLET_VOLUME:
      setTripletVolume(tripletVolume);
      break;

    default:
  }

  return result;
};

// save the application state to localstorage on certain actions only
export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();

  if (SAVE_APP_STATE_ACTIONS.indexOf(action.type) !== -1) {
    setSavedState(state);
  }

  return result;
}

// add the custom middleware to the middleware chain
middleware.push(metronomeMiddleware);
middleware.push(localStorageMiddleware);

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  // redux-logger only works in a browser environment
  middleware.push(logger);
}

export default middleware;
