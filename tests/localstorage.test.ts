import { getSavedState, setSavedState } from '../src/utils/localstorage';
import { defaultState } from '../src/types';

describe('localstorage module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('calls localStorage.getItem when reading state', () => {
    const spy = vi.spyOn(localStorage, 'getItem');
    getSavedState();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('returns defaultState when no state has been saved', () => {
    expect(getSavedState()).toEqual(defaultState);
  });

  it('returns merged state when state has been previously saved', () => {
    const stateToSave = { ...defaultState, tempo: 60, meter: 3 };
    setSavedState(stateToSave);
    const retrieved = getSavedState();
    expect(retrieved).toEqual({ ...stateToSave, isPlaying: false });
  });

  it('calls localStorage.setItem when saving state', () => {
    const spy = vi.spyOn(localStorage, 'setItem');
    setSavedState({ ...defaultState, tempo: 190 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not persist isPlaying', () => {
    setSavedState({ ...defaultState, isPlaying: true });
    expect(getSavedState().isPlaying).toBe(false);
  });
});
