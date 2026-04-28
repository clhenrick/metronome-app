import { applyMiddleware, createStore } from 'redux';
import { getSavedState } from './utils/localstorage';

import rootReducer from './reducers/';
import middleware from './middleware';

function makeStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}

const store = makeStore(getSavedState());
export default store;
