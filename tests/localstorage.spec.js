import { getSavedState, setSavedState } from '../src/utils/localstorage';
import { defaultState } from '../src/reducers';

describe('localstorage module', () => {
  it('should access any saved state from window.localStorage.getItem', () => {
    const spy = jest.spyOn(localStorage, 'getItem');
    getSavedState();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return default app state when no state has been previously saved', () => {
    const state = getSavedState();
    expect(state).toEqual(defaultState);
  });

  it('should return a non-default state when state has been previously saved', () => {
    const stateToSave = { ...defaultState, tempo: 60, meter: 3 };
    setSavedState(stateToSave);
    const stateRetrieved = getSavedState();
    expect(stateToSave).toEqual({
      isPlaying: false,
      ...stateRetrieved
    });
  });

  it('should save app state using window.localStorage.setItem', () => {
    const spy = jest.spyOn(localStorage, 'setItem');
    setSavedState({ ...defaultState, tempo: 190 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should ignore `isPlaying` when saving state', () => {
    setSavedState({ isPlaying: true });
    const state = getSavedState();
    const expectedState = { ...defaultState };
    expect(state).toEqual(expectedState);
  });
});
