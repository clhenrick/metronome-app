import { defaultState } from '../reducers';

const storageKey = 'metronome-app-state';

export function getSavedState() {
  const storage = window.localStorage;

  if (!storage) {
    return defaultState;
  }

  let state = storage.getItem(storageKey);

  if (state) {
    state = JSON.parse(state);
    state = {
      ...defaultState,
      ...state
    };
  }

  return state || defaultState;
}

export function setSavedState(state) {
  const storage = window.localStorage;

  if (!storage) {
    return;
  }

  // ignore the isPlaying boolean when saving app state
  const { isPlaying, ...rest } = state;

  storage.setItem(storageKey, JSON.stringify(rest));
}
