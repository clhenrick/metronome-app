import { getSavedState, setSavedState } from '../src/utils/localstorage';
import LocalStorageMock from '../src/utils/__mocks__/browserMocks';
jest.mock('../src/utils/localstorage.js');

describe('localstorage', () => {
  const localStorage = new LocalStorageMock();

  it('should access saved state from window.localStorage', () => {
    getSavedState();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should save app state using window.localStorage', () => {});
});
