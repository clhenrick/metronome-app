// Redux reducer: updates state based on action types & data

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
  DEFAULT_IS_PLAYING,
  DEFAULT_TEMPO,
  DEFAULT_METER,
  DEFAULT_MASTER_VOLUME,
  DEFAULT_ACCENT_VOLUME,
  DEFAULT_QUARTER_VOLUME,
  DEFAULT_EIGTH_VOLUME,
  DEFAULT_SIXTEENTH_VOLUME,
  DEFAULT_TRIPLET_VOLUME
} from '../constants';

export const defaultState = {
  isPlaying: DEFAULT_IS_PLAYING,
  tempo: DEFAULT_TEMPO,
  meter: DEFAULT_METER,
  masterVolume: DEFAULT_MASTER_VOLUME,
  accentVolume: DEFAULT_ACCENT_VOLUME,
  quarterVolume: DEFAULT_QUARTER_VOLUME,
  eighthVolume: DEFAULT_EIGTH_VOLUME,
  sixteenthVolume: DEFAULT_SIXTEENTH_VOLUME,
  tripletVolume: DEFAULT_TRIPLET_VOLUME
};

const keepWithinRange = range => value => {
  if (value <= range.max && value >= range.min) {
    return value;
  }
  if (value > range.max) {
    return range.max;
  }
  return range.min;
};

const keepWithinTempoRange = keepWithinRange({ min: 1, max: 250 });
const keepWithinMeterRange = keepWithinRange({ min: 1, max: 13 });
const keepWithinVolumeRange = keepWithinRange({ min: 0, max: 1 });

export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };

    case SET_TEMPO:
      return {
        ...state,
        tempo: keepWithinTempoRange(action.tempo)
      };

    case SET_METER:
      return {
        ...state,
        meter: keepWithinMeterRange(action.meter)
      };

    case SET_MASTER_VOLUME:
      return {
        ...state,
        masterVolume: keepWithinVolumeRange(action.masterVolume)
      };

    case SET_ACCENT_VOLUME:
      return {
        ...state,
        accentVolume: keepWithinVolumeRange(action.accentVolume)
      };

    case SET_QUARTER_VOLUME:
      return {
        ...state,
        quarterVolume: keepWithinVolumeRange(action.quarterVolume)
      };

    case SET_EIGTH_VOLUME:
      return {
        ...state,
        eighthVolume: keepWithinVolumeRange(action.eighthVolume)
      };

    case SET_SIXTEENTH_VOLUME:
      return {
        ...state,
        sixteenthVolume: keepWithinVolumeRange(action.sixteenthVolume)
      };

    case SET_TRIPLET_VOLUME:
      return {
        ...state,
        tripletVolume: keepWithinVolumeRange(action.tripletVolume)
      };

    default:
      return state;
  }
}
