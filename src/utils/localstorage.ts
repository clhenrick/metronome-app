import { defaultState } from '../types';
import { AppState } from '../types';

const storageKey = 'metronome-app-state';

export function getSavedState(): AppState {
  const storage = window.localStorage;

  if (!storage) {
    return defaultState;
  }

  const raw = storage.getItem(storageKey);

  if (raw) {
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  }

  return defaultState;
}

export function setSavedState(state: AppState): void {
  const storage = window.localStorage;

  if (!storage) {
    return;
  }

  // isPlaying is not persisted — it always starts as false
  const { isPlaying: _isPlaying, ...rest } = state;

  storage.setItem(storageKey, JSON.stringify(rest));
}
