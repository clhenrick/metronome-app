// Redux action creators

import {
  TOGGLE_PLAY_PAUSE,
  SET_TEMPO,
  SET_METER,
  SET_MASTER_VOLUME,
  SET_ACCENT_VOLUME,
  SET_QUARTER_VOLUME,
  SET_EIGTH_VOLUME,
  SET_SIXTEENTH_VOLUME,
  SET_TRIPLET_VOLUME
} from '../constants';

export const togglePlayPause = () => ({
  type: TOGGLE_PLAY_PAUSE
});

export const setTempo = tempo => ({
  type: SET_TEMPO,
  tempo
});

export const setMeter = meter => ({
  type: SET_METER,
  meter
});

export const setMasterVolume = masterVolume => ({
  type: SET_MASTER_VOLUME,
  masterVolume
});

export const setAccentVolume = accentVolume => ({
  type: SET_ACCENT_VOLUME,
  accentVolume
});

export const setQuarterVolume = quarterVolume => ({
  type: SET_QUARTER_VOLUME,
  quarterVolume
});

export const setEigthVolume = eighthVolume => ({
  type: SET_EIGTH_VOLUME,
  eighthVolume
});

export const setSixteenthVolume = sixteenthVolume => ({
  type: SET_SIXTEENTH_VOLUME,
  sixteenthVolume
});

export const setTripletVolume = tripletVolume => ({
  type: SET_TRIPLET_VOLUME,
  tripletVolume
});
